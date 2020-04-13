import React, { useEffect, useState, FunctionComponent } from "react";
import { TouchableOpacity, Text, AsyncStorage, TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';
import APIPostService from '../Services/APIServices/APIPostService';
import Token from '../Models/TokenModel';
import Post from '../Models/PostModel';

const CreatePost = () => {
    const [ThisToken, setThisToken] = useState(new Token(""));
    const [Deleted, setDeleted] = useState("");
    const [PostTitle, setPostTitle] = useState("");
    const [PostContent, setPostContent] = useState("");

    const GetToken = async() =>{
        let key = await AsyncStorage.getItem("token")
        if(key){
            setThisToken(new Token(key))
        }
    }

    const CreatePost = async() =>{
        let post = new Post(0,0,PostTitle,PostContent)
        let key = await AsyncStorage.getItem("Token");
        let token = new Token("you")
        if(key){
            token = new Token(key)
        }
        let apipostservice = new APIPostService()
        if(await apipostservice.Create(post,token)){
            Actions.home();
        } else 
        {
            setDeleted("Post Not Created!")
        }
    }



    useEffect(() => {
        GetToken();
      }, []);


   const goToHome = () => {
      Actions.home()
   }
   
    return (
        <>
         <TextInput
         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => setPostTitle(text)}
         placeholder={"Post Title"}
         />
         
         <TextInput
         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => setPostContent(text)}
         placeholder={"Content"}
         />
         <Button
         onPress={CreatePost}
         title="Create Post"
         color="#841584"
         accessibilityLabel="Login about this purple button"
         />
        </>
    )
   
}
export default CreatePost