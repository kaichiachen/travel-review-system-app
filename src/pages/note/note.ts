import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { PostData } from '../../model/TravelNotesData'

@Component({
	selector: 'page-note',
	templateUrl: 'note.html',
})
export class NotePage {

	constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public navParams: NavParams,
  	) {
        this.note = this.navParams.get('note')
        this.note.read += 1
        console.log(this.note.zanid)
    }
    
    note: PostData
    doLike(note: PostData){
        note.islike = true
        note.zan += 1
        console.log(note.zanid)
        // updateZanReq(note).then((success) => {
            
        // }, (error) => {
        //     console.debug("updateZanReq:" + error);
        // });
    }
	dismiss() {
        this.viewCtrl.dismiss(this.note);
    }
}