import React, {Component} from 'react'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
// import data from '../components/pollution.json'
import superagent from 'superagent'

let heatmap, displaydate = [], time=[], array = [];
export default class CalendarView extends Component{
  constructor(props){
    super(props)
    this.state = {
      dailyData: [],
      dailyDataLoading : true,
      noDailyData: false
    }

    let lte = new Date().getTime()/1000
    var today = new Date()
    var gte= new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).getTime()/1000;
    superagent.get('https://openenvironment.p.mashape.com/all/public/analytics/range/'+this.props.markerId+'?gte='+gte+'&lte='+lte).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      if(res.statusText != "Not Found") {
        this.setState({dailyData: res.body})
        this.setState({dailyDataLoading: false})
        array = []
        this.state.dailyData.map((e)=> {
          let a = new Date(e.time * 1000)
          var month = a.getMonth();
          var date = a.getDate();
          var hour = a.getHours();
          let min = a.getMinutes();
          if(min < 10){
            min = '0'+min
          }
          let Time = hour + ':' + min
          if(hour >= 12){
            time.push(Time+'pm')
          }
          else{
            time.push(Time+'am')
          }
          displaydate.push(date + 'th')
          array.push([hour, date, e.aqi])
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
            categories: time,
            labels: {
              style: {
                color: '#E0E0E3'
              }
            },
            gridLineColor: 'transparent',
          },

          yAxis: {
            title: null,
            categories: displaydate,
            labels: {
              style: {
                color: '#E0E0E3'
              }
            },
            gridLineColor: 'transparent',
          },

          colors : ['#0C6657', '#1BCCAC', '#60E5D7'],
          colorAxis : {
            dataClassColor : 'category',
            dataClasses : [{
              to : 500,
            }, {
              from : 170,
              to : 340
            }, {
              from : 170,
            }
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

          legend:{
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
      }
      else{
        this.setState({noDailyData: true})
      }
    }.bind(this))
  }

  componentDidMount(){

  }


  render(){

    return(
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
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '30px', color: '#00B3BF', lineHeight: '300px'}}></i>
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
