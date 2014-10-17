var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor (inStr) {
	// body...
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], "****");
	};
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], "****");
	};
	return inStr;
}
function addCensoredWords (word) {
	// body...
	customCensoredWords.push(word);
}
function getCensoredWords () {
	// body...
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censore;
exports/addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;
