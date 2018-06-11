const basic = require("tsa-basics").tiles;

class CooperativeSwitch extends basic.Space {
	constructor(x, y) {
		super(x, y);

		this.color = "#7777FF";
	}
}

class CooperativePuzzleWall extends basic.Wall {
	constructor(strengthNeeded, x, y) {
		super(x, y);

		this.color = "#9999FF";
		this.strengthNeeded = strengthNeeded;
	}

	collides(dir, pl, arenaMap) {
		return arenaMap.getMatchingTiles((item) => {
			if (item.constructor.name !== "Occupied") return false;
			return item.oldTile.constructor.name === "CooperativeSwitch";
		}).length < this.strengthNeeded;
	}

	toString() {
		return "Cooperative wall";
	}
}

module.exports = {
	tiles: {
		CooperativeSwitch,
		CooperativePuzzleWall,
	},
};