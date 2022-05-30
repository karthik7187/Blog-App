


import Topbar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Header from "./Header/Header";
import Posts from "./posts/posts";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./pages/singlepost/SinglePost";





import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Slider from "./pages/slider/Slider";
import Sidebar from "./sidebar/Sidebar";
import { Context } from "./context/Context";

function App() {

  const {user}= useContext(Context);
  return (

    
    <Router>
     <Topbar/>
     <Switch>

     <Route  exact path='/'><Home/></Route>
      

      <Route   path='/register'><Register/> </Route>

      <Route   path='/login'>{user ? <Home/> :<Login/>}</Route>

     
      <Route   path='/write'><Write/> </Route>
      {/* <Route   path='/write'>{user ? <Write/> : <Register/>} </Route>  */}
      <Route   path='/settings'>{user ?  <Settings/>:<Register/>}  </Route>

      <Route   path='/post/:postId'>
  
      <SinglePost/>
      </Route>

     </Switch>

    </Router>  

   
   
  );
}

export default App;
