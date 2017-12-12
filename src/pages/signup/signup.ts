import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
// import { StorageService } from '../../providers/StorageService'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: 'signup.html',
})
export class SignUpPage {

  constructor(
    public navCtrl: NavController,
    // private storageService: StorageService,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController
  ) { }

  signUpForm = this.formBuilder.group({
    'SignUpID': ['1', [Validators.required,]],
    'SignUpPwd': ['1', [Validators.required,]],
    'SignUpCPwd': ['1', [Validators.required,]],
    'SignUpName': ['1', [Validators.required,]],
    'SignUpSex': ['male', [Validators.required,]]
  });

  signup(userInfo) {
    console.log(userInfo);
    if(this.signUpForm.value.SignUpPwd != this.signUpForm.value.SignUpCPwd){
        this.showToast("密码不一致！")
    }
    else{
        this.navCtrl.push(TabsPage);
    }
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