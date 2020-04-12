import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Components/Home'
import Login from './Components/Login'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {Login} title = "About" />
      </Scene>
   </Router>
)
export default Routes