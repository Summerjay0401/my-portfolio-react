import React from 'react'

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
    </div>
  )
}

export default About