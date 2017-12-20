import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserInfoService } from '../../providers/UserInfoService'
import { UserInfoData } from '../../model/UserInfoData'
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpPage } from '../signup/signup';
import { loginReq } from '../../req'

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	constructor(
		public navCtrl: NavController,
		private formBuilder: FormBuilder,
		public toastCtrl: ToastController,
		public userInfoService: UserInfoService,
		public loadingCtrl: LoadingController,
		public viewCtrl: ViewController
  	) { }

  	loginForm = this.formBuilder.group({
		'username': ['wzx', [Validators.required,]],// 第一个参数是默认值
		'password': ['wzx', [Validators.required,]]
  	});

  	login(data) {
		let loader = this.loadingCtrl.create({
			content: "Loading...",
		});
		loader.present();
		loginReq(data.username, data.password).then((success) => {
			if (success['User'] !== undefined && success['User'].length === 1) {
				let userInfo = new UserInfoData(success['User'][0].id, 
												data.username,
												success['User'][0].name,
												success['User'][0].role)
				this.userInfoService.setUserInfo(userInfo)
				console.log("loginReq: success! -> " + userInfo.toJsonStr())
				loader.dismiss()
				this.dismiss()
				// this.navCtrl.push(TabsPage);
			} else {
				console.log("loginReq: fail!")
				loader.dismiss()
				this.showToast("登录失败！")
			}
		}, (error) => {
			console.debug("loginReq:" + error);
			this.showToast(error)
		});
  	}

 	signup() {
		console.log("Go to SignUpPage.")
		this.navCtrl.push(SignUpPage)
  	}

  	showToast(text: string) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 2000,
			position: 'button'
    	});
		toast.present(toast);
	}
	
	dismiss() {
    	this.viewCtrl.dismiss();
	}
	cancel(){
		this.navCtrl.push(TabsPage)
	}  
}