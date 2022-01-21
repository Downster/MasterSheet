//F to C: (tempF - 32) * 5/9
//C to F: tempC * 9/5 + 32


function convertTemp (temp, type){
    if (type === 'F'){
        return convertToC(temp)      //convert to C
    } else {
        return convertToF(temp)//convert to F
    }
}

let convertToF = (temp) => {
    return temp * 9/5 + 32
}

let convertToC = (temp) => {
    return (temp - 32) * 5/9
}
