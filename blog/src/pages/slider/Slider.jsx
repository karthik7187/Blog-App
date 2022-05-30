import React from 'react'
import "./slider.css"


export default function Slider() {
  return (
   

    <div className='sider'>
        
        <span className="slidertitle">
            Login
        </span>
        <form className='sliderForm'>
<label>Email</label>
<input type="text" placeholder="Enter Your Email.."/>
<label>Password</label>
 <input type="text" placeholder='Enter Your Message'/>

 <button className='sliderbutton'>send</button>       
        
        </form>
        
       
        </div>
  )
}
