import { Injectable } from '@angular/core';
import { UserInfoData } from '../model/UserInfoData'

@Injectable()
export class StorageService {

    constructor() {}
    

    write(key: string, value: any){
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    read(key: string){
        let value: string = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            let str = String(JSON.parse(value))
            return JSON.parse(str);
        }
        return null;
    }

    remove(key: string){
        localStorage.removeItem(key)
    }
}