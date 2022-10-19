import React from 'react'
import './Home.css'

import linkedin from '../../assets/images/svg/linkedin-icon.svg'
import codepen from '../../assets/images/svg/codepen-icon.svg'
import github from '../../assets/images/svg/github-icon.svg'


const Home = () => {
  return (
        <section className="home bd-grid" id="home">
            <div className="home_data">
                <h1 className="home_title">Hi,<br />I am <span className="home_title-color">Summer Jade</span><br /> RN X Web Developer</h1>
            </div>
            <div className="home_social">
                <a href="https://www.linkedin.com/in/summer-jade-rosal-503605b7" className="home_social-icon">
                    <img src={linkedin} alt=""/>
                </a>
                <a href="https://codepen.io/" className="home_social-icon">
                    <img src={codepen} alt=""/>
                </a>
                <a href="https://github.com/Summerjay0401" className="home_social-icon">
                    <img src={github} alt=""/>
                </a>
            </div>
        </section>
  )
}

export default Home
