import React, { useEffect, useState, FunctionComponent } from "react";
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIUserService from '../Services/APIServices/APIUserService';
import APIPostService from '../Services/APIServices/APIPostService';
import Token from '../Models/TokenModel';
import User from '../Models/UserModel';
import Post from '../Models/PostModel';

const Login = () => {
    const [ThisToken, setThisToken] = useState(new Token(""));
    const [Deleted, setDeleted] = useState("");

    const HomePage = async() =>{
        await CreatePost(ThisToken);
    }

    const CreatePost = async(token: Token) =>{
        let post = new Post(0,0,"Kylers post","this is the content of kylers post")
        let apipostservice = new APIPostService()
        if(await apipostservice.Create(post,token)){
            setDeleted("Post Created") 
        } else 
        {
            setDeleted("Post Not Created")
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
        <text>Go home</text>
        </TouchableOpacity>
        <Text>{ThisToken.key}</Text>
       </>
   )
}
export default Login