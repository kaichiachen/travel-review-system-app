export class UserInfoData {
    username:string;
    password:string;
    name:string;
    gender:number;
    toJsonStr(): string{
        return  '{"username":' + '"' + this.username + '"' +
                ',"password":' + '"' + this.password + '"' + 
                ',"name":' + '"' + this.name + '"' +
                ',"gender":' + this.gender +
                '}'
    }
}	