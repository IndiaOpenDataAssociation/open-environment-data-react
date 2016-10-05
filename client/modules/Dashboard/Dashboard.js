import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import DashboardMap from './components/Map'
import cities from './components/Citydata'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Dashboardhome from './pages/Home'
import Realtime from './pages/Realtime'
import superagent from 'superagent'
import LoadingMap from './components/LoadingMap'


export default class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = this.getState()
    this.changeCities = this.changeCities.bind(this)
    this.openPanel = this.openPanel.bind(this)
    this.closePanel = this.closePanel.bind(this)
    this.changeTab = this.changeTab.bind(this)
  }

  getState(){
    return {
      markers: [],
      city: '',
      show_panel: false,
      active_tab: 'home',
      loading: true,
      lat: '',
      lng: ''
    }
  }

  componentDidMount(){
    superagent.get('https://openenvironment.p.mashape.com/all/public/devices').set('X-Mashape-Key','SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      console.log('res', res.body)
      this.setState({loading: false, markers: res.body})
    }.bind(this))
  }

  changeCities(e){
    this.setState({city: e.target.value})
  }

  openPanel(){
    this.setState({show_panel: true})
  }

  closePanel(){
    this.setState({show_panel: false})
  }

  changeTab(tabName){
    this.setState({active_tab: tabName})
  }

  render(){
    return(
      <div>
        {
          this.state.loading
          ?
            <div style={{marginTop: '50px'}}>
              <Navbar />
              <LoadingMap />
            </div>

          :
            <div>
              <Navbar />
              <section className="dashboard">
                <DashboardMap markers={this.state.markers} cityValue={this.state.city} />
                <div className="select-cities-box">
                  <FormGroup controlId="formControlsSelect" >
                    <FormControl componentClass="select" placeholder="select" ref="cityList" className="select-cities" onChange={this.changeCities}>
                      <option value="India">India</option>
                      {
                        cities.map((element, index)=>{
                          return(
                            <option key={index} value={index}>{element.city}</option>
                          )
                        })
                      }

                    </FormControl>
                  </FormGroup>
                </div>

                <div className="info-panel-toggle">
                  <a className="open-panel" onClick={this.openPanel}><i className="fa fa-navicon" ></i></a>
                </div>

                {
                  this.state.show_panel
                    ?
                    <div className="review-panel" >
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          An Open India Initiative
                          <span style={{float: 'right'}} className="close-panel" onClick={this.closePanel}><i className="fa fa-close"></i></span>
                        </div>
                        <div className="panel-body">
                          {
                            this.state.active_tab == 'home'
                              ?
                              <Dashboardhome />
                              :
                              ''
                          }
                          {
                            this.state.active_tab == 'realtime'
                              ?
                              <Realtime />
                              :
                              ''
                          }
                          {
                            this.state.active_tab == 'analytics'
                              ?
                              <div id="home">analytics</div>
                              :
                              ''
                          }


                        </div>
                        <div className="panel-footer">
                          <ul className="review-panel-tab">
                            <a onClick={() => {this.changeTab('home')}} className={this.state.active_tab == 'home' ? 'active' : ''}>
                              <li>
                                <img src={this.state.active_tab == 'home' ? 'assets/images/icons/home_b.png' : 'assets/images/icons/home_g.png' }/>
                              </li>
                            </a>

                            <a onClick={() => {this.changeTab('realtime')}} className={this.state.active_tab == 'realtime' ? 'active' : ''}>
                              <li>
                                <img src={this.state.active_tab == 'realtime' ? 'assets/images/icons/realtime_b.png' : 'assets/images/icons/realtime_g.png' }/>
                              </li>
                            </a>

                            <a onClick={() => {this.changeTab('analytics')}} className={this.state.active_tab == 'analytics' ? 'active' : ''}>
                              <li>
                                <img src={this.state.active_tab == 'analytics' ? 'assets/images/icons/analytics_b.png' : 'assets/images/icons/analytics_g.png' }/>
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                    :
                    ''

                }

              </section>
            </div>
        }

      </div>
    )
  }
}
