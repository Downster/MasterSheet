function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function workout() {
  stretch()
    .then(() => {
      console.log("done stretching");
      return runOnTreadmill();
    })
    .then(() => {
      console.log("done running on treadmill");
      return liftWeights();
    })
    .then(() => {
      console.log("done lifting weights");
      console.log("done working out");
    });
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
