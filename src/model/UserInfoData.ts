export class UserInfoData {
    id:number
    username:string
    name:string
    role:number
    toJsonStr(): string{
        return  '{"id":' + '"' + this.id + '"' +
                ',"username":' + '"' + this.username + '"' + 
                ',"name":' + '"' + this.name + '"' +
                ',"role":' + this.role +
                '}'
    }
    roleToStr(): string{
        switch(this.role){
            case 0: return "管理员"
            case 1: return "终审员"
            case 2: return "初审员"
            case 3: return "普通用户"
            default:
            return "???"
        }
    }
}	