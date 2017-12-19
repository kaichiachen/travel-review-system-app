import { state } from "@angular/core";

export class TravelNotesData{
    constructor(
        id: number,
        title: string,
        content: string,
        author: string,
        username: string,
        location: string,
        submittime: number
    ){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.username = username
        this.location = location
        this.submittime = submittime
    }
    id: number
    title: string
    content: string
    author: string
    username: string
    location: string
    submittime: number
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
        count: number,
        status: number,
        reviewnum: number,
    ){
        super(id, title, content, author, username, location, submittime)
        this.count = count
        this.status = status
        this.reviewnum = reviewnum
    }
    count: number
    status: number
    reviewnum: number
}