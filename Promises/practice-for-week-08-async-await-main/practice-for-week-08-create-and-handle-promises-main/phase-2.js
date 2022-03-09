function stretch(timeLeft) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft - 1000 < 0) {
        reject("Error: Not enough time to stretch");
      } else {
        console.log("done stretching");
        timeLeft -= 1000;
        resolve(timeLeft);
      }
    }, timeLeft);
  });
}

function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft - 500 < 0) {
        reject("Error: Not enough time to run on treadmill");
      } else {
        console.log("done running on treadmill");
        timeLeft -= 500;
        resolve(timeLeft);
      }
    }, timeLeft);
  });
}

function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft - 2000 < 0) {
        reject("Error: Not enough time to lift weights");
      } else {
        console.log("done lifting weights");
        timeLeft -= 2000;
        resolve(timeLeft);
      }
    }, timeLeft);
  });
}

function workout(totalTime) {
  stretch(totalTime)
    .then((newTime) => {
      return runOnTreadmill(newTime);
    })
    .then((newTime) => {
      return liftWeights(newTime);
    })
    .then((newTime) => {
      console.log(`done working out with ${newTime / 1000} seconds left`);
    })
    .catch((err) => {
      console.log(err);
    });
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch

// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill

// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights

workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
