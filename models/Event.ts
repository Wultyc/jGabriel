export default class Event {
    type: string
    name: string
    url: string
    location: string
    overview: string
    positions: Position[]

    constructor(type: string, name: string, url: string, location: string, overview: string, positions: Position[]){
        this.type = type
        this.name = name
        this.url = url
        this.location = location
        this.overview = overview
        this.positions = positions
    }
}

export class Position {
    designation: string
    start: string
    end: string
    responsibilities: string[]

    constructor(designation: string, start: string, end: string, responsibilities: string[]){
        this.designation = designation
        this.start = start
        this.end = end
        this.responsibilities = responsibilities
    }
}