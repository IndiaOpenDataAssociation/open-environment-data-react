import React, {Component} from 'react'
import GoogleMapLoader from "react-google-maps/lib/GoogleMapLoader";
import GoogleMap from "react-google-maps/lib/GoogleMap";
import Marker from "react-google-maps/lib/Marker";
import cities from './Citydata'
import fancyMapStyles from "../Mapstyle.json"

export default class DashboardMap extends Component {
  constructor(props){
    super(props)
    this.state = this.getState()
  }

  getState(){
    return{
      lat: 22.9734,
      lng: 78.6569,
      zoom: 5
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.cityValue != nextProps.cityValue){
      if(cities[nextProps.cityValue] != undefined) {
        this.setState({lat: cities[nextProps.cityValue].latitude, lng: cities[nextProps.cityValue].longitude, zoom: 11})
      } else {
        this.setState(this.getState())
      }
    }

  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props.containerElementProps}
              style={{
                height: "92.5vh",
              }}
            />
          }
          googleMapElement={
            <GoogleMap

              defaultZoom={5}
              zoom = {this.state.zoom}
              defaultCenter={{ lat: 22.9734 , lng: 78.6569 }}
              center={{lat: this.state.lat , lng: this.state.lng}}
              onClick={this.props.onMapClick}
              defaultOptions={{ styles: fancyMapStyles }}
            >
              {this.props.markers.map((marker, index) => {
                let position = {
                    lat: parseFloat(marker.latitude),
                    lng: parseFloat(marker.longitude)
                }

                return (
                  <Marker
                    position={position}
                    icon =  {
                      marker.aqi < 51
                      ?
                      'assets/images/pins/good.svg'
                      :
                      (
                        marker.aqi > 50 && marker.aqi < 101
                        ?
                        'assets/images/pins/satisfactory.svg'
                        :
                        (
                          marker.aqi > 100 && marker.aqi < 201
                          ?
                          'assets/images/pins/moderate.svg'
                          :
                          (
                            marker.aqi > 200 && marker.aqi < 301
                            ?
                            'assets/images/pins/poor.svg'
                            :
                            (
                            marker.aqi > 300 && marker.aqi < 401
                            ?
                            'assets/images/pins/very-poor.svg'
                            :
                            'assets/images/pins/severe.svg'
                            )
                          )
                        )
                      )
                    }
                    onRightclick={() => this.props.onMarkerRightclick(index)}
                    onClick = {() => {

                       this.props.setDisable(false,  marker.label, marker.deviceType);
                       this.props.callRealtime(marker.deviceId, marker.t);
                       this.props.callAnalytics(marker.deviceId, marker.t)
                       this.state.lat == 22.9734 && this.state.lng == 78.6569
                       ?
                       null
                       :
                       this.setState({lat: marker.latitude, lng: marker.longitude})
                     }}/>
                );
              })
              }
            </GoogleMap>
          }
        />
      </div>
    )
  }
}
