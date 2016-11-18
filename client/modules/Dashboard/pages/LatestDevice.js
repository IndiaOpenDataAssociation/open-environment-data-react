import React, {Component} from 'react'
import Analytics from './Analytics'
import Realtime from './Realtime'


export default class LatestDevice extends Component {

  constructor(props) {
    super(props)
    this.state = {activeGraph: 'analytics'}
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
    if (so > 50) {
      obj.class = 'gt-50';
    }
    var percent = so,
      deg = 360 * percent / 100;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  getNODegree(no) {
    let obj = {};
    if (no > 50) {
      obj.class = 'gt-50';
    }
    var percent = no,
      deg = 360 * percent / 100;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  getPM10Degree(pm10) {
    let obj = {};
    if (pm10 > 75) {
      obj.class = 'gt-50';
    }
    var percent = pm10,
      deg = 360 * percent / 150;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }

  getPM25Degree(pm25) {
    let obj = {};
    if (pm25 > 250) {
      obj.class = 'gt-50';
    }
    var percent = pm25,
      deg = 360 * percent / 500;
    obj.percent = percent;
    obj.deg = deg;
    return obj;
  }


  render() {
    let latestDevice = this.props.realtimeData[0];
    return (
      <div className="dashboard-home">
        <div className="row">
          <div className="col-sm-4 text-center" style={{padding: '30px 0px 30px 20px', position: 'relative'}}>
            <div className="aqi-status">
              <p>Current AQI</p>
              <strong>{latestDevice.aqi}</strong>
              <p className="aqi-grade">
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
            </div>

            <div className="gases-details">
              <div className="row">
                <div className="col-md-3 text-center">
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
                  <span className="ppc-title">CO<sub>2</sub></span>
                </div>


                <div className="col-md-3">
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
                </div>

                <div className="col-md-3">
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
                </div>


                <div className="col-md-3">
                  <div className={`progress-pie-chart-gas ${this.getPM10Degree(latestDevice.payload.d.pm10).class}`}>
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
                </div>

                <div className="col-md-3">
                  <div className={`progress-pie-chart-gas ${this.getPM25Degree(latestDevice.payload.d.pm25).class}`}>
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
                </div>


              </div>

            </div>

            <button className="btn btn-default knowmore-btn">Know More</button>
          </div>
          <div className="col-sm-8" style={{padding: '20px'}}>
            {
              this.state.activeGraph === 'analytics'
              ?
                <Analytics
                  analysisData={this.props.analysisData}
                  realtimeData={this.props.realtimeData}
                  time={this.props.time}
                />
              :
                <Realtime
                  realtimeData = {this.props.realtimeData}
                />
            }

          </div>
        </div>
      </div>
    )
  }
}

