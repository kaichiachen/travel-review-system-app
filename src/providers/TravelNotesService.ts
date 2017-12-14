import { Injectable } from '@angular/core';
import { TravelNotesData } from "../model/TravelNotesData"
import { StorageService } from '../providers/StorageService'

@Injectable()
export class TravelNotesService {
    constructor(
        private storageService: StorageService,
    ){}
    getLocation():string[]{
        return ["Shanghai", 
                "Taipei", 
                "NewYork",
                "London"]
    }
    getNotes(location: string):TravelNotesData[]{
        console.log("getNotes: " + location)
        let data1 = new TravelNotesData
        data1.author = "wuchunghsuan"
        data1.content = '海，简称“沪”或“申”，是中华人民共和国直辖市，国家中心城市，超大城市，中国的经济、交通、科技、工业、金融、贸易、会展和航运中心，首批沿海开放城市。上海地处长江入海口，是长江经济带的龙头城市，隔东中国海与日本九州岛相望，南濒杭州湾，北、西与江苏、浙江两省相接。'
        data1.location = "Shanghai"
        data1.submittime = 123
        data1.title = "Shanghai百度百科"
        data1.content += data1.content
        data1.content += data1.content

        let data2 = new TravelNotesData
        data2.author = "Johnson"
        data2.content = '台北（Taipei），简称“北”，又称北市，是台湾省省会[1]  。位于台湾岛北部的台北盆地，被新北市环绕，西界淡水河及其支流新店溪，东至南港附近，南至木栅以南丘陵区，北包大屯山东南麓。'
        data2.location = "Taipei"
        data2.submittime = 234
        data2.title = "Taipei百度百科"
        return [data1, data2]
    }
}