
export default (level: number, title: string) => {

    const indentation = "    "
    let outputString = ""

    for(let i = 0; i < level; i++){
        outputString += indentation
    }

    outputString += title

    return outputString

}