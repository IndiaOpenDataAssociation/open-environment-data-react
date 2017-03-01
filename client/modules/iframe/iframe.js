import React, {Component} from 'react'
require('es6-promise').polyfill();
import axios from 'axios'
// import superagent from 'superagent'
import moment from 'moment'
import _ from 'lodash'
import Slider from 'react-slick'

var classes = ['good', 'satisfactory', 'moderate', 'poor', 'vpoor', 'severe']
var config = {
  baseURL: 'https://openenvironment.p.mashape.com',
  headers: {'X-Mashape-Key': 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk'},
};

export default class Iframe extends Component {

  constructor(props) {
    super(props)
    this.state = this.getState()
    this.getData = this.getData.bind(this)
    this.deviceParams = this.props.location.query.devices;

    //new
    this.devices = [], this.deviceList = [], this.params = {}
    if (this.deviceParams) {
      this.deviceList = this.deviceParams.split(",");
      this.deviceList.map((e) => {
        if (e.indexOf('-') === -1) {
          this.devices.push(e)
        } else {
          this.devices.push(e.split('-')[0])
          this.params[e.split('-')[0]] = e.split('-')[1].split('_')
        }

      })
    } else {
      this.devices = null;
    }
    //new

    //old
    //   this.devices = []
    //   if(this.deviceParams){
    //      this.devices = this.deviceParams.split(",");
    //      console.log('devices',this.deviceParams)
    //   } else {
    //     this.devices = null;
    //   }
    //end old

    // console.log("came here with deviceids : "+this.deviceParams);

    // this.fields = [];

    this.getData()

    this.getDynamicClassName = this.getDynamicClassName.bind(this)
    this.changeData = this.changeData.bind(this)
    this.createInfoTable = this.createInfoTable.bind(this)

  }

  componentDidMount() {
    window.apiInterval = setInterval(function () {
      this.getData()
    }.bind(this), 180000);

    axios.get('/limits', config).then(function (response) {
      if (response) {
        this.setState({limits: response.data})
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });


    // superagent.get('https://openenvironment.p.mashape.com/limits').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
    //   this.setState({limits: res.body})
    // }.bind(this))
  }

  componentWillUnmount() {
    clearInterval(window.apiInterval)
  }

  getData() {

    axios.get('/fields/type/GUJT', config).then(function (response) {
      if (response) {
        this.setState({fields: response.data})
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

    axios.post('/iframe', {"devices": this.devices}, config).then(function (response) {
      console.log("iframe response :",response);


      if (response) {

        if(response.status == 200){
          this.setState({iframeData: response.data})
          this.setState({activeTab: this.state.iframeData[0].label})
        } else {
          var currentTime = new Date().getTime();
          currentTime = currentTime / 1000;
          currentTime = currentTime - 1800;
          var iframeLocalData = [
            {
              "_id": "58ad4d4c884666000b2763a2",
              "payload": {
                "d": {
                  "t": currentTime,
                  "g1": 515,
                  "g2": 0,
                  "p2": 24,
                  "p1": 2.4,
                  "temp": 31.63,
                  "hum": 18.47,
                  "noise": [
                    33,
                    70,
                    28,
                    31,
                    67
                  ]
                }
              },
              "deviceId": "OZ_PARTICLE_007",
              "deviceType": "POLLUDRON_PRO",
              "aqi": 24,
              "aqikey": "p2",
              "label": "Dhordo",
              "type": "POLLUDRON_PRO",
              "desc": "Real time Air Quality Level of Dhordo,Kutch - Rannotsav."
            },
            {
              "_id": "58b6b4535aafa7000b202834",
              "payload": {
                "d": {
                  "t": currentTime,
                  "g1": 608,
                  "g2": 0,
                  "p2": 56.8,
                  "p1": 16,
                  "temp": 31.54,
                  "hum": 40.77,
                  "noise": [
                    244,
                    255,
                    35,
                    56,
                    0
                  ]
                }
              },
              "deviceId": "OZ_PARTICLE_002",
              "deviceType": "POLLUDRON_PRO",
              "aqi": 56,
              "aqikey": "p2",
              "label": "Somnath",
              "type": "POLLUDRON_PRO",
              "desc": "Real time Air Quality Level of Somnath Temple."
            }
          ];

          this.setState({iframeData: iframeLocalData})
          this.setState({activeTab: this.state.iframeData[0].label})
        }
        

      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

    // superagent.get('https://openenvironment.p.mashape.com/fields').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
    //   if(res){
    //     this.setState({fields:res.body})
    //     // this.fields = res.body;
    //     // console.log("fields length : "+this.fields);
    //   }
    // }.bind(this))
    //
    // superagent.post('https://openenvironment.p.mashape.com/all/public/devices/iframe').send({"devices":this.devices}).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').set('Content-Type', 'application/json').end(function (err, res) {
    //   if(res){
    //     this.setState({iframeData: res.body})
    //   }
    // }.bind(this))

    // console.log('mount',this.state.iframeData)
  }

  getState() {
    return {
      fields: [],
      iframeData: [],
      limits: [],
      activeTab: 'Dhordo',
      infoItem: []
    }
  }

  getDynamicClassName(data, key, value) {
    let tempKey = '', className = ''
    data.map((dataItem) => {
      if (dataItem.fkey == key) {
        dataItem.range.map((rangeItem, index) => {
          if (value >= rangeItem) {
            tempKey = index
          }
        })

        className = classes[tempKey]
      }
    })
    return className
  }

  createInfoTable(data, key){
    let infoItem = []
    if(data){
       data.map((dataItem) => {
        if (dataItem.fkey == key) {
          dataItem.range.map((rangeItem, index) => {
            infoItem.push(rangeItem)
          })
        }
      })
      this.setState({infoItem})
    }
  }
  changeData(data) {
    this.setState({
      activeTab: data
    })
  }

  render() {
    let fields = this.state.fields;
    var settings = {
      dots: false
    }
    return (
      <div className="iframe-container">
        <div className="">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                {
                  this.state.iframeData.length > 0
                  ?
                    <Slider {...settings}>
                      {
                        this.state.iframeData.map((e) => {
                          return (

                            <div key={e.label}>
                              <h3>Weather/Environment Data - {e.label}</h3>
                              <div className="iframe-body" key={e.label}>
                                <div className="gas-list">
                                  <ul className="list-inline">
                                    {
                                      this.params[e.deviceId] != undefined
                                        ?
                                        (
                                          this.params[e.deviceId].indexOf('aqi') > -1
                                            ?
                                            <li>
                                              <h4
                                                className={this.getDynamicClassName(this.state.limits, 'aqi', e.aqi)}>{e.aqi}</h4>
                                              <p onClick={() => {this.createInfoTable(this.state.limits, 'aqi')}}>Air Quality Index</p>
                                            </li>
                                            :
                                            null
                                        )
                                        :
                                        (
                                          <li>
                                            <h4
                                              className={this.getDynamicClassName(this.state.limits, 'aqi', e.aqi)}>{e.aqi}</h4>
                                            <p onClick={() => {this.createInfoTable(this.state.limits, 'aqi')}}>Air Quality Index</p>
                                          </li>
                                        )

                                    }

                                    {
                                      Object.keys(e.payload.d).map(function (key) {
                                        if (this.params[e.deviceId] != undefined) {
                                          if (this.params[e.deviceId].indexOf(key) > -1) {
                                            return (
                                              <li key={key}>
                                                <h4
                                                  className={this.getDynamicClassName(this.state.limits, key, e.payload.d[key])}>
                                                  {
                                                    parseFloat(e.payload.d[key])
                                                  }
                                                  {
                                                    fields.map(function (e) {
                                                      if (e.fkey == key)
                                                        return <small key={key}>{e.unit }</small>
                                                    })
                                                  }
                                                </h4>
                                                <p onClick={() => {this.createInfoTable(this.state.limits, key)}}>
                                                  {
                                                    fields.map(function (e) {
                                                      if (e.fkey == key)
                                                        return e.label
                                                    })
                                                  }
                                                </p>

                                              </li>
                                            )
                                          }
                                          else {
                                            return false
                                          }
                                        }
                                        else {
                                          if (key != 't' && key != 'noise') {
                                            return (
                                              <li key={key}>
                                                <h4
                                                  className={this.getDynamicClassName(this.state.limits, key, e.payload.d[key])}>
                                                  {
                                                    e.payload.d[key]
                                                  }
                                                  {
                                                    fields.map(function (e) {
                                                      if (e.fkey == key)
                                                        return <small key={key}>{e.unit }</small>
                                                    })
                                                  }
                                                </h4>
                                                <p onClick={() => {this.createInfoTable(this.state.limits, key)}}>
                                                  {
                                                    fields.map(function (e) {
                                                      if (e.fkey == key)
                                                        return e.label
                                                    })
                                                  }
                                                </p>
                                              </li>
                                            )
                                          }
                                        }

                                      }.bind(this))
                                    }
                                  </ul>
                                </div>
                              </div>

                              {
                                this.state.infoItem.length > 0
                                  ?
                                  <div className="gas-indicator">
                                    <table className="gas-indicator-table">
                                      <tbody>
                                      <tr className="gas-info">
                                        <td><span></span></td>
                                        <td className="good"><span>Good</span></td>
                                        <td className="satisfactory"><span >Satisfactory</span></td>
                                        <td className="moderate"><span >Moderate</span></td>
                                        <td className="poor"><span>Poor</span></td>
                                        <td className="vpoor"><span>Very Poor</span></td>
                                        <td className="severe"><span>Severe</span></td>
                                      </tr>
                                      <tr>
                                        {
                                          this.state.infoItem.map((e) => {
                                            return (
                                              <td className="text-right">{e}</td>
                                            )
                                          })

                                        }
                                      </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  :
                                  null
                              }
                              {/*<div className="description">
                               <p>
                               <i className="fa fa-info-circle"></i>
                               {e.desc}
                               </p>
                               </div>*/}
                            </div>

                          )
                        })
                      }
                    </Slider>
                  :
                    null
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
