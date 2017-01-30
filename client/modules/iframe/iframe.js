import React, {Component} from 'react'
import superagent from 'superagent'
import moment from 'moment'
import _ from 'lodash'

export default class Iframe extends Component{

  constructor(props) {
    super(props)
    this.state = this.getState()
    this.getData=this.getData.bind(this)
    this.deviceParams = this.props.location.query.devices;
    this.devices = []
    if(this.deviceParams){
    
       this.devices = this.deviceParams.split(",");
    } else {
      this.devices = null;
    }
    // console.log("came here with deviceids : "+this.deviceParams);

    // this.fields = [];

    this.getData()


  }

  componentDidMount(){
    window.apiInterval = setInterval(function() {
      this.getData()
    }.bind(this), 180000);
  }

  componentWillUnmount(){
    clearInterval(window.apiInterval)
  }

  getData(){
    console.log('api is called')
    superagent.get('https://openenvironment.p.mashape.com/fields').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      if(res){
        this.setState({fields:res.body})
        // this.fields = res.body;
        // console.log("fields length : "+this.fields);
      }
    }.bind(this))

    superagent.post('https://openenvironment.p.mashape.com/all/public/devices/iframe').send({"devices":this.devices}).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').set('Content-Type', 'application/json').end(function (err, res) {
      if(res){
        this.setState({iframeData: res.body})
      }
    }.bind(this))
  }

  getState(){
    return{
      fields: [],
      iframeData: []
    }
  }

  render(){
    let fields = this.state.fields;
    return(
      <div className="iframe-container">
        <div className="">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                {
                  this.state.iframeData.map((e)=>{
                    return(
                      <div className="panel panel-default" key={e.deviceId}>
                        <div className="panel-heading">
                          <h1 className="panel-title text-uppercase">
                            Kutchch rannotsav

                            <small>Last Updated: {moment.unix(e.payload.d.t).format('DD/MM/YYYY, h:mm:ss a')}</small>
                          </h1>
                        </div>
                        <div className="panel-body">
                          <ul className="list-inline">
                            {
                              Object.keys(e.payload.d).map(function (key){
                                if(key != 't' && key != 'noise'){
                                  return(
                                    <li key={key}>
                                      <h4>
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
                              })
                            }
                          </ul>
                        </div>
                      </div>
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
