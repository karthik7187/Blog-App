import React from 'react'
import "./post.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function Post({post}) {
  return (

    <div className='post'>
      {post.photo}
        
        <img className='postImg'
        src={post.photo}
        alt=""
        />

        <div className="postInfo">
<div className="postCats">
{post.categories.map((c)=>(

<span className="postCat">{c.name}</span>

))}

 
  
</div>
<Link to={`/post/${post._id}`} className="link">
<span className="postTitle">  
{post.title}
 </span>

</Link>

 <hr/>
 <span className="postDate">{post.createdAt}</span>

        </div>
       <p className='postdes'>

       {post.desc}


       </p>
      </div>
  )
}
