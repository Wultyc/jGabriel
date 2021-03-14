export default class Article {
    title: string
    url: string
    date: string
    images: string
    categories: string[]
    tags: string[]
    authors: string[]
    sources: string[]
    draft: boolean

    constructor(title: string, url: string, date: string, images: string, categories: string[], tags: string[], authors: string[], sources: string[], draft: boolean){
        this.title = title
        this.url = url
        this.date = new Date(date).toISOString().split('T')[0]
        this.images = images
        this.categories = categories
        this.tags = tags
        this.authors = authors
        this.sources = sources
        this.draft = draft
    }
}