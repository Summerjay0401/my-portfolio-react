import React from 'react'
import './Home.css'

const Home = () => {
  return (
        <section className="home bd-grid" id="home">
            <div className="home_data">
                <h1 className="home_title">Hi,<br />I am <span className="home_title-color">Summer Jade</span><br /> RN X Web Developer</h1>
                <button className="button">Contact</button>
            </div>
            <div class="home_social">
                <a href="https://www.linkedin.com/in/summer-jade-rosal-503605b7" class="home_social-icon">
                    <img src="./assets/images/svg/linkedin-icon.svg" alt=""/>
                </a>
                <a href="https://codepen.io/" class="home_social-icon">
                    <img src="./assets/images/svg/codepen-icon.svg" alt=""/>
                </a>
                <a href="https://github.com/Summerjay0401" class="home_social-icon">
                    <img src="./assets/images/svg/github-icon.svg" alt=""/>
                </a>
            </div>
            <div class="home_img">    
                <img src="img/profile.png" alt=""/>
            </div>
        </section>
  )
}

export default Home
