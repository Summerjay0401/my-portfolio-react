import React from 'react'
import './About.css'
import mypic from '../../assets/images/svg/my-pic.jpg'
import rnpic from '../../assets/images/svg/rn.jpg'
import csspic from '../../assets/images/svg/css3-icon.svg'
import htmlpic from '../../assets/images/svg/html5-icon.svg'
import jspic from '../../assets/images/svg/js-icon.svg'
import reactpic from '../../assets/images/svg/react-icon.svg'
import nodejspic from '../../assets/images/svg/node-js.svg'
import mysqlpic from '../../assets/images/svg/mysql.png'
import mongodbpic from '../../assets/images/svg/mongodb.png'
import graphql from '../../assets/images/svg/graphql.png'
import gitpic from '../../assets/images/svg/git.png'

const About = () => {
  return (
    <div>
      {/* <!-- ABOUT --> */}
        <section className="about section " id="about">
            <h2 className="section-title">About</h2>

            <div className="about_container bd-grid">
                <div className="about_img">
                    <img src={mypic} alt=""/>
                </div>
                
                <div>
                    <h2 className="about_subtitle">I am Summer Jade</h2>
                    <p className="about_text">A registered nurse for 10 years and now an aspiring full-stack developer, currently finishing my studies at the University of Pennsylvania. Bridging the gap between the healthcare and tech industry, I aim to share my experience and provide a positive impact in improving peoples lives through coding.</p>           
                </div>                                   
            </div>
      </section>
      {/* <!-- SKILLS --> */}
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills_container bd-grid">          
                <div>
                    <h2 className="skills_subtitle">Profesional Skills</h2>
                    <p className="skills_text">The following are the skills that I have gained throughout the course of the bootcamp.</p>
                    <div className="skills_data">
                        <div className="skills_names">
                            <img src={reactpic} alt=""/>
                            <span className="skills_name">REACT</span>
                        </div>
                        <div className="skills_bar skills_react">
                            
                        </div>
                        <div>
                            <span className="skills_percentage">80%</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_names">
                            <img src={htmlpic} alt=""/>
                            <span className="skills_name">HTML5</span>
                        </div>
                        <div className="skills_bar skills_html">

                        </div>
                        <div>
                            <span className="skills_percentage">100%</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_names">
                            <img src={csspic} alt=""/>
                            <span className="skills_name">CSS3</span>
                        </div>
                        <div className="skills_bar skills_css">
                            
                        </div>
                        <div>
                            <span className="skills_percentage">100%</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_names">
                            <img src={jspic} alt=""/>
                            <span className="skills_name">JAVASCRIPT</span>
                        </div>
                        <div className="skills_bar skills_js">
                            
                        </div>
                        <div>
                            <span className="skills_percentage">60%</span>
                        </div>
                      </div>
                      <div className="skills_data">
                        <div className="skills_names">
                            <img src={nodejspic} alt=""/>
                            <span className="skills_name">NODE JS</span>
                        </div>
                        <div className="skills_bar skills_nodejs">
                            
                        </div>
                        <div>
                            <span className="skills_percentage">60%</span>
                        </div>
                      </div>
                      <div className="skills_data">
                        <div className="skills_names">
                            <img src={mysqlpic} alt=""/>
                            <span className="skills_name">MySQL</span>
                        </div>
                        <div className="skills_bar skills_mysql">    
                        </div>
                        <div>
                            <span className="skills_percentage">70%</span>
                        </div>
                      </div>
                      <div className="skills_data">
                          <div className="skills_names">
                          <img src={mongodbpic} alt=""/>
                            <span className="skills_name">MongoDB</span>
                        </div>
                        <div className="skills_bar skills_mongodb">

                        </div>
                        <div>
                            <span className="skills_percentage">70%</span>
                        </div>
                      </div>
                      <div className="skills_data">
                          <div className="skills_names">
                          <img src={graphql} alt=""/>
                            <span className="skills_name">GraphQL</span>
                        </div>
                        <div className="skills_bar skills_graphql">

                        </div>
                        <div>
                            <span className="skills_percentage">80%</span>
                        </div>
                      </div>
                      <div className="skills_data">
                          <div className="skills_names">
                          <img src={gitpic} alt=""/>
                            <span className="skills_name">Git</span>
                        </div>
                        <div className="skills_bar skills_git">

                        </div>
                        <div>
                            <span className="skills_percentage">80%</span>
                        </div>
                      </div>
                      <div className="skills_data">
                        <div className="skills_names">
                            <span className="skills_prefix">RN</span>
                            <span className="skills_name">Registered Nurse</span>
                          </div>
                        <div className="skills_bar skills_rn">
                        </div>
                        <div>
                            <span className="skills_percentage">100%</span>
                        </div>
                    </div>
                </div>
                <div>              
                    <img src={rnpic} alt="" className="skills_img"/>
                </div>
            </div>
        </section>

    </div>

  )
}

export default About