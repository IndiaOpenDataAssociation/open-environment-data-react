import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'

export default class Dashboard extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <section className="dashboard">
          Dashboard
        </section>
      </div>
    )
  }
}
