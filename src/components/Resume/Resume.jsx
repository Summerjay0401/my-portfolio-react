import React from 'react'
import downloadIcon from '../../assets/images/svg/download.png'
import './Resume.css'


const Resume = () => {
  return (
    <div>
      <section className='resume section'>

        <h2 className="section-title">Resume</h2>

        <a href="https://drive.google.com/drive/u/0/folders/1rCcLZE-AylULSkP7sDXLAlDLmzB6jIH9" className="download-resume">
          <img src={downloadIcon} alt="" />
        </a>
        <h2 className='resume-tag'>Click icon to download</h2>
      </section>
    </div>
  )
}

export default Resume