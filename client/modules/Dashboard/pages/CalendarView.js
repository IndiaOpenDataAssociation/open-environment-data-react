import React, {Component} from 'react'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
// import data from '../components/pollution.json'
import superagent from 'superagent'
import moment from 'moment'


let heatmap, displaydate = [], time = [], array = [], dateUniq = [],diffDateArray=[], dataHour =[];
export default class CalendarView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dailyData: [],
      dailyDataLoading: true,
      noDailyData: false,
      gasesInfo : 'AQI'
    }

    let lte = new Date().getTime() / 1000
    var today = new Date()
    var gte = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).getTime() / 1000;



    diffDateArray = []
    for (let i = 0; i < 7; i++) {
      var incre = moment().subtract(i, 'days').format('D')
      diffDateArray.push(parseInt(incre));
    }

    superagent.get('https://openenvironment.p.mashape.com/all/public/analytics/range/' + this.props.markerId + '?gte=' + gte + '&lte=' + lte).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      if (res.statusText != "Not Found") {
        this.setState({dailyData: res.body})
        this.setState({dailyDataLoading: false})
        array = []
        this.state.dailyData.map((e)=> {
          let hour = moment.unix(e.time).format('hh:mm')
          let date = parseInt(moment.unix(e.time).format('D'))
          let dateIndex = diffDateArray.indexOf(date)
          // dataHour.push(hour)
          if(dataHour.indexOf(hour) === -1){
            dataHour.push(hour)
          }
          let hourIndex = dataHour.indexOf(hour)

          time.push(hour)
          array.push([hourIndex,dateIndex,e.aqi])
        })

        // let theme = Highcharts.theme = {
        //   // colors: ['#0C6657', '#60E5D7'],
        //
        //   // colors: ['red', 'blue', 'yellow', 'orange', 'white', 'green', 'gray'],
        // };

        // Highcharts.setOptions(theme)

        heatmap = Highcharts.chart(this.refs.heatmap, {
          chart: {
            type: 'heatmap',
            backgroundColor: 'transparent',
            width: 600,
            height: 300,
            plotBorderWidth: 1,
            marginTop: 90
          },

          title: {
            text: ''
          },

          xAxis: {
            categories: dataHour,
            labels: {
              style: {
                color: '#E0E0E3'
              }
            },
            gridLineColor: 'transparent',
          },

          yAxis: {
            title: null,
            categories: diffDateArray,
            // type: 'datetime',
            labels: {
              style: {
                color: '#E0E0E3'
              }
            },
            gridLineColor: 'transparent',
          },

          // colors: ['#6ecc58', '#bbcf4c', '#eac736', '#ed9a2e', '#e8633a', '#d63636'],
          colorAxis: {
            dataClasses: [
              {
                from: 0,
                to: 50,
                color: '#6ecc58',
                name: 'good'
              },
              {
                from: 50,
                to: 100,
                color: '#bbcf4c',
                name: 'satisfactory'
              },
              {
                from: 100,
                to: 200,
                color: '#eac736',
                name: 'moderate'
              },
              {
                from: 200,
                to: 300,
                color: '#ed9a2e',
                name: 'poor'
              },
              {
                from: 300,
                to: 400,
                color: '#e8633a',
                name: 'verypoor'
              },
              {
                from: 400,
                to: 500,
                color: '#d63636',
                name: 'severe'
              },
              {
                from: 500,
                to: 1000,
                color: '#d63636',
                name: 'extreme'
              },


            ]
          },

          // colorAxis: {
          // min: 0,
          // max: 600,
          // stops: [
          //   [0.1,'green'],
          //   [0.5,'orange'],
          //   [0.9,'red']
          // ],
          // minColor: Highcharts.getOptions().colors[1],
          // maxColor: Highcharts.getOptions().colors[0]
          // },

          legend: {
            enabled: false,
          },
          series: [
            {
              name: 'AQI per day',
              borderWidth: 1,
              borderColor: '#eee',
              data: array,
              dataLabels: {
                enabled: false,
                color: 'black',
                style: {
                  textShadow: 'none'
                }
              }
            },
          ]

        })

        heatmap.yAxis[0].setTitle({ text: "Date" });
      }
      else {
        this.setState({noDailyData: true})
      }
    }.bind(this))
  }

  componentDidMount() {

  }


  render() {

    return (
      <div >
        <div className="analytics-div">
          <div className="analytics-chart">

            {
              this.state.noDailyData == false
                ?
                (
                  this.state.dailyDataLoading
                    ?
                    <div style={{height: '300px'}}>
                      <i className="fa fa-spinner fa-spin"
                         style={{fontSize: '30px', color: '#00B3BF', lineHeight: '300px'}}></i>
                    </div>
                    :
                    <div className="heatmap" ref="heatmap">

                    </div>
                )
                :
                <div style={{fontSize: '30px', color: '#00B3BF', lineHeight: '400px'}}>
                  No data available
                </div>
            }

            <div className="chart-indicator">
              <table>
                <tbody>
                  <tr>
                    <td><span></span></td>
                    <td><span className="good"></span></td>
                    <td><span className="satisfactory"></span></td>
                    <td><span className="moderate"></span></td>
                    <td><span className="poor"></span></td>
                    <td><span className="vpoor"></span></td>
                    <td><span className="severe"></span></td>
                  </tr>
                  <tr>
                    <td>0</td>
                    <td>50</td>
                    <td>100</td>
                    <td>200</td>
                    <td>300</td>
                    <td>400</td>
                    <td>500</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              <MenuItem eventKey="2" onSelect={()=>{this.setState({gasesInfo : 'Carbon Oxides'})}}>Carbon Oxides</MenuItem>
              <MenuItem eventKey="3" onSelect={()=>{this.setState({gasesInfo : 'Nitrides'})}}>Nitrides</MenuItem>
              <MenuItem eventKey="4" onSelect={()=>{this.setState({gasesInfo : 'Sulfides'})}}>Sulfides</MenuItem>
              <MenuItem eventKey="6" onSelect={()=>{this.setState({gasesInfo : 'Ozone'})}}>Ozone</MenuItem>
              <MenuItem eventKey="7" onSelect={()=>{this.setState({gasesInfo : 'HydroCarbons'})}}>HydroCarbons</MenuItem>
            </DropdownButton>
            {
              this.state.gasesInfo == 'AQI'
                ?
                <div className="gases-info">
                  <p>
                    An air quality index (AQI) is a number used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. As the AQI increases, an increasingly large percentage of the population is likely to experience increasingly severe adverse health effects.
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
                        Carbon monoxide (CO) is an extremely toxic gas resulting from incomplete combustion of carbon and carbonaceous products. Carbon Dioxide (CO2) is present in the atmosphere but it is not a toxic gas.
                      </p>

                      <h5>Sources of Carbon Dioxide / Monoxide :</h5>
                      <p>
                        Thermal Power Plants, Vehicle Fuel Emission, Open Fire, Solid Waste Sites etc.
                      </p>

                      <h5>Health Hazard of Carbon Dioxide / Monoxide :</h5>
                      <p>
                        Carbon monoxide is colorless, odorless, and tasteless, but highly toxic. It combines with hemoglobin to produce carboxyhemoglobin, which usurps the space in hemoglobin that normally carries oxygen, but is ineffective for delivering oxygen to bodily tissues.
                      </p>
                    </div>
                    :
                    (
                      this.state.gasesInfo == 'Nitrides'
                        ?
                        <div className="gases-info">
                          <h5>Importance of Nitrides Monitoring :</h5>
                          <p>
                            Nitric oxide (NO), Nitrogen Dioxide (NO2), Ammonia (NH3) The nitric oxide (NO) molecule is quite reactive and unstable. In ambient air, it reacts with oxygen to form the toxic nitrogen dioxide (NO2). Ammonia (NH3) is present in the atmosphere naturally as well as an industrial pollution.
                          </p>

                          <h5>Sources of Nitrides :</h5>
                          <p>
                            Thermal Power Plants, Vehicle Fuel Emission, Industries, Fertilizers, Nitrogenous animal and vegetable matter.
                          </p>

                          <h5>Health Hazard of Nitrides :</h5>
                          <p>
                            Respiratory disease, such as emphysema and bronchitis, and can aggravate existing heart disease, leading to increased hospital admissions and premature death. Nitrogen oxide causes a multitude of symptoms, primarily in the lungs but also in other organs such as the spleen and liver.
                          </p>

                          <h5>Regulations for Nitrides :</h5>
                          <p>
                            The U. S. Occupational Safety and Health Administration (OSHA) has set a 15-minute exposure limit for gaseous ammonia of 35 ppm by volume in the environmental air and an 8-hour exposure limit of 25 ppm by volume. The U.S. Environmental Protection Agency (EPA) has set safety levels for environmental exposure to NO2 at 100 ppb, averaged over one hour, and 53 ppb, averaged annually.
                          </p>
                        </div>
                        :
                        (
                          this.state.gasesInfo == 'Sulfides'
                            ?
                            <div className="gases-info">
                              <h5>Importance of Sulfide Monitoring :</h5>
                              <p>
                                Sulfur Dioxide (SO2), Hydrogen Sulfide (H2S)Sulfur dioxide (SO2) is an acid-forming, colorless, foul-smelling and toxic gas. The toxicity of Hydrogen Sulfide (H2S) is comparable with that of carbon monoxide.
                              </p>

                              <h5>Sources of Sulfides :</h5>
                              <p>
                                Industrial Waste, Petroleum Refineries, Vehicle Emission, Volcanos etc.
                              </p>

                              <h5>Health Hazard of Sulfides :</h5>
                              <p>
                                Sulfides poison several different systems in the body, although the nervous system is most affected. It causes increased respiratory symptoms and disease, difficulty in breathing, and premature death.
                              </p>

                              <h5>Regulations for Sulfides :</h5>
                              <p>
                                10 ppm is the U. S. Occupational Safety and Health Administration (OSHA) permissible exposure limit (PEL) (8 hour time-weighted average) for H2S and 5 ppm (13 mg/m3) time-weighted average for SO2.
                              </p>
                            </div>
                            :
                            (
                              this.state.gasesInfo == 'Ozone'
                                ?
                                <div className="gases-info">
                                  <h5>Importance of Ozone Monitoring :</h5>
                                  <p>
                                    Ozone (O3) is a highly toxic corrosive substance and a common pollutant. In low concentration it is a normal component of ambient air. Highly concentrated it is an aggressive irritant gas and at ground level it affects humans and nature.
                                  </p>

                                  <h5>Sources of Ozone :</h5>
                                  <p>
                                    Naturally through reaction of nitrogen oxides, hydrocarbons, and sunlight; Industrial and vehicular emission.
                                  </p>

                                  <h5>Health Hazard of Ozone :</h5>
                                  <p>
                                    Ground level ozone harms lung function and irritate the respiratory system. It also causes premature death, asthma, bronchitis, heart attack, and other cardiopulmonary problems.
                                  </p>

                                  <h5>Regulations for Ozone :</h5>
                                  <p>
                                    U.S. Occupational Safety and Health Administration (OSHA) has established a permissible exposure limit (PEL) of 0.1 umol/mol calculated as an 8-hour time weighted average. Higher concentrations are especially hazardous and National Institute for Occupational Safety and Health (NIOSH) has established an Immediately Dangerous to Life and Health Limit (IDLH) of 5 umol/mol
                                  </p>
                                </div>
                                :
                                (
                                  this.state.gasesInfo == 'HydroCarbons'
                                    ?
                                    <div className="gases-info">
                                      <h5>Importance of HydroCarbons Monitoring :</h5>
                                      <p>
                                        Hydrocarbon monitoring like Methane (CH4), Propane (C3H8), Butane (C4H10) presence has an important role in ambient Air-Quality Monitoring and Environmental Assessment. Presence of Hydrocarbons in environment reveals important informations about the source of pollution.
                                      </p>

                                      <h5>Sources of HydroCarbons :</h5>
                                      <p>
                                        Biological Decomposition, Natural Sources, Industrial Emission, Vehicular Emission etc.
                                      </p>

                                      <h5>Regulations for HydroCarbons :</h5>
                                      <p>
                                        Methane is also one of the principal components in natural gas. These days, methaneis often in the news because it is one of the primary "greenhouse gases." It is second only to carbon dioxide in its contribution to global warming.
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
