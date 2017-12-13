import { Injectable } from '@angular/core';
import { UserInfoData } from "../model/UserInfoData"
import { StorageService } from '../providers/StorageService'

@Injectable()
export class UserInfoService {
    constructor(
        private storageService: StorageService,
    ) {}
    login(username: string, password:string): UserInfoData{
        if(username == "123"){
            return null
        }
        var userInfo = new UserInfoData()
        userInfo.name = "wuchunghsuan"
        userInfo.password = password
        userInfo.username = username
        userInfo.gender = 1
        console.log("Login: " + userInfo.toJsonStr())
        this.storageService.write("userInfo", userInfo.toJsonStr())
        return userInfo
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
        userInfo.username = data.username
        userInfo.password = data.password
        userInfo.name = data.name
        userInfo.gender = data.gender
        console.log("getUserInfo: " + data)
        return userInfo
    }
}