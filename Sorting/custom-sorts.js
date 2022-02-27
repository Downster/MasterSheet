function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  function compare(a, b) {
    if (a % 2 === 0 && b % 2 !== 0) {
      return 1
    }
    if (a % 2 !== 0 && b % 2 === 0) {
      return -1
    }
    return a - b
  }


  return arr.sort((a, b) => compare(a, b))
}

function validAnagrams(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) {
      return -1
    }
    if (a.toString().length < b.toString().length) {
      return 1
    }
    return a - b
  })

}

function frequencySort(arr) {
  // let objectArray = [];
  // let keyFound = false;
  // let result = [];
  // arr.forEach((el) => {
  //   keyFound = false;
  //   if (!objectArray.length) {
  //     objectArray.push({
  //       value: el,
  //       frequency: 1
  //     })
  //   } else {
  //     for (let i = 0; i < objectArray.length; i++) {
  //       if (objectArray[i].value === el) {
  //         objectArray[i].frequency++;
  //         keyFound = true;
  //       }
  //     }
  //     if (!keyFound) {
  //       objectArray.push({
  //         value: el,
  //         frequency: 1
  //       })
  //     }
  //   }

  // }
  // )

  // objectArray.sort((a, b) => {
  //   if (a.frequency < b.frequency) {
  //     return -1
  //   }
  //   if (a.frequency > b.frequency) {
  //     return 1
  //   }
  //   return b - a
  // })

  // objectArray.forEach((el) => {
  //   for (let i = 0; i < el.frequency; i++) {
  //     result.push(el.value);
  //   }
  // })
  // return result;

  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in count) {
      count[arr[i]]++
    } else {
      count[arr[i]] = 1
    }
  }
  return arr.sort((a, b) => {
    if (count[a] === count[b]) {
      return b - a
    }
    return count[a] - count[b]
  })
}



module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
