export default class Event {
    id: number
    type: string
    title: string
    start: string
    end: string
    company: string
    url: string
    location: string
    role: string
    description: string
    responsibilities: string[]

    constructor(id: number, type: string, title: string, start: string, end: string, company: string, url: string, location: string, role:string, description: string, responsibilities: string[]){
        this.id = id
        this.type = type
        this.title = title
        this.start = start
        this.end = end ?? "Present"
        this.company = company
        this.url = url
        this.location = location
        this.role = role
        this.description = description
        this.responsibilities = responsibilities
    }
}