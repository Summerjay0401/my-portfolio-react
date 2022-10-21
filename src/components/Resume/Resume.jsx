import React from 'react'
import downloadIcon from '../../assets/images/svg/download.png'
import './Resume.css'


const Resume = () => {
  return (
    <div>
      <section className='resume section'>

        <h2 className="section-title">Resume</h2>

        <a href="https://docs.google.com/document/d/1TXonoiaL8GoEbxsqlOz3uYYYyDOWGi-U/edit?usp=sharing&ouid=103936615288878303257&rtpof=true&sd=true" className="download-resume">
          <img src={downloadIcon} alt="" />
        </a>
        <h2 className='resume-tag'>Click icon to download</h2>
      </section>
    </div>
  )
}

export default Resume