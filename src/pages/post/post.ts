import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms'
import { TravelNotesService } from '../../providers/TravelNotesService'

@Component({
	selector: 'page-post',
	templateUrl: 'post.html'
})
export class PostPage {

	constructor(
        public navCtrl: NavController,
        private formBuilder: FormBuilder,
        travelNotesService: TravelNotesService
	) {
        this.locations = travelNotesService.getLocation()
    }

    locations = []
    PostForm = this.formBuilder.group({
		'title': ['两人游', [Validators.required,]],
        'content': ['纽约市（City of New York，简称NYC），位于美国纽约州东南部大西洋沿岸，是美国第一大城市及第一大港。\
                    纽约坐拥大纽约都会区的核心地带，是一座世界级国际化大都市，也是世界第一大经济中心，其GDP于2013年超越东京，位居世界第\
                    一。截至2010年，纽约的财产所有总值为813万亿美元，直接影响着全球的金融、媒体、政治、娱乐以及时尚界。', [Validators.required,]],
		'location': ['Shanghai', [Validators.required,]],
	});
    post(){

    }
}
