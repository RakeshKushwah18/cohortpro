import React from 'react'
import './View.css'

const View3 = () => {
  return (
   <>
   <hr />
    <div className='view3'>
      <h1 className='service'>Services</h1>  
      <div className="item">
            <div className="web">
                <i class="ri-html5-line"></i>
                <h2>Web <br />Development</h2>
                <p>We create stunning and functional websites tailored to your needs.</p>
            </div>
            <div className="app">
                <i class="ri-mobile-download-line"></i>
                <h2>App <br /> Development</h2>
                <p>Our team builds user-friendly mobile applications for all platforms.</p>
            </div>
            {/* <div className="design">
                
                <h2>UI/UX Design</h2>
                <p>We design intuitive interfaces that enhance user experience.</p>
            </div> */}
            <div className="cloud">
                <i class="ri-upload-cloud-line"></i>
                <h2>Cloud <br /> Solutions</h2>
                <p>Our cloud services ensure scalability and security for your business.</p>
            </div>
            <div className="data-protection">
                <i class="ri-settings-3-line"></i>
                <h2>Data <br /> Protection</h2>
                <p>We implement robust security measures to protect your data.</p>
            </div>
        </div>
    </div>
    {/* <hr /> */}
    <footer><p> copyright © 2025 Brand Pvt.Ltd. <br />All Right Reserved</p></footer>
   </>
  )
}

export default View3