import React, {Component} from 'react'

export default class Realtime extends Component{
  render(){
    return(
      <div className="dashboard-home">
        <div className="home-top-content row">
          <span className="col-sm-6">Outdoor</span>
          <span className="col-sm-6">Please select one</span>
        </div>
        <div className="home-bottom-content">
          <div className="aqiinfo">
            <svg version="1.1" id="Default" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="272px" height="228px" viewBox="0 0 272 228" className="svg-center aqiinfo-svgimg" enable-background="new 0 0 272 228" xmlSpace="preserve">
              <g id="ARC_1_">
                  <path fill="transparent" stroke="#ffffff" stroke-width="0.7087" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  d="M191.404,187.424l8.573,11.171c20.739-15.914,34.309-39.416,37.721-65.335l-13.961-1.838
                      C220.813,153.638,209.183,173.782,191.404,187.424z"/>
              </g>
              <g id="ARC_2_">
                  <path fill="transparent" stroke="#ffffff" stroke-width="0.7087" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  d="M88.799,187.424l-8.573,11.171c-20.739-15.914-34.309-39.416-37.721-65.335l13.961-1.838
                      C59.391,153.638,71.021,173.782,88.799,187.424z"/>
              </g>
              <g id="ARC_3_">
                  <path fill="transparent" stroke="#ffffff" stroke-width="0.7087" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  d="M224.2,127.022l14.038,1.104c2.051-26.061-6.335-51.871-23.313-71.75l-10.708,9.145
                      C218.77,82.562,225.958,104.684,224.2,127.022z"/>
              </g>
              <g id="ARC_5_">
                  <path fill="transparent" stroke="#ffffff" stroke-width="0.7087" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  d="M211.472,52.542l-10.214,9.693c-15.425-16.254-36.675-25.715-59.075-26.302l0.369-14.077
                      C168.686,22.542,193.477,33.579,211.472,52.542z"/>
              </g>
              <g id="ARC_7_">
                  <path fill="transparent" stroke="#ffffff" stroke-width="0.7087" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M78.686,62.235l-10.215-9.693c17.995-18.963,42.787-30.001,68.92-30.686l0.369,14.077
                      C115.359,36.521,94.109,45.981,78.686,62.235z"/>
              </g>

              <path fill="transparent" stroke="#ffffff" stroke-width="0.7087" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"  d="M41.703,128.129c-2.027-25.758,6.14-51.643,23.315-71.751l10.708,9.145
                        c-14.553,17.039-21.741,39.162-19.983,61.5l-14.038,1.104"></path>
            </svg>

            <div className="realtime-label">
              <span style={{color: 'white', fontSize: '35px'}}>150</span>
              <br />
              <span style={{color: 'white', fontSize: '25px'}}>Moderate</span>
            </div>
          </div>

          <div className="realtime-data">
            <ul className="realtime-data-list">
              <li className="sign"><img src="assets/images/icons/do.png" /></li>
              <li className="activity-icon"><img src="assets/images/icons/p_cycling.png" /></li>
              <li className="activity-title"><span>Cycling</span></li>
            </ul>

            <ul className="realtime-data-list">
              <li className="sign"><img src="assets/images/icons/do.png" /></li>
              <li className="activity-icon"><img src="assets/images/icons/p_cycling.png" /></li>
              <li className="activity-title"><span>Cycling</span></li>
            </ul>

            <ul className="realtime-data-list">
              <li className="sign"><img src="assets/images/icons/do.png" /></li>
              <li className="activity-icon"><img src="assets/images/icons/p_cycling.png" /></li>
              <li className="activity-title"><span>Cycling</span></li>
            </ul>

            <ul className="realtime-data-list">
              <li className="sign"><img src="assets/images/icons/do.png" /></li>
              <li className="activity-icon"><img src="assets/images/icons/p_cycling.png" /></li>
              <li className="activity-title"><span>Cycling</span></li>
            </ul>

          </div>

          <div style={{padding: '25px'}}></div>

        </div>
      </div>
    )
  }
}
