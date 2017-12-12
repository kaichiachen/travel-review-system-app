import { Injectable } from '@angular/core';
import { UserInfoData } from '../model/UserInfoData'

@Injectable()
export class StorageService {

    constructor() {}
    login(userInfo: UserInfoData){
        console.log("Login: " + userInfo.toJsonStr())
        this.write("userInfo", userInfo.toJsonStr())
    }
    logout(){
        localStorage.removeItem("userInfo")
        console.log("Logout!")
    }
    getUserInfo(): UserInfoData{
        let data = this.read("userInfo")
        if(data == null){
            console.log("getUserInfo: no info.")
            return null
        }
        let userInfo = new UserInfoData
        userInfo.username = data.username
        userInfo.password = data.password
        userInfo.name = data.name
        userInfo.gender = data.gender
        console.log("getUserInfo: " + data)
        return userInfo
    }

    write(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    read(key: string) {
        let value: string = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            let str = String(JSON.parse(value))
            return JSON.parse(str);
        }
        return null;
    }
}