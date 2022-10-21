max = (string) =>{
    let cvstring = String(string)
    let element = []
    element = cvstring.split("")
    console.log(Math.max(...element))
    
}
max(9921)