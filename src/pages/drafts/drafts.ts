import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { DraftData } from '../../model/TravelNotesData'
import { UserInfoService } from '../../providers/UserInfoService';
import { LoginPage } from '../login/login'
import { draftListReq, deleteDraftReq } from '../../req/index'
import { PostPage } from '../post/post';

@Component({
  templateUrl: 'drafts.html'
})
export class DraftsPage {
    constructor(
        public navCtrl: NavController,
        private userInfoService: UserInfoService,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController
    ) {
        this.init()
    }
    listDrafts = []
    init(){
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
		console.log("Drafts: Refresh!")
		let userInfo = this.userInfoService.getUserInfo()
		if(userInfo == null){
			console.log("Drafts: userInfo is null.")
			return false
		}
		console.log("Drafts: get userInfo -> " + userInfo.toJsonStr())
        this.getDrafts(userInfo.username)
		
		return true
    }
    getDrafts(username: string){
        let datas = []
        draftListReq().then((success) => {
            let loader = this.loadingCtrl.create({
            content: "Loading...",
            });
            loader.present();
            console.log("draftListReq: " + success.Draftpost)
            for(let i in success.Draftpost){
                if(success.Draftpost[i].username == username){
                    let data = new DraftData(success.Draftpost[i].id, success.Draftpost[i].title, 
                                                success.Draftpost[i].content,success.Draftpost[i].author, 
                                                success.Draftpost[i].username,success.Draftpost[i].location, 
                                                0)
                    datas.push(data)
                }
            }
            this.listDrafts = datas
            loader.dismiss()
        }, (error) => {
            console.debug("draftListReq:" + error);
        });
    }
    deleteDraft(draft: DraftData){
        deleteDraftReq(draft.id).then((success) => {
            let loader = this.loadingCtrl.create({
            content: "Loading...",
            });
            loader.present();
            console.log("deleteDraftReq: " + success)
            for(let i = 0; i < this.listDrafts.length; i++){
                if(draft.id == this.listDrafts[i].id){
                    this.listDrafts.splice(i, 1)
                }
            }
            loader.dismiss()
        }, (error) => {
            console.debug("deleteDraftReq:" + error);
        });
    }
    createDraft(){
        this.navCtrl.push(PostPage)
    }
    updateDraft(draftData: DraftData){
        this.navCtrl.push(PostPage, {'draftData': draftData})
    }
}