import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TravelNotesService } from '../../providers/TravelNotesService'
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    travelNotesService: TravelNotesService
  ) {
    this.cards = travelNotesService.getLocation()
  }
  cards = []
  push(location: string){
    console.log(location)
    this.navCtrl.push(LoginPage)
  }
}
