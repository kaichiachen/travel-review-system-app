import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TravelNotesService } from '../../providers/TravelNotesService'
import { TravelNotesData } from '../../model/TravelNotesData'

@Component({
  templateUrl: 'notes.html'
})
export class TravelNotesPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private travelNotesService: TravelNotesService,
    ) {
    this.location = this.navParams.get('location')
    this.notes = this.travelNotesService.getNotes(this.location)
    }
    location: string
    notes = []
    push(note: TravelNotesData){
    console.log(note)
    
    }
    doInfinite(infiniteScroll){
        setTimeout(() => {
            console.log('Begin async operation');
            let notes = this.travelNotesService.getNotes(this.location)
            for(let i in notes){
                this.notes.push(notes[i])
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        },500)
    }
}
