export default class Article {
    id: string
    label: string
    icon: string

    constructor(id: string, label: string, icon: string){
        this.id = id
        this.label = label
        this.icon = icon
    }
}