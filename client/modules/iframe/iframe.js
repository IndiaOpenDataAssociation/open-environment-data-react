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

    axios.get('/fields', config).then(function (response) {
      if (response) {
        this.setState({fields: response.data})
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

    axios.post('/iframe', {"devices": this.devices}, config).then(function (response) {
      if (response) {
        this.setState({iframeData: response.data})
        this.setState({activeTab: this.state.iframeData[0].label})

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
      activeTab: 'Dhordo'
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
                              <h3>Air Quality Index - {e.label}</h3>
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
                                              <p>AQI</p>
                                            </li>
                                            :
                                            null
                                        )
                                        :
                                        (
                                          <li>
                                            <h4
                                              className={this.getDynamicClassName(this.state.limits, 'aqi', e.aqi)}>{e.aqi}</h4>
                                            <p>AQI</p>
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
                                                <p>
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
                                                <p>
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
