import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInfoData } from '../../model/UserInfoData'
import { StorageService } from '../../providers/StorageService'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    private storageService: StorageService,
  ) {
    let value = new UserInfoData
    value = this.storageService.getUserInfo()
    console.log(value.toJsonStr())
  }

}
