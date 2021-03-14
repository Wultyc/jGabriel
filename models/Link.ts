export class Link {
    name:string
    icon:string
    url:string
    showOnNavBar:boolean

    constructor(name?:string, icon?:string, url?:string, showOnNavBar?:boolean){
        this.name = name ?? ""
        this.icon = icon ?? ""
        this.url = url ?? ""
        this.showOnNavBar = showOnNavBar ?? false
    }
}

export class Links {
    links: Link[]

    constructor(links?: Link[]){
        this.links = links ?? []
    }
}