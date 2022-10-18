max = (string) =>{
    let cvstring = String(string)
    let element = []
    element = cvstring.split("")
    
    element.sort()
    let i = parseInt(element.length) - 1
    console.log("max is:", element[i])
}
max(9921)