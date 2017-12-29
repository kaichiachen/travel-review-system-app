import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { PostData } from '../../model/TravelNotesData'
import { LikeData } from '../../model/LikeData'
import { postListReq, zanListReq, updateZanReq, zanInfoReq, addZanInfoReq, deleteZanInfoReq } from '../../req/index'
import { makeBST, findPost } from '../../algorithm/bst'
import { NotePage } from '../note/note'
import { UserInfoService } from '../../providers/UserInfoService';
import { UserInfoData } from '../../model/UserInfoData';

@Component({
  templateUrl: 'notes.html'
})
export class TravelNotesPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public modalCtrl: ModalController,
        private userInfoService: UserInfoService,
    ) {
        this.loader = this.loadingCtrl.create({
            content: "Loading...",
        });
        this.loader.present();
        this.userInfo = this.userInfoService.getUserInfo()
        this.location = this.navParams.get('location')
        this.getNotes(this.location[1])
        this.searchType = 0
        this.show = true
    }
    // infinity = true
    limit = 0
    bst: any
    location: string
    notes = []
    notesBuf: PostData[]
    notesOri: PostData[]
    window = 3
    bufIndex = 0
    likeMap = new Map<number, LikeData>()
    islikeMap = new Map<number, number>()
    loader: any
    likeColor: string[]
    searchType: number
    show: boolean
    userInfo: UserInfoData
    tagsMap = new Map<string, PostData[]>()
    search = ""

    pushNote(note: PostData){
        let noteModal = this.modalCtrl.create(NotePage, {'note': note});
        let islike = note.islike
		noteModal.onDidDismiss(data => {
                // console.log(data.zanid)
                if(islike != note.islike){
                    if(note.islike){
                        this.addLikeInfo(note.id)
                    }
                    else{
                        this.deleteLikeInfo(note.id)
                    }
                }
                updateZanReq(data).then((success) => {
                
            }, (error) => {
                console.debug("updateZanReq:" + error);
            });
		});
		noteModal.present()
    }
    getLikeInfoList(location: string){
        zanInfoReq(this.userInfo.username).then((success) => {
            console.log("zanListReq: " + success['Zaninfo'])
            for(let i in success['Zaninfo']){
                this.islikeMap.set(success['Zaninfo'][i].postid, success['Zaninfo'][i].id)
            }
            this.getLikeList(location)
        }, (error) => {
            console.debug("zanInfoReq:" + error);
        });
    }
    getLikeList(location: string){
        zanListReq().then((success) => {
            // console.log("zanListReq" + success['Zan'])
            for(let i in success['Zan']){
                let data = new LikeData(success['Zan'][i].id, success['Zan'][i].postid, 
                                        success['Zan'][i].zan, success['Zan'][i].read)
                this.likeMap.set(success['Zan'][i].postid, data)
            }
            this.getNotesList(location)
        }, (error) => {
            console.debug("zanListReq:" + error);
        });
    }
    getNotesList(location: string){
        let datas = []
        
        postListReq().then((success) => {
            // console.log("postListReq" + success['Post'])
            for(let i in success['Post']){
                if(success['Post'][i].location == location){
                    let likeData = this.likeMap.get(success['Post'][i].id)
                    if(likeData == undefined){
                        likeData = new LikeData(0, 0, 0, 0)
                    }
                    let islike = true
                    if(this.islikeMap.get(success['Post'][i].id) == undefined){
                        islike = false
                    }
                    let data = new PostData(success['Post'][i].id, success['Post'][i].title, success['Post'][i].content,
                                                    success['Post'][i].author, null, success['Post'][i].location, 
                                                    success['Post'][i].submittime, success['Post'][i].tags, islike, likeData.zan, likeData.read, likeData.zanid)
                    if(success['Post'][i].tags != undefined){
                        let tags = success['Post'][i].tags.split(",")
                        for(let i in tags){
                            if(this.tagsMap.get(tags[i]) == undefined){
                                // console.log("tagsMap set: " + tags[i])
                                this.tagsMap.set(tags[i], [data])
                            }
                            else{
                                // console.log("tagsMap set push: " + tags[i])
                                let notes = this.tagsMap.get(tags[i])
                                notes.push(data)
                                this.tagsMap.set(tags[i], notes)
                            }
                        }
                    }
                    datas.push(data)
                }
            }
            this.notesBuf = datas
            this.notesOri = datas
            if(this.notesBuf.length != 0){
                this.bst = makeBST(this.notesBuf);
            }
            else{
                this.bst = []
            }
            this.doLimit(this.limit)
            // this.pushNotes()
            this.loader.dismiss()
        }, (error) => {
            console.debug("postListReq:" + error);
        });
    }
    getNotes(location: string){
        this.getLikeInfoList(location) // Get like list first.
    }

    pushNotes(){
        for(let i = 0;this.bufIndex < this.notesBuf.length && i < this.window; this.bufIndex++,i++){
            // console.log(this.bufIndex)
            // console.log(this.notesBuf[this.bufIndex])
            this.notes.push(this.notesBuf[this.bufIndex])
            this.notes[this.notes.length - 1].abstract = (this.notes[this.notes.length - 1].content.substr(0, 200))
            if(this.notes[this.notes.length - 1].abstract.length >= 200){
                this.notes[this.notes.length - 1].abstract += "......"
            }
        }
    }

    doInfinite(infiniteScroll){
        // if(!this.infinity){
        //     infiniteScroll.complete();
        //     return
        // }
        setTimeout(() => {
            console.log('Do infinite.');
            this.pushNotes()
            infiniteScroll.complete();
        },500)
    }
    reloadNotes(){
        this.notes = []
        // for(let i = 0; i < this.bufIndex; i++){
        //     this.notes.push(this.notesBuf[i])
        // }
    }
    getItems(val: string) {
        // Reset items back to all of the items
        this.reloadNotes();
    
        // set val to the value of the searchbar
        if(val == "" || val == undefined){
            this.notesBuf = this.notesOri
            this.notes = []
            this.bufIndex = 0
            this.pushNotes()
            if(this.notesBuf.length != 0){
                this.bst = makeBST(this.notesBuf);
            }
            else{
                this.bst = []
            }
        }
        else if(val[0] == "#"){
            val = val.substr(1)
            this.notes = []
            this.notesBuf = []
            this.bufIndex = 0
            if(this.tagsMap.get(val) != undefined){
                console.log("#Tag search: " + val)
                this.notesBuf = this.tagsMap.get(val)
                this.bst = makeBST(this.notesBuf);
                this.pushNotes()
            }
            return
        }
        
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.notesBuf = this.notesOri.filter((item) => {
                return (item.title.indexOf(val) > -1);
            })
            this.notes = []
            this.bufIndex = 0
            this.pushNotes()
            if(this.notesBuf.length != 0){
                this.bst = makeBST(this.notesBuf);
            }
            else{
                this.bst = []
            }
        }
    }
    doLimit(opt: number){
        const date = new Date()
        switch(opt){
            case 0:
            date.setTime(0)
            break
            case 1:
            date.setDate(date.getDate() - 7)
            break
            case 2:
            date.setMonth(date.getMonth() - 1)
            break
            case 3:
            date.setFullYear(date.getFullYear() - 1)
            break
        }
        this.notesBuf = findPost(this.bst, date)
        this.notes = []
        this.bufIndex = 0
        this.pushNotes()
    }
    addLikeInfo(postid: number){
        addZanInfoReq(postid, this.userInfo.username).then((success) => {
            
        }, (error) => {
            console.debug("updateZanReq:" + error);
        });
    }
    deleteLikeInfo(postid: number){
        deleteZanInfoReq(this.islikeMap.get(postid)).then((success) => {
            
        }, (error) => {
            console.debug("deleteZanInfoReq:" + error);
        });
    }
    doLike(note: PostData){
        note.islike = true
        note.zan += 1
        console.log("Like: " + note.zanid)
        this.addLikeInfo(note.id)
        updateZanReq(note).then((success) => {
            
        }, (error) => {
            console.debug("updateZanReq:" + error);
        });
    }
    doDislike(note: PostData){
        note.islike = false
        note.zan -= 1
        console.log("Dislike: " + note.zanid)
        this.deleteLikeInfo(note.id)
        updateZanReq(note).then((success) => {
            
        }, (error) => {
            console.debug("updateZanReq:" + error);
        });
    }
    doSearchLimit(opt: number){
        console.log(this.searchType)
        if(opt == 0){
            this.show = true
        }
        else{
            this.show = false
        }
        switch(opt){
            case 0:
            this.show = true
            this.doLimit(this.limit)
            break
            case 1:
            this.doHotLimit()
            break
        }
    }
    doHotLimit(){
        this.notesBuf = this.notesBuf.sort(this.compareFunc)
        this.notes = []
        this.bufIndex = 0
        this.pushNotes()
    }
    compareFunc(a: PostData, b: PostData) {
        return (((b.zan * 0.8) + (b.read * 0.2)) - ((a.zan * 0.8) + (a.read * 0.2)));
    }
    searchTag(tag: string){
        this.search = "#" + tag
        this.getItems(this.search)
    }
}
