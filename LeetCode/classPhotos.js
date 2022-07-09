function classPhotos(redShirtHeights, blueShirtHeights) {
    //sort both the arrays
    redShirtHeights.sort()
    blueShirtHeights.sort()
    //declare a boolean to track which array has the taller student
    let blueTaller = false;
    //iterate through either array using a traditional for loop
    for (let i = 0; i < redShirtHeights.length; i++) {
        //for the first iteration figure out which array has the taller student
        if (i === 0) {
            //if its blue, change blueTaller to true
            (blueShirtHeights[i] > redShirtHeights[i]) ? blueTaller = true : blueTaller = false
        }
        //if blueTaller is true
        if (blueTaller) {
            //check and see if the number at blueShirtHeights[i] is greater than redshirtHeights[i]
            //if not return false
            if (!(blueShirtHeights[i] > redShirtHeights[i])) {
                return false
            }
        } else {
            //else 
            //check and see if redshirthehights[i] is greater than blueshirtheights[i]
            if (!(redShirtHeights[i] > blueShirtHeights[i])) {
                return false
            }
        }
    }
    //if we make it through the whole array return true
    return true
}