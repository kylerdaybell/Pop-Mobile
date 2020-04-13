import React, { useEffect, useState, FunctionComponent } from "react";
import { TouchableOpacity, Text, AsyncStorage, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIUserService from '../Services/APIServices/APIUserService';
import Token from '../Models/TokenModel';
import User from '../Models/UserModel';


const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [secondpassword, setSecondPassword] = useState("")
    const [Registered, setRegistered] = useState("");


    const UserRegister = async() =>{
        let apiservice = new APIUserService()

        if(password == secondpassword){
            let user = new User(0,username.toLowerCase(),password,"admin")
            if(await apiservice.Register(user)){
                Actions.home()
            } else 
            {
                setRegistered("you are not registered")
            }
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

        <TextInput
        autoCompleteType={"password"}
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setSecondPassword(text)}
        placeholder={"Repeat Password"}
        />

        <Button
        onPress={UserRegister}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
       </>
   )
}
export default Register