import { Injectable } from '@angular/core';
import { UserInfoData } from "../model/UserInfoData"
import { StorageService } from '../providers/StorageService'

@Injectable()
export class TravelNotesService {
    constructor(
        private storageService: StorageService,
    ){}
    getLocation():string[]{
        return ["Shanghai", 
                "Taipei", 
                "NewYork",
                "London"]
    }
}