import { Link } from "./Link"

export class EnvParams {
    projectName: string
    internalPages: Link[]
    externalPages: Link[]
    socialLinks: Link[]

    constructor(){
        this.projectName = this.loadProjectNameFromEnv()
        this.internalPages = this.loadInternalPagesFromEnv()
        this.externalPages = this.loadExternalPagesFromEnv()
        this.socialLinks = this.loadSocialLinksFromEnv()
    }

    loadProjectNameFromEnv(): string{
        return process.env.projectName?.toString() ?? ""
    }

    loadInternalPagesFromEnv(): Link[] {
        let links: Link[] = []

        try{
            // @ts-ignore: Unreachable code error
            links = process.env.internalPages

        } catch(e) {
            console.log(links)
        }

        return links
    }
    

    loadExternalPagesFromEnv(): Link[] {
        let links: Link[] = []

        try{
            // @ts-ignore: Unreachable code error
            links = process.env.externalPages

        } catch(e) {
            console.log(links)
        }

        return links
    }

    loadSocialLinksFromEnv(): Link[] {
        let links: Link[] = []

        try{
            // @ts-ignore: Unreachable code error
            links = process.env.social

        } catch(e) {
            console.log(links)
        }

        return links
    }
}