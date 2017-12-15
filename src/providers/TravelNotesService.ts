import { Injectable } from '@angular/core';
import { TravelNotesData } from "../model/TravelNotesData"
import { StorageService } from '../providers/StorageService'

@Injectable()
export class TravelNotesService {
    constructor(
        private storageService: StorageService,
    ){}
    getLocation():string[][]{
        return [["Shanghai", "上海"], 
                ["Taipei", "台北"],
                ["NewYork", "纽约"],
                ["London", "伦敦"]
                ]
    }
}