import React, { useEffect, useState, FunctionComponent } from "react";
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIUserService from '../Services/APIServices/APIUserService';
import Token from '../Models/TokenModel';
import User from '../Models/UserModel';
import Post from '../Models/PostModel';

const About = () => {


    const [ThisToken, setThisToken] = useState(new Token(""));
    const [Registered, setRegistered] = useState("");
    const [Deleted, setDeleted] = useState("");

    const HomePage = async() =>{
        await UserRegister();
        let token = await UserLogin();
        await CreatePost(token);
        //await UserDelete(token);
    }

    const CreatePost = async(token: Token) =>{
        let post = new Post(0,0,"Kylers post","this is the content of kylers post")
        let apipostservice = new APIPostService()
        if(await apipostservice.Create(post,token)){
            setDeleted("User Account Deleted") 
        } else 
        {
            setDeleted("User Account Deleted Not Deleted")
        }
    }

    const UserLogin = async() =>{
        let apiservice = new APIUserService()
        let user = new User(0,"kyler.daybell@gmail.com","kyler","admin")
        let token = await apiservice.Login(user);
        if(token){
            setThisToken(token);
            return token;
        }else{
            setThisToken(new Token(""));
            return new Token("");
        }
    }


    const UserDelete = async(token:Token) =>{
        let apiservice = new APIUserService()
        let user = new User(0,"kyler.daybell@gmail.com","kyler","user")
        console.warn(token)
        if(await apiservice.Delete(user,token)){
            setDeleted("User Account Deleted") 
        } else 
        {
            setDeleted("User Account Deleted Not Deleted")
        }
    }

    const UserRegister = async() =>{
        let apiservice = new APIUserService()
        let user = new User(0,"kyler.daybell@gmail.com","kyler","admin")
        if(await apiservice.Register(user)){
            setRegistered("you are registered") 
        } else 
        {
            setRegistered("you are not registered")
        }
    }

    useEffect(() => {
        HomePage();
      }, []);


   const goToHome = () => {
      Actions.home()
   }
   return (
       <>
        <TouchableOpacity style = {{margin: 128,backgroundColor:'#aaa' }} onPress = {goToHome}>
        <text>Go ome</text>
        </TouchableOpacity>
        <Text>{ThisToken.key}</Text>
       </>
   )
}
export default About