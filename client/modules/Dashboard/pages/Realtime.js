import React, {Component} from 'react'

export default class Realtime extends Component{
  constructor(props){
    super(props)
    console.log('real', this.props.realtimeData)
  }


  render(){
    return(
        <div className="dashboard-home">
          hi
        </div>
    )
  }
}
