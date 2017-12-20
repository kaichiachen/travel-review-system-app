import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular'
import { TabsPage } from '../tabs/tabs';
import { UserInfoService } from '../../providers/UserInfoService'
import { UserInfoData } from '../../model/UserInfoData'
import { FormBuilder, Validators } from '@angular/forms'
import { userRegister } from '../../req/index'

@Component({
  	templateUrl: 'signup.html',
})
export class SignUpPage {

	constructor(
		public navCtrl: NavController,
		private formBuilder: FormBuilder,
		public toastCtrl: ToastController,
		public loadingCtrl: LoadingController,
		public userInfoService: UserInfoService,
	) { }

	signUpForm = this.formBuilder.group({
		'name': ['Johnson', [Validators.required,]],
		'username': ['wuchunghsuan', [Validators.required,]],
		'password': ['123456', [Validators.required,]],
		'rpassword': ['123456', [Validators.required,]],
	});
  
	signup() {
		if(this.signUpForm.value.password != this.signUpForm.value.rpassword){
			this.showToast("密码不一致！")
			return
		}
		let loader = this.loadingCtrl.create({
			content: "Loading...",
		});
		loader.present();
		userRegister({
			name: this.signUpForm.value.name,
			username: this.signUpForm.value.username,
			pwd: this.signUpForm.value.password,
			role: 3,
		}).then((success) => {
			if (success !== null && success['id'] != null) {
				let userInfo = new UserInfoData(success['id'], 
												success['name'],
												success['username'],
												success['role'])
				this.userInfoService.setUserInfo(userInfo)
				loader.dismiss()
				this.navCtrl.push(TabsPage)
			} else {
				this.showToast("注册失败！")
				loader.dismiss()
			}
		 }, (error) => {
			loader.dismiss()
			console.debug(error);
			this.showToast(error)
		});
	}

	showToast(text: string) {
		let toast = this.toastCtrl.create({
		message: text,
		duration: 2000,
		position: 'button'
		});
		toast.present(toast);
	}

}