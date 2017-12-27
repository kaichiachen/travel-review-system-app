import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TravelNotesService } from '../../providers/TravelNotesService'
import { TravelNotesPage } from '../notes/notes'
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    travelNotesService: TravelNotesService,
    public modalCtrl: ModalController
  ) {
    this.cards = travelNotesService.getLocation()
    let loginModal = this.modalCtrl.create(LoginPage);
		loginModal.present()
  }
  cards = []
  push(location: string){
    console.log(location)
    this.navCtrl.push(TravelNotesPage, {'location': location})
  }
}
