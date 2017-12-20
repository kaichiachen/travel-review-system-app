import { Injectable } from '@angular/core';

@Injectable()
export class TravelNotesService {
    constructor(
    ){}
    getLocation():string[][]{
        return [["Shanghai", "上海"], 
                ["Taipei", "台北"],
                ["NewYork", "纽约"],
                ["London", "伦敦"]
                ]
    }
}