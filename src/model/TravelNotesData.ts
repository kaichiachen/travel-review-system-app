export class TravelNotesData{
    constructor(
        title: string,
        content: string,
        author: string,
        location: string,
        submittime: number
    ){
        this.title = title
        this.content = content
        this.author = author
        this.location = location
        this.submittime = submittime
    }
    title: string
    content: string
    author: string
    location: string
    submittime: number
}