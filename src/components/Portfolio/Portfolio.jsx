import React from 'react'

import proj1 from '../../assets/images/projects/agile-reef-42699.herokuapp.com_.png'
import proj2 from '../../assets/images/projects/proj-emm.png'
import proj3 from '../../assets/images/projects/ehr-mypulse.herokuapp.com_.png'

import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
      {/* <!-- WORK --> */}
        <section className="work section" id="work">
            <h2 className="section-title">Work</h2>

            <div className="work_container bd-grid">
                <div className="work_img">
                    <a target="_blank" href="https://jdanleano.github.io/Code-Monsters/" rel="noreferrer">
                        <img src={proj2} alt=""/>
                    </a>
                </div>
                <div className="work_img">
                    <a target="_blank" href="https://agile-reef-42699.herokuapp.com/" rel="noreferrer">
                        <img src={proj1} alt=""/>
                    </a>
                  </div>
                  <div className="work_img">
                    <a target="_blank" href="https://ehr-mypulse.herokuapp.com/" rel="noreferrer">
                        <img src={proj3} alt=""/>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Portfolio