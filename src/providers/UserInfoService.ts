import { Injectable } from '@angular/core';
import { UserInfoData } from "../model/UserInfoData"
import { StorageService } from '../providers/StorageService'
import { loginReq } from '../req/index'

@Injectable()
export class UserInfoService {
    constructor(
        private storageService: StorageService,
    ) {}
    
    login(username: string, password:string, callback){
        var userInfo = new UserInfoData()
        loginReq(username, password).then((success) => {
            /* eslint no-console: ["error", { allow: ["debug"] }] */
            // console.debug(success.User);
            if (success.User !== undefined && success.User.length === 1) {
                userInfo.id =  success.User[0].id
                userInfo.name =  success.User[0].name
                userInfo.username =  username
                userInfo.role =  success.User[0].role
                this.storageService.write("userInfo", userInfo.toJsonStr())
                console.log("loginReq: success! -> " + userInfo.toJsonStr())
                callback(userInfo)
            } else {
                console.log("loginReq: fail!")
                callback(userInfo)
            }
        }, (error) => {
            /* eslint no-console: ["error", { allow: ["debug"] }] */
            console.debug("loginReq:" + error);
            userInfo = null
        });
    }
    logout(){
        this.storageService.remove("userInfo")
        console.log("Logout!")
    }
    getUserInfo(): UserInfoData{
        let data = this.storageService.read("userInfo")
        if(data == null){
            console.log("getUserInfo: no info.")
            return null
        }
        let userInfo = new UserInfoData
        userInfo.id = data.id
        userInfo.username = data.username
        userInfo.name = data.name
        userInfo.role = data.role
        console.log("getUserInfo: " + data)
        return userInfo
    }
}