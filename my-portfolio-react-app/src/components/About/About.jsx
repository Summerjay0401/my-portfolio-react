import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      {/* <!-- ABOUT --> */}
        <section className="about section " id="about">
            <h2 className="section-title">About</h2>

            <div className="about_container bd-grid">
                <div className="about_img">
                    <img src="./assets/images/my-pic.jpg" alt=""/>
                </div>
                
                <div>
                    <h2 className="about_subtitle">I am Summer Jade</h2>
                    <p className="about_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                </div>                                   
            </div>
      </section>
      {/* <!-- SKILLS --> */}
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills_container bd-grid">          
                <div>
                    <h2 className="skills_subtitle">Profesional Skills</h2>
                    <p className="skills_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
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
                    <div className="skills_data">
                        <div className="skills_names">
                            <img src="./assets/images/svg/html5-icon.svg" alt=""/>
                            <span className="skills_name">HTML5</span>
                        </div>
                        <div className="skills_bar skills_html">

                        </div>
                        <div>
                            <span className="skills_percentage">70%</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_names">
                            <img src="./assets/images/svg/css3-icon.svg" alt=""/>
                            <span className="skills_name">CSS3</span>
                        </div>
                        <div className="skills_bar skills_css">
                            
                        </div>
                        <div>
                            <span className="skills_percentage">65%</span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_names">
                            <img src="./assets/images/svg/js-icon.svg" alt=""/>
                            <span className="skills_name">JAVASCRIPT</span>
                        </div>
                        <div className="skills_bar skills_js">
                            
                        </div>
                        <div>
                            <span className="skills_percentage">10%</span>
                        </div>
                    </div>
                </div>
                
                <div>              
                    <img src="./assets/images/rn.jpg" alt="" className="skills_img"/>
                </div>
            </div>
        </section>

    </div>

  )
}

export default About