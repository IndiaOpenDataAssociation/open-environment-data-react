import React, {Component} from 'react'
require('es6-promise').polyfill();
import axios from 'axios'
// import superagent from 'superagent'
import moment from 'moment'
import _ from 'lodash'

var classes = ['good', 'satisfactory', 'moderate', 'poor', 'vpoor', 'severe']
var config ={
  baseURL : 'https://openenvironment.p.mashape.com',
  headers: {'X-Mashape-Key':'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk'},
};

export default class Iframe extends Component{

  constructor(props) {
    super(props)
    this.state = this.getState()
    this.getData=this.getData.bind(this)
    this.deviceParams = this.props.location.query.devices;
    // this.devices = ["OZ_PARTICLE_005"]
    this.devices = []
    if(this.deviceParams){
       this.devices = this.deviceParams.split(",");
    } else {
      this.devices = null;
    }
    // console.log("came here with deviceids : "+this.deviceParams);

    // this.fields = [];

    this.getData()

    this.getDynamicClassName = this.getDynamicClassName.bind(this)
    this.changeData = this.changeData.bind(this)

  }

  componentDidMount(){
    window.apiInterval = setInterval(function() {
      this.getData()
    }.bind(this), 180000);

    axios.get('/limits',config).then(function (response) {
      if(response) {
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

  componentWillUnmount(){
    clearInterval(window.apiInterval)
  }

  getData(){

    axios.get('/fields',config).then(function (response) {
      if(response) {
        this.setState({fields: response.data})
      }
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

    axios.post('/all/public/devices/iframe',{"devices":this.devices},config).then(function (response) {
      if(response){
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

  getState(){
    return{
      fields: [],
      iframeData: [],
      limits: [],
      activeTab: 'Dhordo'
    }
  }

  getDynamicClassName(data, key, value){
    let tempKey='', className=''
    data.map((dataItem) => {
      if(dataItem.fkey == key) {
        dataItem.range.map((rangeItem,index) => {
          if(value >= rangeItem){
            tempKey = index
          }
        })

        className = classes[tempKey]
      }
    })
    return className
  }

  changeData(data){
    this.setState({
      activeTab: data
    })
  }
  render(){
    let fields = this.state.fields;
    return(
      <div className="iframe-container">
        <div className="">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                <h2 className="text-center">Air Quality Monitoring Data</h2>
                <div className="button-group">
                {
                  this.state.iframeData.map((e) => {
                    return(
                        <button key={e.label} onClick={() => {this.changeData(e.label)}}
                          className={
                            this.state.activeTab == e.label
                            ?
                              'active'
                            :
                              null
                          }
                        >
                          {e.label}
                          <small>Last Updated: {moment.unix(e.payload.d.t).format('DD/MM/YYYY, h:mm:ss a')}</small>
                        </button>
                    )
                  })
                }
                </div>

                  {
                    this.state.iframeData.map((e) => {
                      return(
                        this.state.activeTab == e.label
                        ?
                          <div className="iframe-body" key={e.label}>
                            <ul className="list-inline">
                              <li>
                                <h4 className={this.getDynamicClassName(this.state.limits, 'aqi', e.aqi)}>{e.aqi}</h4>
                                <p>AQI</p>
                              </li>
                              {
                                Object.keys(e.payload.d).map(function (key){
                                  if(key != 't' && key != 'noise'){
                                    return(
                                      <li key={key}>
                                        <h4 className={this.getDynamicClassName(this.state.limits, key, e.payload.d[key])}>
                                          {
                                            e.payload.d[key]
                                          }
                                          {
                                            fields.map(function (e) {
                                              if (e.fkey==key)
                                                return <small key={key}>{e.unit }</small>
                                            })
                                          }
                                        </h4>
                                        <p>
                                          {
                                            fields.map(function (e) {
                                              if (e.fkey==key)
                                                return e.label
                                            })
                                          }
                                        </p>
                                      </li>
                                    )
                                  }
                                }.bind(this))
                              }
                            </ul>
                            <div className="description">
                              <p>
                                <i className="fa fa-info-circle"></i>
                                {e.desc}
                              </p>
                            </div>
                          </div>
                        :
                        null
                      )
                    })
                  }

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
