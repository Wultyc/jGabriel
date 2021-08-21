export default class Project {
    title: string
    url: string
    isHome: boolean
    date: string
    hero: string
    banner: string
    role: string
    repo: string
    startdate: string
    enddate: string
    technologies: string[]
    logo: string
    summary: string
    tags: string[]
    category: string
    level: number
    order: number
    draft: boolean

    constructor(title: string, url: string, date: string, hero: string, banner: string, role: string, repo: string, startdate: string, enddate: string, technologies: string[],  logo: string, summary: string, tags: string[], category: string, level: number, order: number, draft: boolean){
        this.title = title
        this.url = (url.substring(url.length-5) == "index") ? url.substring(0,url.length-5) : url
        this.isHome = (url.substring(url.length-5) == "index") 
        this.date = date
        this.hero = hero
        this.banner = banner
        this.role = role ?? ""
        this.repo = repo ?? ""
        this.startdate = startdate ?? ""
        this.enddate = enddate ?? ""
        this.technologies = technologies ?? ""
        this.logo = logo ?? ""
        this.summary = summary ?? ""
        this.tags = tags ?? ""
        this.category = category ?? ""
        this.level = level ?? ""
        this.order = order ?? ""
        this.draft = draft
    }
}