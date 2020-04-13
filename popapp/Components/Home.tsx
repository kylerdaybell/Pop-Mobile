import React from 'react'
import { Text, Button, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../Styles/MainStyles'
import pop from '../Assets/pop.jpg'

const Home = () => {
   const goToLogin = () => {
      Actions.Login()
   }
   const goToRegister = () => {
      Actions.Register()
   }

   return (
      <>
      <Text
      style={styles.title}
      adjustsFontSizeToFit={true}
      
      >POP mobile</Text>
      <View style={{flexDirection:"row"}}>
         <TouchableOpacity
         onPress={goToLogin}
         style={styles.button}
         accessibilityLabel="Login about this purple button"
         >
            <Text style={styles.buttontext}>  Login  </Text>
         </TouchableOpacity>

         <TouchableOpacity
         onPress={goToRegister}
         style={styles.button}
         accessibilityLabel="Register about this purple button"
         >
            <Text style={styles.buttontext}>Register</Text>
         </TouchableOpacity>
      </View>
      </>
   )
}
export default Home