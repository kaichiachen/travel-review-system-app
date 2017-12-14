import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInfoData } from '../../model/UserInfoData'
import { UserInfoService } from '../../providers/UserInfoService'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    private userInfoService: UserInfoService,
  ) {
    let userInfo = new UserInfoData
    userInfo = this.userInfoService.getUserInfo()
    console.log("Contacts: get userInfo -> " + userInfo.toJsonStr())

    this.listItems[0][1] = userInfo.id.toString()
    this.listItems[1][1] = userInfo.name
    this.listItems[2][1] = userInfo.username
    this.listItems[3][1] = userInfo.roleToStr()
  }
  listItems = [
    ["ID", ""],
    ["名称", ""],
    ["账号", ""],
    ["权限", ""],
  ]
  
}
