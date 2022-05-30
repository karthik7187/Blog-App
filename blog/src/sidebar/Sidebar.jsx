import React from 'react'
import "./sidebar.css"



export default function () {


  return (
    <div className='sidebar'>

        <div className="sidebarItem">
           <span className="sidebarTitle">ABOUT ME</span>
            
            <img
            src="data:image/jpeg;base64,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"
            />
            <p>

            Cricbuzz: Cricket Scores and News | Cricket Live Blogs. CricketTimes.com. CricketAddictor. Cricadium - Latest Cricket News. Cricwaves | Cricket Match Live Score : Latest News, Articles & Blogs.

            </p>
        </div>


        <div className="sidebarItem">

        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
             <li className="sidebarListItem">Life</li>
             <li className="sidebarListItem">Music</li>
             <li className="sidebarListItem">Cinema</li>
             <li className="sidebarListItem">Tech</li>
             <li className="sidebarListItem">sport</li>
             <li className="sidebarListItem">GYM</li>
             

            </ul>  
        </div>

        <div className="sidebarItem">
      

      <span className="sidebarTitle">FOLLOW US</span>
        
        <div className="slidebarSocial">

        <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            
        </div>
        </div>
          
    </div>
  )
}
