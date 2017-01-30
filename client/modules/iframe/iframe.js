import React, {Component} from 'react'
import superagent from 'superagent'
import moment from 'moment'

export default class Iframe extends Component{

  constructor(props) {
    super(props)
    this.deviceParams = this.props.location.query.devices;
    if(this.deviceParams){
      this.devices = this.deviceParams.split(",");
    } else {
      this.devices = null;
    }
    console.log("came here with deviceids : "+this.deviceParams);

    this.fields = [];

    superagent.get('https://openenvironment.p.mashape.com/fields').set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      console.log('fields response : '+res);
      if(res){
        this.fields = res.body;
        console.log("fields length : "+this.fields.length);
      }      
    }.bind(this))


    superagent.post('https://openenvironment.p.mashape.com/all/public/devices/iframe').send({"devices":this.devices}).set('X-Mashape-Key', 'SPmv0Z46zymshRjsWckXKsA09OBrp14RCeSjsniWIpRk6llTuk').end(function (err, res) {
      if(res){
          console.log(res);
      }      
    }.bind(this))
  }

  render(){
    return(
      <div className="iframe-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center col-sm-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                Hello, this is iframe.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
