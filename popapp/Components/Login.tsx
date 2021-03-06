import React, { useEffect, useState, FunctionComponent } from "react";
import { TouchableOpacity, Text, AsyncStorage, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIUserService from '../Services/APIServices/APIUserService';
import APIPostService from '../Services/APIServices/APIPostService';
import Token from '../Models/TokenModel';
import User from '../Models/UserModel';


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const UserLogin = async() =>{
        let apiservice = new APIUserService()
        let user = new User(0,username.toLowerCase(),password,"admin")
        let token = await apiservice.Login(user);
        if(token){
            AsyncStorage.setItem("Token", token.key);
            Actions.CreatePost();
        }
    }
    

   return (
       <>
        <TextInput
        autoCompleteType={"email"}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setUsername(text)}
        placeholder={"Email"}
        />
        
        <TextInput
        autoCompleteType={"password"}
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setPassword(text)}
        placeholder={"Password"}
        />
        <Button
        onPress={UserLogin}
        title="Login"
        color="#841584"
        accessibilityLabel="Login about this purple button"
        />
       </>
   )
}
export default Login