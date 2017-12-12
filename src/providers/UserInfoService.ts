import { Injectable } from '@angular/core';
import { UserInfoData } from "../model/UserInfoData"

@Injectable()
export class UserInfoService {
    constructor() {}
    login(user) {
        var data = new UserInfoData()
        data.id = 123
        data.name = "johnson"
        data.password = "123"
        data.username = "wuchunghsuan"
        return data
    }
}