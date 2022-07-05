const regexDecode = (expression, ...words) => {
  const [...spreadWords] = words;

  let count = 0;
  for (let i = 0; i < spreadWords.length; i++) {
    let word = spreadWords[i];
    console.log("working");

    if (word.match(expression)) {
      count++;
      console.log(
        `The word that matches with your expression ${expression} is ${word}`
      );
    }
  }
  // if all of your word arguments match the expression this will print
  if (count > 0 && count === words.length) {
    console.log(`This expression ${expression} matches all of your words`);
  }
};

// remember to escape the regular expression like on line 126 and 127

//this will check which word matches the expression
regexDecode(/\d+/, "01234");
