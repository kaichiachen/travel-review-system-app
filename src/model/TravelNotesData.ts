export class TravelNotesData{
    constructor(
        id: number,
        title: string,
        content: string,
        author: string,
        location: string,
        submittime: number
    ){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.location = location
        this.submittime = submittime
    }
    id: number
    title: string
    content: string
    author: string
    location: string
    submittime: number
}
export class DraftData extends TravelNotesData{
    
}