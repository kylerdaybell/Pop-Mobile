import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import CreatePost from './Components/CreatePost'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "Login" component = {Login} title = "Login" />
         <Scene key = "Register" component = {Register} title = "Register" />
         <Scene key = "CreatePost" component = {CreatePost} title = "Create Post" />
      </Scene>
   </Router>
)
export default Routes