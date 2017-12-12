import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserInfoService } from '../../providers/UserInfoService'
import { UserInfoData } from '../../model/UserInfoData'
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
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController
  ) { }

  loginForm = this.formBuilder.group({
    'username': ['1', [Validators.required,]],// 第一个参数是默认值
    'password': ['1', [Validators.required,]]
  });

  login(data) {
    console.log(data);
    let userInfo = this.userInfoService.login(data.username, data.password)
    if (userInfo == null){
      this.showToast("登录失败！")
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