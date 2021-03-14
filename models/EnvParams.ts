import { Link } from "./Link"

export class EnvParams {
    projectName: string
    externalPages: Link[]
    socialLinks: Link[]

    constructor(){
        this.projectName = this.loadProjectNameFromEnv()
        this.externalPages = this.loadExternalPagesFromEnv()
        this.socialLinks = this.loadSocialLinksFromEnv()
    }

    loadProjectNameFromEnv(): string{
        return process.env.projectName?.toString() ?? ""
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