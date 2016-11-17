import React, {Component} from 'react'
import ReactHighcharts from 'react-highcharts/dist/ReactHighcharts.js'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
let arr = [], timeArr =[], newTime;


export default class Analytics extends Component{

  constructor(props){
    super(props)
    this.maxAqi = this.maxAqi.bind(this)
    this.state = {aqiArray : []}
  }

  componentDidMount() {
    console.log('a', this.props.analysisData)
    if (this.props.analysisData.length > 0) {
      if (arr.length > 0) {
        arr = [];
        this.props.analysisData.map((e) => {
          arr.unshift(e.aqi)
        })
      }
      else {
        this.props.analysisData.map((e) => {
          arr.unshift(e.aqi)
        })
      }
      this.setState({aqiArray: arr})
      
      this.props.analysisData.map((e) => {
        newTime = new Date(e.payload.d.t * 1000)
        var hour = newTime.getHours();
        var hourVal = hour + ':00';
        timeArr.unshift(hourVal)
      })
    }
  }

  maxAqi() {
    return Math.max(...arr)
  }
  render(){
    let latestDevice = this.props.realtimeData[0];
    var config = {
      chart: {
        backgroundColor: 'transparent',
        width: 600,
        height: 270,
        type: 'areaspline'
      },
      colors: ['#00b3bf'],

      title: {
        text: 'Analytics',
        style: {
          color: 'white',
          fontSize: '14px'
        }
      },

      legend:{
        enabled: false
      },

      credits: {
        enabled: false
      },

      xAxis: {
        categories : timeArr,
        gridLineColor: '#2b313a',
        gridLineWidth: 1,
        labels: {
          style: {
            color: '#FFF'
          }
        }
      },

      yAxis: {
        gridLineWidth: 1,
        gridLineColor: '#2b313a',
        labels: {
          style: {
            color: '#FFF'
          }
        },
        title: {
          text: null
        }
      },

      series: [
        {
          name: 'AQI',
          data: this.state.aqiArray,
          fillColor: 'rgba(255,255,255, 0.1)',
          marker: {
            enabled: false
          }
        }
      ]
    };
    return(
      <div className="dashboard-home">
        <div className="row">
          <div className="col-sm-4 text-center" style={{padding: '30px 20px', position: 'relative'}}>

            <div className="aqi-status">
              <p>Current AQI</p>
              <strong>{latestDevice.aqi}</strong>
              <p className="aqi-grade">
                {
                  latestDevice.aqi <=50
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

            <div className="gases-details"></div>

            <button className="btn btn-default knowmore-btn">Know More</button>
          </div>
          <div className="col-sm-8" style={{padding: '20px'}}>
            <div className="analytics-div">
              <div className="analytics-chart">
                {
                  this.state.aqiArray.length > 0
                    ?
                    <ReactHighcharts config = {config}></ReactHighcharts>
                    :
                    null
                }
                <ul className="chart-list list-inline">
                  <li className="active">AQI</li>
                  <li>CO2</li>
                  <li>SO2</li>
                  <li>NO2</li>
                  <li>PM2.5</li>
                  <li>PM10</li>
                </ul>
              </div>

              <div className="chart-description">
                <DropdownButton title="AQI" id="chart-info-dropdown">
                  <MenuItem eventKey="1">Dropdown link</MenuItem>
                  <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
                <p>
                  Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*
         <div className="home-bottom-content">
         {
         this.props.analysisData == true
         ?
         <div className="analytics-chart">

         </div>
         :
         <div className="analytics-chart">
         <span>Last 24 hours data</span>
         {
         this.state.aqiArray.length > 0
         ?
         <ReactHighcharts config = {config}></ReactHighcharts>
         :
         null
         }
         </div>
         }


         <div className="average-cal">
         <p style={{textAlign: 'center', color: 'white', fontSize: '13px'}}>Last hour Average</p>
         <div className="row">

         {
         this.props.realtimeData.map((gases) => {
         return Object.keys(gases.payload.d).map((key, index) => {
         return(

         key!='t' && gases.payload.d[key] > 1
         ?
         (
         <div className="col-sm-3 col-xs-3">
         <div className="avg-container">
         <p className="readings">{Math.trunc(gases.payload.d[key])}</p>
         <p className="units">
         {
         key == 'temp'
         ?
         'C'
         :
         'u3/mg'
         }
         </p>
         </div>
         <p style={{textAlign: 'center', fontFamily: 'Bebasneues', color: 'white', marginTop: '10px'}}>
         {
         key == 'pm10'
         ?
         'PM 10'
         :
         (
         key == 'pm25'
         ?
         'PM 2.5'
         :
         (
         key == 'hum'
         ?
         'Humidity'
         :
         (
         key == 'so2'
         ?
         'SO 2'
         :
         (
         key == 'no2'
         ?
         'NO 2'
         :
         (
         key == 'o3'
         ?
         'O 3'
         :
         key
         )
         )

         )
         )
         )
         }
         </p>
         </div>
         )
         :
         null


         )
         })
         })
         }




         </div>
         </div>
          </div>
        */}
      </div>
    )
  }
}

