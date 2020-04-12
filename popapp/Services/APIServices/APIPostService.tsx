import User from "../../Models/UserModel";
import Token from "../../Models/TokenModel";
import Post from "../../Models/PostModel";

export default class APIUserService{
    readonly url = "http://206.189.218.168";
    public async Create(post:Post,token:Token){
        try{
            let newurl = this.url + "/CreatePost";
            let body = JSON.stringify({Post:post});
            let headers = { 
                "Content-Type": "application/json" ,
                "Authorization": "Bearer "+token.key
            };
            let response = await fetch(newurl, {
                method: "POST",
                mode:"cors",
                headers: headers,
                body: body
            })
            let responseJson = await response.json();
            console.log(responseJson)
            if(responseJson.Status == "success"){
                return true
            }else{
                throw Error("Post creation failed " + responseJson.Message);
            }
        }catch(e){
            console.error(e)
            return false
        }
    }
}