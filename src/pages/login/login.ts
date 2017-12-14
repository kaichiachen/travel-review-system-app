import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { StorageService } from '../../providers/StorageService'
import { UserInfoData } from '../../model/UserInfoData'
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpPage } from '../signup/signup';
import { loginReq } from '../../req/index'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public storageService: StorageService,
    public loadingCtrl: LoadingController
  ) { }

  loginForm = this.formBuilder.group({
    'username': ['1', [Validators.required,]],// 第一个参数是默认值
    'password': ['1', [Validators.required,]]
  });

  login(data) {
    let userInfo = new UserInfoData()
    loginReq(data.username, data.password).then((success) => {
        /* eslint no-console: ["error", { allow: ["debug"] }] */
        // console.debug(success.User);
        let loader = this.loadingCtrl.create({
          content: "Login...",
        });
        loader.present();
        if (success.User !== undefined && success.User.length === 1) {
            userInfo.id =  success.User[0].id
            userInfo.name =  success.User[0].name
            userInfo.username =  data.username
            userInfo.role =  success.User[0].role
            this.storageService.write("userInfo", userInfo.toJsonStr())
            console.log("loginReq: success! -> " + userInfo.toJsonStr())
            loader.dismiss()
            this.navCtrl.push(TabsPage);
        } else {
            console.log("loginReq: fail!")
            loader.dismiss()
            this.showToast("登录失败！")
        }
    }, (error) => {
        /* eslint no-console: ["error", { allow: ["debug"] }] */
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
}