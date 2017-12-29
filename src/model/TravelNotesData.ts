export class TravelNotesData{
    constructor(
        id: number,
        title: string,
        content: string,
        author: string,
        username: string,
        location: string,
        submittime: number,
        tags: string,
    ){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.username = username
        this.location = location
        this.submittime = submittime
        this.tags = tags
    }
    id: number
    title: string
    content: string
    author: string
    username: string
    location: string
    submittime: number
    tags: string
    getTagsArray(): string[]{
        if(this.tags == undefined){
            return null
        }
        return this.tags.split(",")
    }
    arrayToStr(tags: string[]): string{
        let ret = ""
        for(let i in tags){
            ret += (tags[i] + ",")
        }
        return ret.slice(0, ret.length - 1)
    }
}
export class DraftData extends TravelNotesData{

}
export class ReviewPostData extends TravelNotesData{
    constructor(
        id: number,
        title: string,
        content: string,
        author: string,
        username: string,
        location: string,
        submittime: number,
        tags: string,
        count: number,
        status: number,
        reviewnum: number,
    ){
        super(id, title, content, author, username, location, submittime, tags)
        this.count = count
        this.status = status
        this.reviewnum = reviewnum
    }
    count: number
    status: number
    reviewnum: number
}
export class PostData extends TravelNotesData{
    constructor(
        id: number,
        title: string,
        content: string,
        author: string,
        username: string,
        location: string,
        submittime: number,
        tags: string,
        islike: boolean,
        zan: number,
        read: number,
        zanid: number,
    ){
        super(id, title, content, author, username, location, submittime, tags)
        this.islike = islike
        this.zan = zan
        this.read = read
        this.zanid = zanid
    }
    islike: boolean
    zan: number
    read: number
    zanid: number
    abstract: string
}