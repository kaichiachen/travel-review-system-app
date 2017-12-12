import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserInfoService } from '../../providers/UserInfoService'
import { StorageService } from '../../providers/StorageService'
import { FormBuilder, Validators } from '@angular/forms';

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
  ) { }

  loginForm = this.formBuilder.group({
    //'LoginID': ['admin@163.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.]*)((@[a-zA-Z0-9_.]*)\.([a-zA-Z]{2}|[a-zA-Z]{3}))$')]],// 第一个参数是默认值
    'LoginID': ['', [Validators.required,]],// 第一个参数是默认值
    'LoginPwd': ['', [Validators.required,]]
  });

  login(userInfo) {
    console.log(userInfo);
    this.navCtrl.push(TabsPage);

  }

  signup() {
    console.log("Go to SignUpPage.")
  }

}