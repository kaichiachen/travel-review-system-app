import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserInfoService } from '../../providers/UserInfoService';
import { LoginPage } from '../login/login'

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

	constructor(
		public navCtrl: NavController,
		private userInfoService: UserInfoService,
		public modalCtrl: ModalController
	) {
		if(!this.refresh()){
			let loginModal = this.modalCtrl.create(LoginPage);
			loginModal.onDidDismiss(data => {
				// console.log()
				this.refresh()
			  });
			loginModal.present()
		}
	}
	refresh(): boolean{
		console.log("contact: Refresh!")
		let userInfo = this.userInfoService.getUserInfo()
		if(userInfo == null){
			console.log("contact: userInfo is null.")
			return false
		}
		console.log("Contacts: get userInfo -> " + userInfo.toJsonStr())

		this.listItems[0][1] = userInfo.id.toString()
		this.listItems[1][1] = userInfo.name
		this.listItems[2][1] = userInfo.username
		this.listItems[3][1] = userInfo.roleToStr()
		return true
	}
	listItems = [
		["ID", ""],
		["名称", ""],
		["账号", ""],
		["权限", ""],
	]
  
}
