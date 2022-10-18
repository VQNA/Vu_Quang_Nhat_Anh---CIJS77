occurences = (string) => {
    let element = []
    for (let i = 0; i < string.length; i++) {    
        if (element.includes(string[i]) == false) {
            count = 0
            for (let j = 0; j < string.length; j++) {
                if (string[i] == string[j]) {
                    count += 1
                }
                else {}
            }
            console.log(string[i], ":", count, "times")
            element.push(string[i])

        }
        else { }
    }
}


occurences([1, 1, 2, 2, 2, 3, 3, 3])