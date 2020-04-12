import React, { useEffect, useState, FunctionComponent } from "react";
import { TouchableOpacity, Text, AsyncStorage, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIUserService from '../Services/APIServices/APIUserService';
import APIPostService from '../Services/APIServices/APIPostService';
import Token from '../Models/TokenModel';
import User from '../Models/UserModel';
import Post from '../Models/PostModel';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [ThisToken, setThisToken] = useState(new Token(""));
    const [Registered, setRegistered] = useState("");
    const [Deleted, setDeleted] = useState("");

    const HomePage = async() =>{
        let token = await UserLogin();
    }



    const UserLogin = async() =>{
        let apiservice = new APIUserService()
        let user = new User(0,username,password,"admin")
        let token = await apiservice.Login(user);
        if(token){
            AsyncStorage.setItem("Token", token.key);
            setThisToken(token);
            return token;
        }else{
            setThisToken(new Token(""));
            return new Token("");
        }
    }
    
   const goToHome = () => {
      Actions.home()
   }

   return (
       <>
        <TouchableOpacity style = {{margin: 128,backgroundColor:'#aaa' }} onPress = {goToHome}>
        <Text>Go Home</Text>
        </TouchableOpacity>
        
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setUsername(text)}
        />
        
        <TextInput
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setPassword(text)}
        />
        <Button
        onPress={UserLogin}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text>{ThisToken.key}</Text>
       </>
   )
}
export default Login