function numWays(s) {
    //declare a count variable
    let count = 0;
    let iterations = 0;

    for (let i = 0; i < s.length - 2; i++) {
        iterations++
        for (let j = i + 1; j < s.length - 1; j++) {
            iterations++
            //declare a 3 string variables
            let str1 = s.slice(0, i + 1)
            let str2 = s.slice(i + 1, j + 1)
            let str3 = s.slice(j + 1, s.length)
            if ((str1 + str2 !== str2 + str3) && (str2 + str3 !== str3 + str1) && (str1 + str2 !== str3 + str1)) count++
        }
    }

    //return count
    console.log(iterations)
    return count
}

console.log(numWays("xzxzx"))