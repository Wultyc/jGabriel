export default class Article {
    title: string
    url: string
    isHome: boolean
    date: string
    images: string
    categories: string[]
    tags: string[]
    authors: string[]
    sources: string[]
    draft: boolean

    constructor(title: string, url: string, date: string, images: string, categories: string[], tags: string[], authors: string[], sources: string[], draft: boolean){
        this.title = title
        this.url = (url.substring(url.length-5) == "index") ? url.substring(0,url.length-5) : url
        this.isHome = (url.substring(url.length-5) == "index") 
        this.date = new Date(date).toISOString().split('T')[0]
        this.images = images
        this.categories = categories
        this.tags = tags
        this.authors = authors
        this.sources = sources
        this.draft = draft
    }
}