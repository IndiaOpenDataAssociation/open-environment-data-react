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
    superagent.get('https://openenvironment.p.mashape.com/all/public/analytics/range/'+this.props.markerId+'?gte=1479457910&lte=1479977064').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      if(res.statusText != "Not Found") {
        this.setState({dailyData: res.body})
        this.setState({dailyDataLoading: false})
        array = []
        this.state.dailyData.map((e)=> {
          let a = new Date(e.time * 1000)
          var month = a.getMonth();
          var date = a.getDate();
          var hour = a.getHours();
          var min = a.getMinutes();
          let Time = hour + ':' + min
          displaydate.push(date + 'th')
          time.push(hour + ':00')
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
            height: 400,
            plotBorderWidth: 1,
            marginTop: 80
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
                  <div style={{height: '400px'}}>
                    <i className="fa fa-spinner fa-spin" style={{fontSize: '30px', color: '#00B3BF', lineHeight: '400px'}}></i>
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
    )
  }
}
