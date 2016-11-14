import React, {Component} from 'react'
import GoogleMap from "react-google-maps/lib/GoogleMap";
import GoogleMapLoader from "react-google-maps/lib/GoogleMapLoader";
import Marker from "react-google-maps/lib/Marker";
import fancyMapStyles from "../Mapstyle.json"
import MarkerClusterer from "react-google-maps/lib/addons/MarkerClusterer"
import InfoWindow from 'react-google-maps/lib/InfoWindow'
import Circle from 'rc-progress/lib/Circle'

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
        console.log('yoo', this.refs.map)

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

                      onClick = {() => {
                                 this.props.setDisable(false,  marker.label, marker.deviceType);
                                 this.props.callRealtime(marker.deviceId, marker.t);
                                 this.props.callAnalytics(marker.deviceId, marker.t)
                                 this.setState({lat: marker.latitude, lng:marker.longitude})
                               }}

                      onMouseover = {() => {
                                 this.props.onMarkerClick(marker,index)
                                 console.log(marker)
                                }
                              }

                      // onMouseout = {() => {
                      //   this.props.onMarkerClose(marker)
                      // }}

                    >
                      {
                        //   <InfoWindow onCloseClick={() => this.props.onMarkerClose(marker)}>
                        //   <div>{marker.showInfo ? 'yey':'no'}</div>
                        // </InfoWindow >

                        marker.showInfo && (
                          <InfoWindow className="hiiiii">
                            <div className="infowindow-content">
                              <div className="infowindow-head">
                                <strong>{marker.loc}</strong>
                              </div>
                              <div className="infowindow-body">
                                <div className="left-content" style={{width: '55%', float: 'left'}}>
                                  <p>{marker.deviceType}</p>
                                  <p><i className="fa fa-map-marker"></i> {marker.state}</p>
                                  <span>Indoor</span>
                                  <span>Online</span>
                                </div>
                                <div className="right-content" style={{width: '5%', float: 'left', position: 'relative'}}>
                                  <Circle
                                    style={{width: '50px'}}
                                    percent={
                                      marker.aqi <= 50
                                      ?
                                      '16'
                                      :
                                      (
                                        marker.aqi > 50 && marker.aqi < 101
                                        ?
                                        '32'
                                        :
                                        (
                                          marker.aqi > 100 && marker.aqi < 201
                                          ?
                                          '48'
                                          :
                                          (
                                            marker.aqi > 200 && marker.aqi < 301
                                            ?
                                            '64'
                                            :
                                            (
                                            marker.aqi > 300 && marker.aqi < 401
                                            ?
                                            '80'
                                            :
                                            '96'
                                            )
                                          )
                                        )
                                      )
                                    }
                                    strokeWidth="4"
                                    strokeColor={
                                      marker.aqi <= 50
                                      ?
                                      '#6ecc58'
                                      :
                                      (
                                        marker.aqi > 50 && marker.aqi < 101
                                        ?
                                        '#bbcf4c'
                                        :
                                        (
                                          marker.aqi > 100 && marker.aqi < 201
                                          ?
                                          '#eac736'
                                          :
                                          (
                                            marker.aqi > 200 && marker.aqi < 301
                                            ?
                                            '#ed9a2e'
                                            :
                                            (
                                            marker.aqi > 300 && marker.aqi < 401
                                            ?
                                            '#e8633a'
                                            :
                                            '#d63636'
                                            )
                                          )
                                        )
                                      )
                                    }

                                  />
                                  <span>{marker.aqi}</span>
                                </div>
                              </div>
                            </div>
                          </InfoWindow>
                        )
                      }
                    </Marker>
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
