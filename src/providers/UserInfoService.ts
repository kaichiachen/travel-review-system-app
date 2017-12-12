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
        this.storageService.login(userInfo)
        return userInfo
    }
}