import Project from "~/models/Project"
import Article from "~/models/Article"

export default (a: Project | Article, b: Project | Article) => {

    // Order by order attribute
    if(a.order < b.order)
        return -1
    
    if(a.order > b.order)
        return 1
    
    // Order by title
    if(a.title < b.title)
        return -1
    
    if(a.title > b.title)
        return 1
    
    //Failsafe
    return 0

}