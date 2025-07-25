import React from 'react'
import './View.css'


const View4 = () => {
  return (
   <>
    <div className="View4">
        <div className='m1'>
            <h1>Contact Us</h1>
            <div className="social">
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-twitter-x-fill"></i>
                <i class="ri-instagram-fill"></i>
                <i class="ri-facebook-circle-fill"></i>
            </div>
        </div>
        <form action="">
                <input className="inpt" type="text" name='name' placeholder='Your Name' required />
                <input className="inpt" type="email" name='email' placeholder='Your Email' required />
                <input className="inpt" type="number" name='number' placeholder='Your Number' required />
                <textarea className="inpt" name="Message"placeholder="Your Message" id=""></textarea>
                <button className="sub" type="submit">Submit</button>
            
        </form>
        
    </div>
    <hr />
    <footer><p> copyright © 2025 Brand Pvt.Ltd. <br />All Right Reserved</p></footer>

   </>
  )
}

export default View4