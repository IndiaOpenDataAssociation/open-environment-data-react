import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import LatestDevice from './pages/LatestDevice'
import superagent from 'superagent'
import LoadingMap from './components/LoadingMap'
import Map from '../Map/index'
import Datetime from 'react-datetime'
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = this.getState()
    this.changeCities = this.changeCities.bind(this)
    this.openPanel = this.openPanel.bind(this)
    this.closePanel = this.closePanel.bind(this)
    this.changeTab = this.changeTab.bind(this)
    this.changeDisable = this.changeDisable.bind(this)
    this.realTimeData = this.realTimeData.bind(this)
    this.analyticsData = this.analyticsData.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  }

  getState() {
    return {
      markers: [],
      realTimeData: [],
      analyticsData: [],
      city: '',
      show_panel: false,
      active_tab: 'home',
      disable_tab: true,
      loading: true,
      lat: '',
      lng: '',
      realTimedataLoading: true,
      analyticsdataLoading: true,
      city_label: '',
      device_type: '',
      time: '',
      no_records: false,
      iscity_changed: false,
      city_list: [],
      marker_id: '',
    }
  }

  componentDidMount() {
    superagent.get('https://openenvironment.p.mashape.com/all/public/devices').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      this.setState({loading: false, markers: res.body})
    }.bind(this))
    superagent.get('https://openenvironment.p.mashape.com/all/public/devices/citiesloc').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      this.setState({city_list: res.body})
    }.bind(this))
  }

  changeCities(e) {
    this.setState({city: e.target.value, iscity_changed: true})
  }

  openPanel() {
    this.setState({show_panel: true})
  }

  closePanel() {
    this.setState({show_panel: false})
  }

  changeTab(tabName) {
    this.setState({active_tab: tabName})

  }

  changeDisable(boolean, label, deviceType) {
    this.setState({
      // disable_tab: boolean,
      // active_tab: 'realtime',
      show_panel: true,
      city_label: label,
      // device_type: deviceType
      analyticsData: [],
      realTimeData: [],
      analyticsdataLoading: true,
      realTimedataLoading: true

    })
  }

  realTimeData(id, time) {
    superagent.get('https://openenvironment.p.mashape.com/all/public/data/cur/' + id).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      this.setState({realTimeData: res.body, time: time, marker_id : id})
      this.setState({realTimedataLoading: false})
    }.bind(this))
  }

  analyticsData(id, time) {
    superagent.get('https://openenvironment.p.mashape.com/all/public/data/hours/24/' + id).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      this.setState({analyticsData: res.body, time: time, no_records: false})
      this.setState({analyticsdataLoading: false})

    }.bind(this))

  }

  handleMarkerClick(targetMarker, index) {

    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true
          }
        }
        return marker;
      })
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }


  render() {
    return (
      <div>
        {
          this.state.loading
            ?
            <div style={{marginTop: '50px'}}>
              <Navbar />
              <LoadingMap
              />
            </div>

            :
            <div>
              <Navbar />
              <section className="dashboard">
                <Map
                  markers={this.state.markers}
                  cityValue={this.state.city}
                  cityChanged={this.state.iscity_changed}
                  setDisable={this.changeDisable}
                  callRealtime={this.realTimeData}
                  callAnalytics={this.analyticsData}
                  cities={this.state.city_list}
                  onMarkerClick={this.handleMarkerClick}
                  onMarkerClose={this.handleMarkerClose}
                />
                <div className="select-cities-box">
                  <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" placeholder="select" ref="cityList" className="select-cities"
                                 onChange={this.changeCities}>
                      <option value="India">India</option>
                      {
                        this.state.city_list.map((element, index)=> {
                          return (
                            <option key={index} value={index}>{element.name}</option>
                          )
                        })
                      }

                    </FormControl>
                  </FormGroup>
                </div>

                <div className="info-panel-toggle">
                  <a className="open-panel" onClick={this.openPanel}><i className="fa fa-navicon"></i></a>
                </div>

                {
                  this.state.show_panel
                    ?
                    this.state.realTimedataLoading == false && this.state.analyticsdataLoading == false
                      ?
                      (
                        <div className="review-panel">
                          <div className="panel panel-default">
                            <div className="panel-heading ">
                              <div className="row">
                                <div className="col-sm-11 col-xs-11">
                                  <div className="col-sm-5" style={{position: 'relative'}}>
                                    <div className="blot">
                                      {
                                        this.state.realTimeData[0].type == 'CPCB'
                                        ?
                                          <img src="../../assets/images/CPCB.png"/>
                                        :
                                          (
                                            this.state.realTimeData[0].type == 'AIROWL3G' || this.state.realTimeData[0].type == 'AIROWLWI'
                                              ?
                                              <img src="../../assets/images/AIROWL3G.png"/>
                                              :
                                              <img src="../../assets/images/POLLUDRON_PUBLIC.png"/>

                                          )
                                      }

                                    </div>
                                    <span className="device-label">
                                      {this.state.realTimeData[0].label}, { this.state.realTimeData[0].city}, { this.state.realTimeData[0].country }
                                    </span><br/>
                                    <small className="device-type">
                                      {this.state.realTimeData[0].type}
                                    </small><br/>

                                  </div>
                                  <div className="col-sm-7 dtpicker">
                                    <small>From</small><Datetime className="fromDt"/>
                                    <small>To</small><Datetime className="toDt"/>
                                  </div>
                                </div>
                                <span className="col-sm-1 col-xs-1 text-right close-panel" onClick={this.closePanel}><i
                                  className="fa fa-close"></i></span>
                              </div>
                            </div>

                            <div className="panel-body">
                              <LatestDevice
                                analysisData={this.state.analyticsData}
                                realtimeData={this.state.realTimeData}
                                time={this.state.time}
                                markerId={this.state.marker_id}
                              />
                            </div>

                            {/*<div className="panel-footer">
                             <ul className="review-panel-tab">
                             <a
                             onClick={() => {this.changeTab('home')}}
                             className={this.state.active_tab == 'home' ? 'active' : ''}
                             >
                             <li>
                             <img src={this.state.active_tab == 'home' ? 'assets/images/icons/home_b.png' : 'assets/images/icons/home_g.png' }/>
                             </li>
                             </a>

                             <a
                             onClick={() => {
                             this.state.disable_tab
                             ?
                             null
                             :
                             this.changeTab('realtime')
                             }}
                             className={this.state.active_tab == 'realtime' ? 'active' : ''}>
                             <li>
                             <img src={this.state.active_tab == 'realtime' ? 'assets/images/icons/realtime_b.png' : 'assets/images/icons/realtime_g.png' }/>
                             </li>
                             </a>

                             <a onClick={() => {
                             this.state.disable_tab
                             ?
                             null
                             :

                             this.changeTab('analytics')


                             }}
                             className={this.state.active_tab == 'analytics' ? 'active' : ''}>
                             <li>
                             <img src={this.state.active_tab == 'analytics' ? 'assets/images/icons/analytics_b.png' : 'assets/images/icons/analytics_g.png' }/>
                             </li>
                             </a>
                             </ul>
                             </div>*/}
                          </div>
                        </div>
                      )
                      :
                      null
                    :
                    null

                }

              </section>
            </div>
        }
        <div className="dashboard-footer">
          <a href="http://indiaopendata.com/" target="_blank" className="title">An India Open Data Association
            Initiative</a>
          <a href="https://oizom.com/" target="_blank" className="regards">Made with <i
            className="white fa fa-heart"></i> Oizom</a>
        </div>

      </div>
    )
  }
}
