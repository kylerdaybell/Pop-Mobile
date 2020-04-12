import User from "../../Models/UserModel";
import Token from "../../Models/TokenModel";

export default class APIUserService{
    readonly url = "http://206.189.218.168";
    public async Login(user: User) : Promise<Token|null> {
        try{
            let newurl = this.url + "/Login";
            let body = JSON.stringify({User:user});
            let headers = { "Content-Type": "application/json" };
            let response = await fetch(newurl, {
                method: "POST",
                mode:"cors",
                headers: headers,
                body: body
            })
            let responseJson = await response.json();
            if(responseJson.Status == "success"){
                let token = new Token(responseJson.accessToken)
                return token;
            }else{
                throw Error("Login Failed");
            }

        }catch(e){
            console.error(e)
            return null
        }
        
    }

    public async Register(user: User) : Promise<boolean>{
        try{
            let newurl = this.url + "/Register";
            let body = JSON.stringify({User:user});
            let headers = { "Content-Type": "application/json" };
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
                throw Error("Registration Failed " + responseJson.Message);
            }

        }catch(e){
            console.error(e)
            return false
        }
    }

    public async Delete(user: User,token:Token) : Promise<boolean>{
        try{
            let newurl = this.url + "/DeleteAccount";
            let body = JSON.stringify({User:user});
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
                throw Error("Registration Failed " + responseJson.Message);
            }

        }catch(e){
            console.error(e)
            return false
        }
    }

    public async Verify(user: User,token:Token) : Promise<boolean>{
        try{
            let newurl = this.url + "/GetRoot";
            let body = JSON.stringify({User:user});
            console.error(token)
            let headers = { 
                "Content-Type": "application/json" ,
                "Authorization": "Bearer "+token.key
            };
            let response = await fetch(newurl, {
                method: "GET",
                mode:"cors",
                headers: headers,
                body: body
            })
            let responseJson = await response.json();
            console.log(responseJson)
            if(responseJson.Status == "success"){
                return true
            }else{
                throw Error("Registration Failed " + responseJson.Message);
            }

        }catch(e){
            console.error(e)
            return false
        }
    }
}