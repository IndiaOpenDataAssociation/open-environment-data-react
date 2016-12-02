import React, {Component} from 'react'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
let arr = {'AQI': []}, timeArr = [], newTime, chart;


export default class GraphView extends Component {

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

      chart = Highcharts.chart(this.refs.highchart,{
        chart: {
          backgroundColor: 'transparent',
          width: 600,
          height: 300,
          type: 'areaspline',
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
      })
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
    // var config = {
    //   chart: {
    //     backgroundColor: 'transparent',
    //     width: 600,
    //     height: 270,
    //     type: 'areaspline'
    //   },
    //   colors: ['#00b3bf'],
    //
    //   title: {
    //     text: 'Analytics',
    //     style: {
    //       color: 'white',
    //       fontSize: '14px'
    //     }
    //   },
    //
    //   legend: {
    //     enabled: false
    //   },
    //
    //   credits: {
    //     enabled: false
    //   },
    //
    //   xAxis: {
    //     categories: timeArr,
    //     gridLineColor: '#2b313a',
    //     gridLineWidth: 1,
    //     labels: {
    //       style: {
    //         color: '#FFF'
    //       }
    //     }
    //   },
    //
    //   yAxis: {
    //     gridLineWidth: 1,
    //     gridLineColor: '#2b313a',
    //     labels: {
    //       style: {
    //         color: '#FFF'
    //       },
    //     },
    //     title: {
    //       text: null
    //     }
    //   },
    //
    //   series: [
    //     {
    //       name: 'aqi',
    //       data: this.state.aqiArray.AQI,
    //       fillColor: 'rgba(255,255,255, 0.1)',
    //       marker: {
    //         enabled: false
    //       }
    //     },
    //     {
    //       name: 'co',
    //       data: this.state.aqiArray.CO2,
    //       fillColor: 'rgba(255,255,255, 0.1)',
    //       marker: {
    //         enabled: false
    //       },
    //       visible: false
    //     },
    //     {
    //       name: 'so2',
    //       data: this.state.aqiArray.SO2,
    //       fillColor: 'rgba(255,255,255, 0.1)',
    //       marker: {
    //         enabled: false
    //       },
    //       visible: false
    //     },
    //     {
    //       name: 'no2',
    //       data: this.state.aqiArray.NO2,
    //       fillColor: 'rgba(255,255,255, 0.1)',
    //       marker: {
    //         enabled: false
    //       },
    //       visible: false
    //     },
    //     {
    //       name: 'pm10',
    //       data: this.state.aqiArray.PM10,
    //       fillColor: 'rgba(255,255,255, 0.1)',
    //       marker: {
    //         enabled: false
    //       },
    //       visible: false
    //     },
    //     {
    //       name: 'pm25',
    //       data: this.state.aqiArray.PM25,
    //       fillColor: 'rgba(255,255,255, 0.1)',
    //       marker: {
    //         enabled: false
    //       },
    //       visible: false
    //     }
    //   ]
    // };
    return (
      <div >
        <div className="analytics-div">
          <div className="analytics-chart">
            {
              Object.keys(this.state.aqiArray).length > 0
                ?
                <div ref="highchart"></div>
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

            <div className="chart-btn-group">
              <a
                className={this.props.activeGraph == 'graphview' ? 'active' : ''}
                onClick={() => {this.props.changeGraphData('graphview')}}
              >
                <img src="../../../assets/images/icons/analytics_w.png"/>
              </a>
              <a
                className={this.props.activeGraph == 'calendarview' ? 'active' : ''}
                onClick={() => {this.props.changeGraphData('calendarview')}}
              >

                <img src="./../../assets/images/calendar_w.png"/>
              </a>
            </div>
          </div>

          <div className="chart-description">
            <DropdownButton title="AQI" id="chart-info-dropdown">
              <MenuItem eventKey="1">AQI</MenuItem>
            </DropdownButton>
            <p>
              An air quality index (AQI) is a number used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. As the AQI increases, an increasingly large percentage of the population is likely to experience increasingly severe adverse health effects.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

