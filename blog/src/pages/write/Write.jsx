import axios from 'axios';
import React, { useContext, useState } from 'react'

import "./write.css"
//import axios from '../../Axios'
//import { Context } from '../../context/Context';


export default function Write() {

 /* const[title,setTitle] = useState("");
  const[desc,setDesc] = useState("");
  const[file,setfile] = useState("");
  const { user } = useContext(Context);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc,
    };
    if(file)
    {
      const data = FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      

    }
    axios.post("/posts")


  }
*/




  return (
    <div className='write'>
        
        <img
        className='writeImg'
        src="https://www.helpguide.org/wp-content/uploads/smiling-young-woman-on-couch-leans-back-768.jpg"
        alt=""
        />
         <form className='Writeform' >
        <div className='WriteFormGroup'>

           <label htmlFor="fileInput">
             <i className="fileicon fas fa-plus"></i>

           </label>

           <input type="file" id="fileInput" style={{display:"none"}}/>
           <input type="text" placeholder="Title"  className='writeInput' autoFocus={true}/ >
          
            
          

        </div>

             <div className="writeFormGroup">

                 <textarea placeholder=" Tell your story..." type="text" className="WriteInput WriteText"></textarea>
             </div>

             <button className="writeSubmit" type="submit">Publish</button>
         </form>


    </div>
  )
}
