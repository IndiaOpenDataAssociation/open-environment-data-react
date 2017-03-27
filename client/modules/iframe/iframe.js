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

var oizom_config = {
  baseURL : 'http://gateway.oizom.com',
  headers : {'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZm9AZ3VqYXJhdHRvdXJpc20uY29tIiwiYXBpQ291bnRlciI6MCwiaWF0IjoxNDkwMjcyNDU4LCJleHAiOjE1MjE4MjkzODR9.LQDJjtXpqL6K9NxVuhUuOdtHiG3G5ugL0FPeJsA8P8Y'}
}

export default class Iframe extends Component {

  constructor(props) {
    super(props)
    this.state = this.getState()
    this.getData = this.getData.bind(this)
    this.getUserIdData = this.getUserIdData.bind(this)
    this.deviceParams = this.props.location.query.devices;
    this.userIdParams = this.props.location.query.userId;

    //new
    this.devices = [], this.deviceList = [], this.params = {}, this.userId = '', this.commonParams = []

    if (this.userIdParams){

      this.userId = this.userIdParams.split("-")[0];
      this.commonParams = this.userIdParams.split("-")[1].split("_");

      this.getUserIdData(this.userIdParams)

      this.getDynamicClassName = this.getDynamicClassName.bind(this)
      this.changeData = this.changeData.bind(this)
      this.createInfoTable = this.createInfoTable.bind(this)
    } else {
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

      this.getData()
      this.getDynamicClassName = this.getDynamicClassName.bind(this)
      this.changeData = this.changeData.bind(this)
      this.createInfoTable = this.createInfoTable.bind(this)
    }
  }

  componentDidMount() {
    window.apiInterval = setInterval(function () {
      if(this.userIdParams){
        this.getUserIdData(this.userIdParams)
      } else {
        this.getData()
      }
      
    }.bind(this), 180000);

    axios.get('/limits', config).then(function (response) {
      if (response) {
        this.setState({limits: response.data})
        this.createInfoTable(this.state.limits, 'aqi')
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
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
      if (response) {
        if(response.status == 200 && response.data.length>0){
          this.setState({iframeData: response.data})
          this.setState({activeTab: this.state.iframeData[0].label})
        } else {
        }
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  }

  getUserIdData(userIdData) {
    axios.get('/fields/type/GUJT', config).then(function (response) {
      if (response) {
        this.setState({fields: response.data})
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

    axios.get('/' + userIdData.split("-")[0] + '/data/public',  oizom_config).then(function (response) {
      if (response) {
        if(response.status == 200 && response.data.length>0){
          this.deviceList = response.data;
          for(var i=0; i<response.data.length; i++){
            this.devices.push(response.data[i].deviceId);
            this.params[response.data[i].deviceId] = this.commonParams;
          }
          this.setState({iframeData: response.data})
          this.setState({activeTab: this.state.iframeData[0].label})

          


        } else {
        }
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
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
              <div className="col-sm-12">
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
