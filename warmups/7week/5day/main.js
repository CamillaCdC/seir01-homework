const replacing = function (input) {
	const parts = input.split(', ').map(function (p) {
		return p.replace(/'/g, '');
	});
	let sentence = parts[0];
	const rules = parts.slice(1);
	const toReplace = [];

	rules.forEach((r) => {
		const rep = new RegExp(r.split(',')[0], 'g');
		let search = true;
		while (search) {
			search = rep.exec(sentence);
			if (search) {
				toReplace.push({
					place: search.index,
					replacement: r.split(',')[1],
				});
			} else {
				search = false;
			}
		}
	});

	toReplace.forEach(function (rule) {
		console.log(rule);
		sentence =
			sentence.substr(0, rule.place) +
			rule.replacement +
			sentence.substr(rule.place + 1);
	});

	return sentence;
};

console.log(replacing("'The quick brown fox', 'o,$'"));
console.log(replacing("'quick', 'q,k' 'k,4'"));
f;
