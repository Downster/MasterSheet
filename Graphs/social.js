// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.followers = {};
    this.currentID = 0;
  }
  addUser(name) {
    this.currentID++;
    this.users[this.currentID] = { id: this.currentID, name: name }
    this.follows[this.currentID] = new Set();
    this.followers[this.currentID] = new Set();
    return this.currentID;
  }
  getUser(userID) {
    for (userID in this.users) {
      return this.users[userID];
    }
    return null;
  }
  follow(userID1, userID2) {
    if (userID1 in this.users && userID2 in this.users) {
      this.follows[userID1].add(userID2);
      this.followers[userID2].add(userID1);
      return true;
    }
    return false;
  }
  getFollows(userID) {
    return this.follows[userID];
  }
  getFollowers(userID) {
    return this.followers[userID];
  }
  getRecommendedFollows(userID, degrees) {
    const followerArr = Array.from(this.follows[userID]);
    //create followerArray
    let follower = followerArr.shift();
    //taking the first Follower
    const queue = [follower];
    //put that follower in the queue
    const result = [];
    //declare empty result
    const visited = {};
    //declare visitation record
    let count = degrees;
    //count equals degrees
    let currentVertex;
    //delcare current verter
    //multiple neighbors check
    visited[userID] = true;
    //oringal user is omitted
    visited[follower] = true;
    //follower is omitted

    while (queue.length) {
      //get the first follower on first case we are getting 2
      currentVertex = queue.shift();

      //check the follows of the currentVertex, if they aren't visited add them to result
      this.follows[currentVertex].forEach(fol => {
        if (!visited[fol]) {
          result.push(fol);
        }
      });
      count--;
      //decrement count
      //add all of the followers to the queue
      this.follows[currentVertex].forEach(neighbor => {
        //if the follower has not been visited
        if (!visited[neighbor]) {
          //create a new visitation record
          visited[neighbor] = true;
          //if the count does not equal 0, add the neighbor to the queue
          if (count !== 0) {
            queue.push(neighbor);
          }
        }
      });

    }
    //return the result
    return result;
  }
}

module.exports = SocialNetwork;
