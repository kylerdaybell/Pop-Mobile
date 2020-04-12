export default class User{
    readonly id: number|null;
    readonly email :string;
    readonly password: string;
    readonly authorization: "none"|"user"|"admin"; 
    public constructor(id:number|null,email:string,password:string,authorization:"none"|"user"|"admin"){
        this.id = id
        this.email = email;
        this.password = password;
        this.authorization = authorization;
    }
}