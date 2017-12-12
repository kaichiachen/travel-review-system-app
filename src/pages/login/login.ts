import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserInfoService } from '../../providers/UserInfoService'
import { StorageService } from '../../providers/StorageService'
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpPage } from '../signup/signup';

@Component({
  templateUrl: 'login.html',
  providers: [UserInfoService]
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private userInfoService: UserInfoService,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController
  ) { }

  loginForm = this.formBuilder.group({
    'LoginID': ['1', [Validators.required,]],// 第一个参数是默认值
    'LoginPwd': ['1', [Validators.required,]]
  });

  login(userInfo) {
    console.log(userInfo.LoginID);
    if (userInfo.LoginID == "123"){
      this.showToast("???")
    }
    else{
      this.navCtrl.push(TabsPage);
    }
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
}