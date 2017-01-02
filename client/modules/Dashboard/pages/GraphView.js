import React, {Component} from 'react'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import moment from 'moment'
import _ from 'lodash'
let arr = {'AQI': []}, timeArr = [], newTime, chart, diffDayArray=[];


export default class GraphView extends Component {

  constructor(props) {
    super(props)
    // this.maxAqi = this.maxAqi.bind(this)

    console.log('hi')
    this.state = {
      aqiArray: {'AQI': [], 'CO2': [], 'SO2': [], 'NO2': [], 'PM10': [], 'PM25': []},
      chartList: ['aqi', 'co', 'so2', 'no2', 'pm10', 'pm25'],
      gasesInfo: 'AQI'
    }
    console.log(this.state.aqiArray)
    this.displayGraph = this.displayGraph.bind(this)
  }

  componentDidMount() {
    console.log('mount')
    if (this.props.analysisData.length > 0) {
      let temp = this.state.aqiArray
      let todayDt = parseInt(new Date().getTime() / 1000)
      this.props.analysisData.map((e) => {
        let a = new Date(e.payload.d.t * 1000)
        var month = a.getMonth();
        var date = a.getDate();
        var year = a.getFullYear()
        var hour = a.getHours();
        var min = a.getMinutes();
        if (min < 10) {
          min = '0' + min
        }

        let Time = hour + ':' + min
        if (hour >= 12) {
          timeArr.unshift(Time + 'pm')
        }
        else {
          timeArr.unshift(Time + 'am')
        }
        let fullDate = date+'/'+month+'/'+year
        if (moment().format('Do/MM/YYYY') == moment.unix(e.payload.d.t).format('Do/MM/YYYY')) {
          temp.AQI.unshift(e.aqi)
          temp.CO2.unshift(e.payload.d.co)
          temp.SO2.unshift(e.payload.d.so2)
          temp.NO2.unshift(e.payload.d.no2)
          temp.PM10.unshift(e.payload.d.pm10)
          temp.PM25.unshift(e.payload.d.pm25)
        }


        if (e.payload.d.pm10 == undefined) {
          var i = this.state.chartList.indexOf("pm10");
          if (i != -1) {
            this.state.chartList.splice(i, 1);
          }
        }
        if (e.payload.d.co == undefined) {
          var i = this.state.chartList.indexOf("co");
          if (i != -1) {
            this.state.chartList.splice(i, 1);
          }
        }
        if (e.payload.d.so2 == undefined) {
          var i = this.state.chartList.indexOf("so2");
          if (i != -1) {
            this.state.chartList.splice(i, 1);
          }
        }
        if (e.payload.d.no2 == undefined) {
          var i = this.state.chartList.indexOf("no2");
          if (i != -1) {
            this.state.chartList.splice(i, 1);
          }
        }
        if (e.payload.d.pm25 == undefined) {
          var i = this.state.chartList.indexOf("pm25");
          if (i != -1) {
            this.state.chartList.splice(i, 1);
          }
        }

      })
      this.setState({aqiArray: temp})


      chart = Highcharts.chart(this.refs.highchart, {
        chart: {
          backgroundColor: 'transparent',
          width: 600,
          height: 300,
          type: 'column',
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

  componentWillReceiveProps(nextProps) {

    var diff = moment(nextProps.toDate, "DD/MM/YYYY").diff(moment(nextProps.fromDate, "DD/MM/YYYY"))
    diff = moment.duration(diff)
    var diffN = diff.asDays()
    let temp = this.state.aqiArray
    let changeData = false
    if(diff.asDays() > 1) {
      diffDayArray = []
      for (let i = 0; i <= diffN; i++) {
        var incre = moment(nextProps.fromDate, "DD-MM-YYYY").add(i, 'days')
        diffDayArray.push(incre.format('Do/MM/YYYY'));
      }

      this.props.analysisData.map((e) => {
        let a = new Date(e.payload.d.t * 1000)
        var month = a.getMonth();
        var date = a.getDate() + 'th';
        var year = a.getFullYear()
        var hour = a.getHours();
        var min = a.getMinutes();
        if (min < 10) {
          min = '0' + min
        }
        let Time = hour + ':' + min
        if (hour >= 12) {
          timeArr.unshift(Time + 'pm')
        }
        else {
          timeArr.unshift(Time + 'am')
        }
        let fullDate = moment.unix(e.payload.d.t).format('Do/MM/YYYY')
        var pos = diffDayArray.indexOf(fullDate)
        if (pos > -1) {
          changeData = true
          temp.AQI.unshift(e.aqi)
          temp.CO2.unshift(e.payload.d.co)
          temp.SO2.unshift(e.payload.d.so2)
          temp.NO2.unshift(e.payload.d.no2)
          temp.PM10.unshift(e.payload.d.pm10)
          temp.PM25.unshift(e.payload.d.pm25)
        }
      })
      if( changeData == true){
        this.setState({aqiArray: temp})
      }
      else{
        let aqiArray = this.state.aqiArray
        aqiArray.AQI = []
        aqiArray.CO2= []
        aqiArray.SO2= []
        aqiArray.NO2= []
        aqiArray.PM10= []
        aqiArray.PM25= []

        this.setState({aqiArray: aqiArray})
      }
      chart = Highcharts.chart(this.refs.highchart, {
        chart: {
          backgroundColor: 'transparent',
          width: 600,
          height: 300,
          type: 'column',
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

  displayGraph(tabName) {
    this.state.chartList.map((e)=> {
      if (tabName === e) {
        document.getElementById(tabName).className = 'active'
      }
      else {
        document.getElementById(e).className = ''
      }
    })

    chart.series.map((e)=> {
      if (e.name == tabName) {
        e.setVisible(true)
      }
      else {
        e.setVisible(false)
      }
    })


  }

  render() {
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
                this.state.chartList.map((list, index)=> {
                  return (
                    <li
                      onClick={()=>{this.displayGraph(list)}}
                      id={list}
                      key={list}
                      className={index===0 ? 'active' : ''}
                    >{list == 'co' ? list + '2' : list}</li>
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
            <DropdownButton title={this.state.gasesInfo} id="chart-info-dropdown">
              <MenuItem eventKey="1" onSelect={()=>{this.setState({gasesInfo : 'AQI'})}}>AQI</MenuItem>
              <MenuItem eventKey="2" onSelect={()=>{this.setState({gasesInfo : 'Carbon Oxides'})}}>Carbon
                Oxides</MenuItem>
              <MenuItem eventKey="3" onSelect={()=>{this.setState({gasesInfo : 'Nitrides'})}}>Nitrides</MenuItem>
              <MenuItem eventKey="4" onSelect={()=>{this.setState({gasesInfo : 'Sulfides'})}}>Sulfides</MenuItem>
              <MenuItem eventKey="6" onSelect={()=>{this.setState({gasesInfo : 'Ozone'})}}>Ozone</MenuItem>
              <MenuItem eventKey="7"
                        onSelect={()=>{this.setState({gasesInfo : 'HydroCarbons'})}}>HydroCarbons</MenuItem>
            </DropdownButton>
            {
              this.state.gasesInfo == 'AQI'
                ?
                <div className="gases-info">
                  <p>
                    An air quality index (AQI) is a number used by government agencies to communicate to the public how
                    polluted the air currently is or how polluted it is forecast to become. As the AQI increases, an
                    increasingly large percentage of the population is likely to experience increasingly severe adverse
                    health effects.
                  </p>
                </div>
                :
                (
                  this.state.gasesInfo == 'Carbon Oxides'
                    ?
                    <div className="gases-info">
                      <h5>Carbon Oxides :</h5>
                      <p>Carbon Monoxide (CO), Carbon Dioxide (CO2)</p>

                      <h5>Importance of Carbon Dioxide / Monoxide Monitoring :</h5>
                      <p>
                        Carbon monoxide (CO) is an extremely toxic gas resulting from incomplete combustion of carbon
                        and carbonaceous products. Carbon Dioxide (CO2) is present in the atmosphere but it is not a
                        toxic gas.
                      </p>

                      <h5>Sources of Carbon Dioxide / Monoxide :</h5>
                      <p>
                        Thermal Power Plants, Vehicle Fuel Emission, Open Fire, Solid Waste Sites etc.
                      </p>

                      <h5>Health Hazard of Carbon Dioxide / Monoxide :</h5>
                      <p>
                        Carbon monoxide is colorless, odorless, and tasteless, but highly toxic. It combines with
                        hemoglobin to produce carboxyhemoglobin, which usurps the space in hemoglobin that normally
                        carries oxygen, but is ineffective for delivering oxygen to bodily tissues.
                      </p>
                    </div>
                    :
                    (
                      this.state.gasesInfo == 'Nitrides'
                        ?
                        <div className="gases-info">
                          <h5>Importance of Nitrides Monitoring :</h5>
                          <p>
                            Nitric oxide (NO), Nitrogen Dioxide (NO2), Ammonia (NH3) The nitric oxide (NO) molecule is
                            quite reactive and unstable. In ambient air, it reacts with oxygen to form the toxic
                            nitrogen dioxide (NO2). Ammonia (NH3) is present in the atmosphere naturally as well as an
                            industrial pollution.
                          </p>

                          <h5>Sources of Nitrides :</h5>
                          <p>
                            Thermal Power Plants, Vehicle Fuel Emission, Industries, Fertilizers, Nitrogenous animal and
                            vegetable matter.
                          </p>

                          <h5>Health Hazard of Nitrides :</h5>
                          <p>
                            Respiratory disease, such as emphysema and bronchitis, and can aggravate existing heart
                            disease, leading to increased hospital admissions and premature death. Nitrogen oxide causes
                            a multitude of symptoms, primarily in the lungs but also in other organs such as the spleen
                            and liver.
                          </p>

                          <h5>Regulations for Nitrides :</h5>
                          <p>
                            The U. S. Occupational Safety and Health Administration (OSHA) has set a 15-minute exposure
                            limit for gaseous ammonia of 35 ppm by volume in the environmental air and an 8-hour
                            exposure limit of 25 ppm by volume. The U.S. Environmental Protection Agency (EPA) has set
                            safety levels for environmental exposure to NO2 at 100 ppb, averaged over one hour, and 53
                            ppb, averaged annually.
                          </p>
                        </div>
                        :
                        (
                          this.state.gasesInfo == 'Sulfides'
                            ?
                            <div className="gases-info">
                              <h5>Importance of Sulfide Monitoring :</h5>
                              <p>
                                Sulfur Dioxide (SO2), Hydrogen Sulfide (H2S)Sulfur dioxide (SO2) is an acid-forming,
                                colorless, foul-smelling and toxic gas. The toxicity of Hydrogen Sulfide (H2S) is
                                comparable with that of carbon monoxide.
                              </p>

                              <h5>Sources of Sulfides :</h5>
                              <p>
                                Industrial Waste, Petroleum Refineries, Vehicle Emission, Volcanos etc.
                              </p>

                              <h5>Health Hazard of Sulfides :</h5>
                              <p>
                                Sulfides poison several different systems in the body, although the nervous system is
                                most affected. It causes increased respiratory symptoms and disease, difficulty in
                                breathing, and premature death.
                              </p>

                              <h5>Regulations for Sulfides :</h5>
                              <p>
                                10 ppm is the U. S. Occupational Safety and Health Administration (OSHA) permissible
                                exposure limit (PEL) (8 hour time-weighted average) for H2S and 5 ppm (13 mg/m3)
                                time-weighted average for SO2.
                              </p>
                            </div>
                            :
                            (
                              this.state.gasesInfo == 'Ozone'
                                ?
                                <div className="gases-info">
                                  <h5>Importance of Ozone Monitoring :</h5>
                                  <p>
                                    Ozone (O3) is a highly toxic corrosive substance and a common pollutant. In low
                                    concentration it is a normal component of ambient air. Highly concentrated it is an
                                    aggressive irritant gas and at ground level it affects humans and nature.
                                  </p>

                                  <h5>Sources of Ozone :</h5>
                                  <p>
                                    Naturally through reaction of nitrogen oxides, hydrocarbons, and sunlight;
                                    Industrial and vehicular emission.
                                  </p>

                                  <h5>Health Hazard of Ozone :</h5>
                                  <p>
                                    Ground level ozone harms lung function and irritate the respiratory system. It also
                                    causes premature death, asthma, bronchitis, heart attack, and other cardiopulmonary
                                    problems.
                                  </p>

                                  <h5>Regulations for Ozone :</h5>
                                  <p>
                                    U.S. Occupational Safety and Health Administration (OSHA) has established a
                                    permissible exposure limit (PEL) of 0.1 umol/mol calculated as an 8-hour time
                                    weighted average. Higher concentrations are especially hazardous and National
                                    Institute for Occupational Safety and Health (NIOSH) has established an Immediately
                                    Dangerous to Life and Health Limit (IDLH) of 5 umol/mol
                                  </p>
                                </div>
                                :
                                (
                                  this.state.gasesInfo == 'HydroCarbons'
                                    ?
                                    <div className="gases-info">
                                      <h5>Importance of HydroCarbons Monitoring :</h5>
                                      <p>
                                        Hydrocarbon monitoring like Methane (CH4), Propane (C3H8), Butane (C4H10)
                                        presence has an important role in ambient Air-Quality Monitoring and
                                        Environmental Assessment. Presence of Hydrocarbons in environment reveals
                                        important informations about the source of pollution.
                                      </p>

                                      <h5>Sources of HydroCarbons :</h5>
                                      <p>
                                        Biological Decomposition, Natural Sources, Industrial Emission, Vehicular
                                        Emission etc.
                                      </p>

                                      <h5>Regulations for HydroCarbons :</h5>
                                      <p>
                                        Methane is also one of the principal components in natural gas. These days,
                                        methaneis often in the news because it is one of the primary "greenhouse gases."
                                        It is second only to carbon dioxide in its contribution to global warming.
                                      </p>
                                    </div>
                                    :
                                    null
                                )
                            )
                        )
                    )
                )
            }

          </div>
        </div>
      </div>
    )
  }
}

