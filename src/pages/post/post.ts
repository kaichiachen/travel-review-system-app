import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms'
import { TravelNotesService } from '../../providers/TravelNotesService'
import { UserInfoService } from '../../providers/UserInfoService';
import { UserInfoData } from '../../model/UserInfoData';
import { DraftData } from '../../model/TravelNotesData';
import { addDraftPostReq, updateDraftPostReq, deleteDraftReq, addReviewPostReq } from '../../req/index'
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { DraftsPage } from '../drafts/drafts';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { kmp } from '../../algorithm/kpm'

@Component({
	selector: 'page-post',
	templateUrl: 'post.html'
})
export class PostPage {

	constructor(
        public navCtrl: NavController,
        private formBuilder: FormBuilder,
        public travelNotesService: TravelNotesService,
        public userInfoService: UserInfoService,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
	) {
        
        this.locations = this.travelNotesService.getLocation()
        this.userInfo = this.userInfoService.getUserInfo()
        this.draftData = this.navParams.get('draftData')
        if(this.draftData != undefined){
            this.PostForm = this.formBuilder.group({
                'title': [this.draftData.title, [Validators.required,]],
                'content': [this.draftData.content, [Validators.required,]],
                'location': [this.draftData.location, [Validators.required,]],
                'tag':[],
            });
            if(this.draftData.tags != undefined){
                this.tags = this.draftData.tags.split(" ")
            }
            this.isNewDraft = false
        }
    }
    senstiveWords = ["低端人口", "上海交通大学的国家领导人"]
    isNewDraft = true
    draftData: DraftData
    date: Date
    userInfo: UserInfoData
    locations = []
    tags = []
    PostForm = this.formBuilder.group({
        'title': ['', [Validators.required,]],
        'content': ['', [Validators.required,]],
        'location': ['', [Validators.required,]],
        'tag':[],
    });
    addTag(){
        this.tags.push(this.PostForm.value.tag)
        let title = this.PostForm.value.title
        let content = this.PostForm.value.content
        let location = this.PostForm.value.location
        console.log("addTag: " + this.tags)
        this.PostForm = this.formBuilder.group({
            'title': [title, [Validators.required,]],
            'content': [content, [Validators.required,]],
            'location': [location, [Validators.required,]],
            'tag':[],
        })
    }
    deleteTag(tag: string){
        this.tags.splice(this.tags.indexOf(tag), 1)
    }
    setTags(tags: string[]): string{
        let ret = ""
        for(let i in tags){
            ret += (tags[i] + " ")
        }
        return ret.slice(0, ret.length - 1)
    }
    post(){
        let text = this.checkContent(this.PostForm.value.content)
        if(text != null){
            this.PostForm = this.formBuilder.group({
                'title': [this.PostForm.value.title, [Validators.required,]],
                'content': [text, [Validators.required,]],
                'location': [this.PostForm.value.location, [Validators.required,]],
            });
            return
        }
        let loader = this.loadingCtrl.create({
			content: "Loading...",
        });
        this.date = new Date()
        let draftData = new DraftData(  0, 
                                        this.PostForm.value.title, 
                                        this.PostForm.value.content, 
                                        this.userInfo.name, 
                                        this.userInfo.username,
                                        this.PostForm.value.location,
                                        this.date.getTime(),
                                        "")
        draftData.tags = draftData.arrayToStr(this.tags)
        loader.present();
        addReviewPostReq(draftData).then((success) => {
            console.log("addDraftPostReq: success! -> " + draftData.title)
            loader.dismiss()
            if(!this.isNewDraft){
                this.delete()
            } 
            else{
                this.navCtrl.push(DraftsPage)
            }
		}, (error) => {
            console.debug("addDraftPostReq:" + error);
            loader.dismiss()
		});
    }
    add(draftData: DraftData){
        let text = this.checkContent(draftData.content)
        if(text != null){
            this.PostForm = this.formBuilder.group({
                'title': [this.PostForm.value.title, [Validators.required,]],
                'content': [text, [Validators.required,]],
                'location': [this.PostForm.value.location, [Validators.required,]],
            });
            return
        }
        let loader = this.loadingCtrl.create({
			content: "Loading...",
		});
        loader.present();
        addDraftPostReq(draftData).then((success) => {
            console.log("addDraftPostReq: success! -> " + draftData.title)
            loader.dismiss()
			this.navCtrl.push(DraftsPage)
		}, (error) => {
            console.debug("addDraftPostReq:" + error);
            loader.dismiss()
		});
    }
    update(draftData: DraftData){
        let text = this.checkContent(draftData.content)
        if(text != null){
            this.PostForm = this.formBuilder.group({
                'title': [this.draftData.title, [Validators.required,]],
                'content': [text, [Validators.required,]],
                'location': [this.draftData.location, [Validators.required,]],
            });
            return
        }
        let loader = this.loadingCtrl.create({
            content: "Loading...",
        });
        loader.present();
        draftData.id = this.draftData.id
        updateDraftPostReq(draftData).then((success) => {
            console.log("updateDraftPostReq: success! -> " + draftData.content)
            loader.dismiss()
            this.navCtrl.push(DraftsPage)
        }, (error) => {
            console.debug("updateDraftPostReq:" + error);
            loader.dismiss()
        });
    }
    save(){
        this.date = new Date()
        let draftData = new DraftData(  0, 
                                        this.PostForm.value.title, 
                                        this.PostForm.value.content, 
                                        this.userInfo.name, 
                                        this.userInfo.username,
                                        this.PostForm.value.location,
                                        this.date.getTime(),
                                        this.setTags(this.tags))
        if(this.navParams.get('draftData') == undefined){
            this.add(draftData)
        }
        else{
            this.update(draftData)
        }
    }
    delete(){
        let loader = this.loadingCtrl.create({
            content: "Loading...",
        });
        loader.present();
        deleteDraftReq(this.draftData.id).then((success) => {
            console.log("deleteDraftReq: " + success)
            loader.dismiss()
            this.navCtrl.push(DraftsPage)
        }, (error) => {
            console.debug("deleteDraftReq:" + error);
        });
    }
    checkContent(text: string): string{
        let alert = ""
        for(let i in this.senstiveWords){
            let result = kmp(text, this.senstiveWords[i])
            if(result.length != 0){
                console.log("here1!!")
                alert += this.senstiveWords[i] + ", "
                for(let j in result){
                    text = this.replaceStr(text, this.senstiveWords[i], result[j])
                }
            }
        }
        if(alert.length == 0){
            return null
        }
        else{
            this.showToast("发现敏感词: " + alert.substr(0, alert.length - 2))
            return text
        }
        
    }
    replaceStr(target: string, str: string, index: number): string{
        let saveWord = "*"
        for(let i = 1; i < str.length; i++){
            saveWord += "*"
        }
        console.log("replace: " + str + " in " + index)
        return target.substr(0, index) + saveWord + target.substr(index + str.length, target.length - index + str.length)
    }
    showToast(text: string) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 2000,
			position: 'middle'
    	});
		toast.present(toast);
	}
}
