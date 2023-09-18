import React from 'react';
import video from '../assets/images/course-video.mp4'


export default function Banner() {
  
    return (
        <>
            <section className="section main-banner" id="top" data-section="section1">
                <video src={video} autoplay muted loop id="bg-video" >
                    {/* <source src={video} type="video/mp4" /> */}
                    
                </video>
                <img src="../src/images/main-slider-01" alt="" />

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Success starts here!</h6>
                        <h2><em>Lakshyam</em> Coaching</h2>
                        <div className="main-button">
                            <div className="scroll-to-section"><a href="#section6">Discover more</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="features-post">
            <div className="features-content">
              <div className="content-show ">
                <h4><i className="fa fa-pencil"></i>Experienced Instuctors</h4>
              </div>
              <div className="content-hide contentHide" >
                <p>Lakshyam Coaching provides top-tier education and tailored mentorship, ensuring students benefit from expert faculty guidance for a holistic learning experience.</p>
                
                <div className="scroll-to-section"><a href="#section2">More Info.</a></div> 
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="features-post second-features">
            <div className="features-content">
              <div className="content-show">
                <h4><i className="fa fa-graduation-cap"></i>Empowering Students</h4>
              </div>
              <div className="content-hide">
                <p>Our vision is to empower students with the knowledge, skills, and confidence required to tackle the challenges of competitive exams.</p>
                
                 <div className="scroll-to-section"><a href="#section3">Details</a></div> 
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="features-post third-features">
            <div className="features-content">
              <div className="content-show">
                <h4><i className="fa fa-book"></i>Continuous Innovation</h4>
              </div>
              <div className="content-hide">
                <p>We are committed to embracing innovation and staying at the forefront of educational advancements.</p>
                
               <div className="scroll-to-section"><a href="#section4">Read More</a></div> 
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
