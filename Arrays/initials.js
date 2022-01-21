//Write a function initials(name) that accepts a full name as an arg.
// The function should return the initials for that name.

const initials = (name) => {
    let array = name.split(" ");
    return array.reduce((output, currentEl) => {
        output = output + currentEl.charAt(0);
        return output
    }, "").toUpperCase();
}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
