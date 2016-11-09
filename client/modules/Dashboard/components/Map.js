import React, {Component} from 'react'
import GoogleMapLoader from "react-google-maps/lib/GoogleMapLoader";
import GoogleMap from "react-google-maps/lib/GoogleMap";
import Marker from "react-google-maps/lib/Marker";
import fancyMapStyles from "../Mapstyle.json"
import MarkerClusterer from "react-google-maps/lib/addons/MarkerClusterer"
export default class DashboardMap extends Component {
  constructor(props){
    super(props)
    let mapComponent;
    this.state = this.getState()
  }

  getState(){
    return{
      lat: 22.9734,
      lng: 78.6569,
      zoom: 5,
      cityChanged : this.props.cityChanged
    }
  }



  componentWillReceiveProps(nextProps){
      if(this.props.cityValue != nextProps.cityValue){
        this.setState({cityChanged: nextProps.cityChanged})
        if(this.props.cities[nextProps.cityValue] != undefined ) {
          this.setState({lat: this.props.cities[nextProps.cityValue].latitude, lng: this.props.cities[nextProps.cityValue].longitude, zoom: 11})
          if (this.refs.map){
            this.refs.map.props.map.setZoom(11)
          }
        } else {
          this.setState({lat: 22.9734 , lng: 78.6569})
            this.refs.map.props.map.setZoom(5)
        }



      }
      else{
        // this.refs.map.props.map.setZoom(this.refs.map.props.map.getZoom())
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
              ref="map"
              defaultZoom={5}
              defaultCenter={{ lat: 22.9734 , lng: 78.6569 }}
              center={{lat: this.state.lat , lng: this.state.lng}}
              onClick={this.props.onMapClick}
              defaultOptions={{ styles: fancyMapStyles }}
            >
            <MarkerClusterer
              averageCenter
              enableRetinaIcons
              gridSize={60}
             >
              {
                this.props.markers.map((marker, index) => {
                  let position = {
                      lat: parseFloat(marker.latitude),
                      lng: parseFloat(marker.longitude)
                  }

                  return (
                    <Marker
                      position={position}
                      icon =  {
                        marker.aqi <= 50
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
                         this.setState({lat: marker.latitude, lng:marker.longitude})


                       }}/>
                  );
              })
              }
              </MarkerClusterer>
            </GoogleMap>
          }
        />
      </div>
    )
  }
}
