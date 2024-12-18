const fixFlavorText = (flavor_text:string):string => {
    const replaceUs = ["\n", "\u000c"]
    
    return replaceUs.reduce((acc, curr) => acc.replace(curr, " "), flavor_text)
}

export default fixFlavorText