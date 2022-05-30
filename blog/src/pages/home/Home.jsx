import React, { useEffect, useState } from 'react'
import Posts from '../../posts/posts'
import Sidebar from '../../sidebar/Sidebar'
import Header from "../../Header/Header";
import "./home.css"
import axios from "../../Axios"
//import axios  from 'axios';


export default function Home() {

  

 /*
  const[posts,setPosts]=useState([]);

  useEffect(()=>{

    const fetchposts = async()=>{
      const res = await axios.get("/posts")
       console.log(res);
    }
  },[])
  
  */
  const [posts,setPosts] = useState([]);
    useEffect(()=>
    {


      axios.get("/api/post/getpost", {
       
      })
        .then((response) => {
         
          //console.log(response.data);
          setPosts(response.data);
        })
        .catch((err) => {
          console.log(err);
        });


      },[])
     /* const fetchposts = async ()=>{

        const res =   axios.post("http://localhost:5000/api/post/posts")
        console.log(res)
      }      
      fetchposts()
      */
   
    


    

    
   
  return (
<>
    <Header/>
    <div className="home">
      <Posts posts={posts} />
      <Sidebar/>
        </div>
        </>
  )
}
