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
    genderToStr(): string{
        if(this.gender == 1){
          return "男"
        }
        else{
          return "女"
        }
    }
}	