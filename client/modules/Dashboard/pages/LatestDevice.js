import React, {Component} from 'react'
import GraphView from './GraphView'
import CalendarView from './CalendarView'
require('es6-promise').polyfill();
import superagent from 'superagent'
export default class LatestDevice extends Component {

  constructor(props) {
    super(props)
    this.state = {activeGraph: 'graphview', limits: []}
    this.changeGraphData = this.changeGraphData.bind(this)
    this.displayTime = this.displayTime.bind(this)
  }

  componentDidMount(){
    superagent.get('https://openenvironment.p.mashape.com/limits').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      this.setState({limits: res.body})
    }.bind(this))
  }

  componentWillUnmount(){
     this.props.emptyDate()
  }

  displayTime() {
    let a = new Date(this.props.time * 1000)

    var year = a.getFullYear().toString().substr(2, 2);
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var ampm = hour >= 12 ? 'pm' : 'am'
    let displayTime = hour + ':' + min + " " + ampm + " " + date + "-" + month + "-" + year;
    return displayTime
  }

  getCODegree(co) {
    let obj = {};
    if (co > 25) {
      obj.class = 'gt-50';
    }
    var percent = co, deg = 360 * percent / 50;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  getSODegree(so) {
    let obj = {};
    if (so > 800) {
      obj.class = 'gt-50';
    }
    var percent = so,
      deg = 360 * percent / 1600;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  getNODegree(no) {
    let obj = {};
    if (no > 250) {
      obj.class = 'gt-50';
    }
    var percent = no,
      deg = 360 * percent / 500;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  getPM10Degree(pm10) {
    let obj = {};
    if (pm10 > 215) {
      obj.class = 'gt-50';
    }
    var percent = pm10,
      deg = 360 * percent / 430;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  getPM25Degree(pm25) {
    let obj = {};
    if (pm25 > 125) {
      obj.class = 'gt-50';
    }
    var percent = pm25,
      deg = 360 * percent / 250;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  changeGraphData(graph){
    this.setState({activeGraph : graph})
  }

  render() {
    let latestDevice = this.props.realtimeData[0];
    return (
      <div className="dashboard-home">
        <div className="row">
          <div className="col-sm-4 col-xs-12 remove-padding text-center" style={{padding: '30px 0px 30px 20px', position: 'relative'}}>
            <div className="aqi-status">
              <p>Current AQI</p>
              <strong className=
                {
                  latestDevice.aqi <= 50
                    ?
                    'good'
                    :
                    (
                      latestDevice.aqi > 50 && latestDevice.aqi < 101
                        ?
                        'satisfactory'
                        :
                        (
                          latestDevice.aqi > 100 && latestDevice.aqi < 201
                            ?
                            'moderate'
                            :
                            (
                              latestDevice.aqi > 200 && latestDevice.aqi < 301
                                ?
                                'poor'
                                :
                                (
                                  latestDevice.aqi > 300 && latestDevice.aqi < 401
                                    ?
                                    'vpoor'
                                    :
                                    'severe'
                                )
                            )
                        )
                    )

              }>
                {latestDevice.aqi}
              </strong>

              <p className={`aqi-grade
                ${latestDevice.aqi <= 50
                    ?
                    'good'
                    :
                    (
                      latestDevice.aqi > 50 && latestDevice.aqi < 101
                        ?
                        'satisfactory'
                        :
                        (
                          latestDevice.aqi > 100 && latestDevice.aqi < 201
                            ?
                            'moderate'
                            :
                            (
                              latestDevice.aqi > 200 && latestDevice.aqi < 301
                                ?
                                'poor'
                                :
                                (
                                  latestDevice.aqi > 300 && latestDevice.aqi < 401
                                    ?
                                    'vpoor'
                                    :
                                    'severe'
                                )
                            )
                        )
                    )
              }`}>
                {
                  latestDevice.aqi <= 50
                    ?
                    'Good'
                    :
                    (
                      latestDevice.aqi > 50 && latestDevice.aqi < 101
                        ?
                        'Satisfactory'
                        :
                        (
                          latestDevice.aqi > 100 && latestDevice.aqi < 201
                            ?
                            'Moderate'
                            :
                            (
                              latestDevice.aqi > 200 && latestDevice.aqi < 301
                                ?
                                'Poor'
                                :
                                (
                                  latestDevice.aqi > 300 && latestDevice.aqi < 401
                                    ?
                                    'Very Poor'
                                    :
                                    'Severe'
                                )
                            )
                        )
                    )
                }
              </p>

              <div className="last-updated">
                <span>Last Updated: {this.displayTime()}</span>
              </div>
            </div>

            <div className="gases-details">
              <div className="row">
                {
                  latestDevice.payload.d.co != undefined
                    ?
                    <div className="col-md-3 col-xs-3 text-center">

                      <div className={`progress-pie-chart-gas ${this.getCODegree(latestDevice.payload.d.co).class}`}>
                        <div className="ppc-progress-gas">
                          <div className="ppc-progress-fill-gas"
                               style={{transform: 'rotate('+this.getCODegree(latestDevice.payload.d.co).deg+'deg)'}}></div>
                        </div>
                        <div className="ppc-percents-gas">
                          <div className="pcc-percents-wrapper-gas">
                            <span>{latestDevice.payload.d.co}</span>
                          </div>
                        </div>
                      </div>
                      <span className="ppc-title">CO<sub></sub></span>
                      <small>(mg/m3)</small>
                    </div>
                    :
                    null
                }

                {
                  latestDevice.payload.d.so2 != undefined
                    ?
                    <div className="col-md-3 col-xs-3">
                      <div className={`progress-pie-chart-gas ${this.getSODegree(latestDevice.payload.d.so2).class}`}>
                        <div className="ppc-progress-gas">
                          <div className="ppc-progress-fill-gas"
                               style={{transform: 'rotate('+this.getSODegree(latestDevice.payload.d.so2).deg+'deg)'}}
                          >
                          </div>
                        </div>
                        <div className="ppc-percents-gas">
                          <div className="pcc-percents-wrapper-gas">
                            <span>{latestDevice.payload.d.so2}</span>
                          </div>
                        </div>
                      </div>
                      <span className="ppc-title">SO<sub>2</sub></span>
                      <small>(ug/m3)</small>
                    </div>
                    :
                    null
                }

                {
                  latestDevice.payload.d.no2 != undefined
                    ?
                    <div className="col-md-3 col-xs-3">
                      <div className={`progress-pie-chart-gas ${this.getNODegree(latestDevice.payload.d.no2).class}`}>
                        <div className="ppc-progress-gas">
                          <div className="ppc-progress-fill-gas"
                               style={{transform: 'rotate('+this.getNODegree(latestDevice.payload.d.no2).deg+'deg)'}}
                          >
                          </div>
                        </div>
                        <div className="ppc-percents-gas">
                          <div className="pcc-percents-wrapper-gas">
                            <span>{latestDevice.payload.d.no2}</span>
                          </div>
                        </div>
                      </div>
                      <span className="ppc-title">NO<sub>2</sub></span>
                      <small>(ug/m3)</small>
                    </div>
                    :
                    null
                }

                {
                  latestDevice.payload.d.pm10 != undefined
                    ?
                    <div className="col-md-3 col-xs-3">
                      <div
                        className={`progress-pie-chart-gas ${this.getPM10Degree(latestDevice.payload.d.pm10).class}`}>
                        <div className="ppc-progress-gas">
                          <div className="ppc-progress-fill-gas"
                               style={{transform: 'rotate('+this.getPM10Degree(latestDevice.payload.d.pm10).deg+'deg)'}}
                          >
                          </div>
                        </div>
                        <div className="ppc-percents-gas">
                          <div className="pcc-percents-wrapper-gas">
                            <span>{latestDevice.payload.d.pm10}</span>
                          </div>
                        </div>
                      </div>
                      <span className="ppc-title">PM10</span>
                      <small>(ug/m3)</small>
                    </div>
                    :
                    null
                }

                {
                  latestDevice.payload.d.pm25 != undefined
                    ?
                    <div className="col-md-3 col-xs-3">
                      <div
                        className={`progress-pie-chart-gas ${this.getPM25Degree(latestDevice.payload.d.pm25).class}`}>
                        <div className="ppc-progress-gas">
                          <div className="ppc-progress-fill-gas"
                               style={{transform: 'rotate('+this.getPM25Degree(latestDevice.payload.d.pm25).deg+'deg)'}}
                          >
                          </div>
                        </div>
                        <div className="ppc-percents-gas">
                          <div className="pcc-percents-wrapper-gas">
                            <span>{latestDevice.payload.d.pm25}</span>
                          </div>
                        </div>
                      </div>
                      <span className="ppc-title">PM2.5</span>
                      <small>(ug/m3)</small>
                    </div>
                    :
                    null
                }
              </div>

            </div>

          </div>
          <div className="col-sm-8 col-xs-12 remove-padding" style={{padding: '20px'}}>
            {
              this.state.activeGraph === 'graphview'
              ?
                <GraphView
                  analysisData={this.props.analysisData}
                  time={this.props.time}
                  activeGraph = {this.state.activeGraph}
                  changeGraphData = {this.changeGraphData}
                  fromDate={this.props.fromDate}
                  toDate={this.props.toDate}
                  id={this.props.markerId}
                  emptyDate = {this.props.emptyDate}
                />
              :
                <CalendarView
                  changeGraphData = {this.changeGraphData}
                  activeGraph = {this.state.activeGraph}
                  markerId={this.props.markerId}
                />
            }

          </div>
        </div>
      </div>
    )
  }
}


