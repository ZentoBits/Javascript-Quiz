var needles = "*";
var spaces = "      ";
var height = 7;
var thing;

function treeForm() {
	
	for (i = 0; i < height; i += 1) {
		thing = spaces.slice(i);
		console.log(thing, needles);
		needles += "**";
	}
}

treeForm();