import { Injectable } from '@angular/core';
import { UserInfoData } from "../model/UserInfoData"
import { StorageService } from '../providers/StorageService'

@Injectable()
export class UserInfoService {
    constructor(
        private storageService: StorageService,
    ) {}
    
    setUserInfo(userInfo: UserInfoData){
        this.storageService.write("userInfo", userInfo.toJsonStr())
    }
    getUserInfo(): UserInfoData{
        let data = this.storageService.read("userInfo")
        if(data == null){
            console.log("getUserInfo: no info.")
            return null
        }
        let userInfo = new UserInfoData(data.id, data.username, data.name, data.role)
        console.log("getUserInfo: " + data)
        return userInfo
    }
}