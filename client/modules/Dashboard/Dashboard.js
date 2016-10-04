import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import DashboardMap from './components/Map'
import cities from './components/Citydata'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

export default class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = this.getState()
    this.changeCities = this.changeCities.bind(this)
  }

  getState(){
    return {
      markers: [
        {
        position: {
          lat: 27.1767,
          lng: 78.0081,
        },
        key: `Agra`,
        icon: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png'
      },
      {
        position: {
          lat: 23.0225,
          lng: 72.5714,
        },
        key: `Ahmedabad`
      }
      ],
      city: ''
    }
  }

  changeCities(e){
    this.setState({city: e.target.value})
  }
  render(){
    return(
      <div>
        <Navbar />
        <section className="dashboard">
          <DashboardMap markers={this.state.markers} cityValue={this.state.city} />
          <div className="select-cities-box">
            <FormGroup controlId="formControlsSelect" >
              <FormControl componentClass="select" placeholder="select" ref="cityList" className="select-cities" onChange={this.changeCities}>
                <option value="India">India</option>
                {
                  cities.map((element, index)=>{
                    return(
                      <option key={index} value={index}>{element.city}</option>
                    )
                  })
                }

              </FormControl>
            </FormGroup>
          </div>

          <div className="info-panel-toggle">
            <a href="#" className="open-panel"><i className="fa fa-navicon"></i></a>
          </div>
        </section>
      </div>
    )
  }
}
