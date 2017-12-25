export class LikeData{
    constructor(zanid: number, postid:number, zan: number, read: number){
        this.postid = postid
        this.zan = zan
        this.read = read
        this.zanid = zanid
    }
    zanid: number
    postid: number
    zan: number
    read: number
}