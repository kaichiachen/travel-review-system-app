import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TravelNotesService } from '../../providers/TravelNotesService'
import { TravelNotesData } from '../../model/TravelNotesData'
import { postListReq } from '../../req/index'

@Component({
  templateUrl: 'notes.html'
})
export class TravelNotesPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private travelNotesService: TravelNotesService,
        public loadingCtrl: LoadingController
    ) {
        this.location = this.navParams.get('location')
        this.getNotes(this.location[1])
    }

    location: string
    notes = []
    notesBuf: TravelNotesData[]
    window = 1
    bufIndex = 0


    push(note: TravelNotesData){
        console.log(note)
    
    }
    

    getNotes(location: string){
        let datas = []
        postListReq().then((success) => {
            let loader = this.loadingCtrl.create({
            content: "Loading...",
            });
            loader.present();
            // console.log("postListReq" + success.Post)
            for(let i in success.Post){
                if(success.Post[i].location == location){
                    let data = new TravelNotesData(success.Post[i].id, success.Post[i].title, success.Post[i].content,
                                                    success.Post[i].author, success.Post[i].location, 
                                                    success.Post[i].submittime)
                    datas.push(data)
                }
            }
            this.notesBuf = datas
            this.pushNotes()
            loader.dismiss()
        }, (error) => {
            console.debug("loginReq:" + error);
        });
    }

    pushNotes(){
        for(let i = 0;this.bufIndex < this.notesBuf.length && i < this.window; this.bufIndex++,i++){
            console.log(this.bufIndex)
            console.log(this.notesBuf[this.bufIndex])
            this.notes.push(this.notesBuf[this.bufIndex])
        }
    }

    doInfinite(infiniteScroll){
        setTimeout(() => {
            console.log('Begin infinite');
            this.pushNotes()
            console.log('End infinite');
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
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.notes = this.notesBuf.filter((item) => {
            return (item.title.indexOf(val.toLowerCase()) > -1);
          })
        }
      }
}
