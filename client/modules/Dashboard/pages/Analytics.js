import React, {Component} from 'react'
import ReactHighcharts from 'react-highcharts/dist/ReactHighcharts.js'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import LatestDevice from './LatestDevice'
let arr = {'AQI': []}, timeArr = [], newTime;


export default class Analytics extends Component {

  constructor(props) {
    super(props)
    // this.maxAqi = this.maxAqi.bind(this)

    this.state = {
      aqiArray: {'AQI': [], 'CO2':[], 'SO2':[], 'NO2':[], 'PM10':[], 'PM25':[]},
      chartList : ['aqi', 'co', 'so2', 'no2', 'pm10','pm25']
    }
    this.displayGraph = this.displayGraph.bind(this)
  }

  componentDidMount() {
    if (this.props.analysisData.length > 0) {
      let temp = this.state.aqiArray
      this.props.analysisData.map((e) => {
        temp.AQI.unshift(e.aqi)
        temp.CO2.unshift(e.payload.d.co)
        temp.SO2.unshift(e.payload.d.so2)
        temp.NO2.unshift(e.payload.d.no2)
        temp.PM10.unshift(e.payload.d.pm10)
        temp.PM25.unshift(e.payload.d.pm25)
      })
      this.setState({aqiArray: temp})
    }
  }

  displayGraph(tabName){

    this.state.chartList.map((e)=>{
      if(tabName === e){
        document.getElementById(tabName).className = 'active'
      }
      else{
        document.getElementById(e).className = ''
      }
    })
    let chart = this.refs.highchart.getChart()
    chart.series.map((e)=>{
      if(e.name == tabName){
        e.setVisible(true)
        // document.getElementById(tabName).className = 'active'
      }
      else{
        e.setVisible(false)
      }
    })


    // document.getElementById(tabName).className = 'active'

  }

  render() {
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

      legend: {
        enabled: false
      },

      credits: {
        enabled: false
      },

      xAxis: {
        categories: timeArr,
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
          },
        },
        title: {
          text: null
        }
      },

      series: [
        {
          name: 'aqi',
          data: this.state.aqiArray.AQI,
          fillColor: 'rgba(255,255,255, 0.1)',
          marker: {
            enabled: false
          }
        },
        {
          name: 'co',
          data: this.state.aqiArray.CO2,
          fillColor: 'rgba(255,255,255, 0.1)',
          marker: {
            enabled: false
          },
          visible: false
        },
        {
          name: 'so2',
          data: this.state.aqiArray.SO2,
          fillColor: 'rgba(255,255,255, 0.1)',
          marker: {
            enabled: false
          },
          visible: false
        },
        {
          name: 'no2',
          data: this.state.aqiArray.NO2,
          fillColor: 'rgba(255,255,255, 0.1)',
          marker: {
            enabled: false
          },
          visible: false
        },
        {
          name: 'pm10',
          data: this.state.aqiArray.PM10,
          fillColor: 'rgba(255,255,255, 0.1)',
          marker: {
            enabled: false
          },
          visible: false
        },
        {
          name: 'pm25',
          data: this.state.aqiArray.PM25,
          fillColor: 'rgba(255,255,255, 0.1)',
          marker: {
            enabled: false
          },
          visible: false
        }
      ]
    };
    return (
      <div className="dashboard-home">
        <div className="row">
          <div className="col-sm-4 text-center" style={{padding: '30px 0px 30px 20px', position: 'relative'}}>
            <LatestDevice
              realtimeData={this.props.realtimeData}
            />
          </div>
          <div className="col-sm-8" style={{padding: '20px'}}>
            <div className="analytics-div">
              <div className="analytics-chart">
                {
                  Object.keys(this.state.aqiArray).length > 0
                    ?
                    <ReactHighcharts config={config} ref="highchart"></ReactHighcharts>
                    :
                    null
                }
                <ul className="chart-list list-inline" id="c-list">
                  {
                    this.state.chartList.map((list,index)=>{
                      return(
                        <li
                          onClick={()=>{this.displayGraph(list)}}
                          id={list}
                          key={list}
                          className={index===0 ? 'active' : ''}
                        >{list}</li>
                      )
                    })
                  }

                </ul>
              </div>

              <div className="chart-description">
                <DropdownButton title="AQI" id="chart-info-dropdown">
                  <MenuItem eventKey="1">Dropdown link</MenuItem>
                  <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
                <p>
                  Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem
                  Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum
                  Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text Lorem Ipsum Dummy Text
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-bottom-content">
          {
            this.props.analysisData == true
              ?
              <div className="analytics-chart">

              </div>
              :
              <div className="analytics-chart">
                {
                  this.state.aqiArray.length > 0
                    ?
                    <ReactHighcharts config={config}></ReactHighcharts>
                    :
                    null
                }
              </div>
          }

          {/*
           <div className="average-cal">
           <p style={{textAlign: 'center', color: 'white', fontSize: '13px'}}>Last hour Average</p>
           <div className="row">

           {
           this.props.realtimeData.map((gases) => {
           return Object.keys(gases.payload.d).map((key, index) => {
           return (
           key != 't' && gases.payload.d[key] > 1
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
           <p
           style={{textAlign: 'center', fontFamily: 'Bebasneues', color: 'white', marginTop: '10px'}}>
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
          */}

        </div>
      </div>
    )
  }
}

