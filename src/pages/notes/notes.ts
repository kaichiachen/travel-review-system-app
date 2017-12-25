import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { PostData } from '../../model/TravelNotesData'
import { LikeData } from '../../model/LikeData'
import { postListReq, zanListReq, updateZanReq } from '../../req/index'
import { makeBST, findPost } from '../../algorithm/bst'
import { NotePage } from '../note/note'

@Component({
  templateUrl: 'notes.html'
})
export class TravelNotesPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public modalCtrl: ModalController
    ) {
        this.location = this.navParams.get('location')
        this.getNotes(this.location[1])
        this.loader = this.loadingCtrl.create({
            content: "Loading...",
        });
        this.likeMap = new Map()
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
    window = 1
    bufIndex = 0
    likeMap: Map<number, LikeData>
    loader: any
    likeColor: string[]
    searchType: number
    show: boolean

    pushNote(note: PostData){
        let noteModal = this.modalCtrl.create(NotePage, {'note': note});
		noteModal.onDidDismiss(data => {
            console.log(data.zanid)
            updateZanReq(data).then((success) => {
            
            }, (error) => {
                console.debug("updateZanReq:" + error);
            });
		});
		noteModal.present()
    
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
        this.loader.present();
        postListReq().then((success) => {
            // console.log("postListReq" + success['Post'])
            for(let i in success['Post']){
                if(success['Post'][i].location == location){
                    let likeData = this.likeMap.get(success['Post'][i].id)
                    if(likeData == undefined){
                        likeData = new LikeData(0, 0, 0, 0)
                    }
                    let data = new PostData(success['Post'][i].id, success['Post'][i].title, success['Post'][i].content,
                                                    success['Post'][i].author, null, success['Post'][i].location, 
                                                    success['Post'][i].submittime, false, likeData.zan, likeData.read, likeData.zanid)
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
            this.pushNotes()
            this.loader.dismiss()
        }, (error) => {
            console.debug("postListReq:" + error);
        });
    }
    getNotes(location: string){
        this.getLikeList(location) // Get like list first.
    }

    pushNotes(){
        for(let i = 0;this.bufIndex < this.notesBuf.length && i < this.window; this.bufIndex++,i++){
            // console.log(this.bufIndex)
            // console.log(this.notesBuf[this.bufIndex])
            this.notes.push(this.notesBuf[this.bufIndex])
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
        for(let i = 0; i < this.bufIndex; i++){
            this.notes.push(this.notesBuf[i])
        }
    }
    getItems(ev: any) {
        // Reset items back to all of the items
        this.reloadNotes();
    
        // set val to the value of the searchbar
        let val = ev.target.value;
        if(val == ""){
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
    doLike(note: PostData){
        note.islike = true
        note.zan += 1
        console.log(note.zanid)
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
            break
            case 1:
            this.doHotLimit()
            break
        }
    }
    doHotLimit(){
        this.notesBuf = this.notesOri.sort(this.compareFunc)
        this.notes = []
        this.bufIndex = 0
        this.pushNotes()
    }
    compareFunc(a: PostData, b: PostData) {
        return (((b.zan * 0.8) + (b.read * 0.2)) - ((a.zan * 0.8) + (a.read * 0.2)));
      }
}
