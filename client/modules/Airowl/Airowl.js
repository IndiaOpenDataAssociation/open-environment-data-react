import React, {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Helmet from 'react-helmet/lib/Helmet'

export default class Airowl extends Component{
  render(){
    return(
      <div className="airowl">
        <Helmet script={[
            {"src": "https://d2xwmjc4uy2hr5.cloudfront.net/im-embed/im-embed.min.js", "type": "text/javascript"}
          ]}
        />
        <Navbar />

        <div  className="home-styles text-center">
          <div className="overlay">
            <div className="landing-content black-transparent">
              <div className=" padding-default ">
                <div className="row ">
                  <div className="col-sm-12 ">
                    <div className="col-sm-12 mobile-no-padding vertical-center-parent">
                      <div className="">

                        <div className="col-sm-12 text-left mobile-no-padding" style={{margin: "0 auto"}}>
                          <div className="text-left" style={{minHeight: '180px'}}>
                          </div>
                          <div className="text-left margin-bottom-50">
                            <h2 style={{marginBottom:'0px', textAlign: 'left'}}>When People Pollute,</h2>
                            <h2 className="no-top-margin" style={{textAlign: 'left'}}>The AirOwl Hoot.</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="below-home-section home-repeat-bg bg-white">
          <div className="container">

              <div className=" text-center">
                <div className="hr-orange">
                  <h1 className="primary-black">Airowl is here</h1>
                  <hr />
                </div>

                <div className="text-center airowl-intro margin-bottom-25">
                  <p>
                    Airowl is India's first reliable and most affordable Do-it-Yourself (DiY) personal air quality <a className="theme-link" href="https://en.wikipedia.org/wiki/Particulates" target="_blank">(Dust SPM 2.5 & 10 micron)</a> monitoring device.
                  </p>
                  <p>
                    This device generates real-time dust pollution data and shows it on this open data project <a className="theme-link" href="/#/dashboard/" >website</a> and a free mobile app (<a className="theme-link" href="https://play.google.com/store/apps/details?id=com.idn0phl3108ed43d22s30&hl=en" target="_blank">Android</a>, iOS) that anyone can download. It will not only constantly update you on the quality of air that you are currently breathing but also helps other citizens of the country know the air quality.

                  </p>
                  <p>
                    We sincerely believe, the starting point is 1000s of people like you can start a movement by affording an open source device and contribute the data to public domain for free access & sharing. This will automatically bring in a very large number of people, from all walks of life taking notice and using the free data in their own ways. Once we all start taking necessary action based on this data we will have far better air to breath.
                  </p>
                  <p>
                    Without common man taking action, nothing is going to change.
                  </p>
                  <p>
                    If you are an open data enthusiast, maker, you have an open-source monitoring device (accurate and reliable) or you have suggestions for us, then kindly <a className="theme-link" href="/#/openapi/" >contact us</a> and contribute in this open data project.

                  </p>
                  <img className="img-responsive airowl-gif" src="assets/img/airowl.gif" />
                </div>

                <div className="buy-airowl-section">
                  <h1>Buy your owl now</h1>

                  <div className="row margin-bottom-25">
                      <div className="col-sm-6">
                        <div className="text-center margin-bottom-10p">
                          <img className="img-responsive img-middle" src="assets/img/OWL_3g.jpg" />
                            <div className="text-center red margin-bottom-10p">
                              <i className="fa fa-inr" style={{marginRight:"5px"}}></i> 5,000/-
                            </div>
                            <a href="https://www.instamojo.com/AirOwl/airowl/" rel="im-checkout" data-behaviour="remote" data-style="flat" data-text="Buy AirOwl 3G" data-token="4aaf75271bbcbaa4e9d9bc35a38433d1">
                            </a>
                        </div>

                      </div>
                      <div className="col-sm-6">
                        <div className="text-center">
                          <img className="img-responsive img-middle" src="assets/img/OWL_wi.jpg" />
                            <div className="text-center red margin-bottom-10p">
                              <i className="fa fa-inr" style={{marginRight: "5px"}}></i> 5,000/-
                            </div>
                            <a href="https://www.instamojo.com/AirOwl/airowl-wi/" rel="im-checkout" data-behaviour="remote" data-style="flat" data-text="Buy AirOwl Wi" data-token="4aaf75271bbcbaa4e9d9bc35a38433d1">

                            </a>
                        </div>

                      </div>
                      <span className="red bold" >
                          Use Discount codes FIRST1000 (1001/- off).<br /> if purchasing more than 10 then PACKOF10. (1501/- off)
                      </span>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="real-data-home-bg no-top-padding no-bottom-padding">
          <div itemscope itemtype="http://schema.org/Property" className="black-transparent mobile-no-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 margin-v-50">
                  <div className="col-sm-6 white-card-bg">
                    <div className="">
                      <p className="title-card-bg">
                        Portable and easy assembling
                      </p>
                    </div>
                    <div className="">
                      <p className="desc-card-bg">
                        Designed for all age groups. Simple and easy assembly. No additional tools required.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 margin-bottom-50">
                  <div className="col-sm-6 col-md-offset-3 col-lg-offset-3 white-card-bg">
                    <div className="">
                      <p className="title-card-bg">
                        Consistent Performance and Low Maintenance
                      </p>
                    </div>
                    <div className="">
                      <p className="desc-card-bg">
                        The device runs consistently and only requires some dusting for maintenance (once every 3-5 months).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 margin-bottom-50">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6 white-card-bg">
                    <div className="">
                      <p className="title-card-bg">
                        Advance Visualization
                      </p>
                    </div>
                    <div className="">
                      <p className="desc-card-bg">
                        Information is offered in the form of graphs and charts. You can easily understand, monitor and compare the data daily, weekly, monthly and yearly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white margin-bottom-25">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <div className="margin-bottom-default hr-orange">
                  <span className="h1 primary-black font-capital title ">Resources!</span>
                  <hr />
                </div>
                <div className="row margin-bottom-default">
                  <div className="col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
                    <p>
                      It's never late, Good deeds often brings happiness to you and to the people around. Start caring through sharing!
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-offset-3">
                  <a className="btn btn-default btn-red fa-btn-custom" href="https://github.com/IndiaOpenDataAssociation/India-Open-Environment-Data-Project/tree/master/Airowl" target="_blank"> <i className="fa fa-github"></i> Github <br /> <span className="small-desc">(Technical Details)</span> </a>
                  <a className="btn btn-default btn-red fa-btn-custom" href="
                            http://knowledge.indiaopendata.com/index.php/AirOwl" target="_blank"> <i className="fa fa-wikipedia-w"></i> Wiki <br /> <span className="small-desc">(Assembly Details)</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </div>
    )
  }
}
