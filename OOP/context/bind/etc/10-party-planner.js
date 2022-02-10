class PartyPlanner {
	constructor(guestList = []){
	this.guestList = guestList
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (!this.guestList.length){
			return `Gotta add people to the guest list`
		} else {
			return this.guestList.reduce((output, guest, i) => {
				if (i === 0){
					output += guest + ", "
				} else if(i === this.guestlist.length - 1){
					output += ` and ${guest}`
				}
				return output
			}, 'Welcome to the party ')
		}
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
