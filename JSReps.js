const lengths = (arr) => {
	lengthArr = [];
	for(let i = 0; i < arr.length; i++)
		lengthArr.push(arr[i].length);
	return lengthArr;
};

const transmogrifier = (num1, num2, num3) => {
	return Math.pow((num1 * num2), num3);
};

const toonify = (accent, sentence) => {
	if(accent ==='daffy')
		return sentence.split('s').join('th');
	if(accent === 'elmer')
		return sentence.split('r').join('w');
	else
		return sentence;
};

const wordReverse = (s) => {
	return s.split(' ').reverse().join(' ');
};

const letterReverse = (s) => {
	wordArr = s.split(' ');
	for(let i = 0; i < wordArr.length; i++)
		wordArr[i] = wordArr[i].split('').reverse().join('');
	return wordArr.join(' ');
};

const longest = (arr) => {
	let long = '';
	for(let i = 0; i < arr.length; i++){
		if(arr[i].length > long.length)
			long = arr[i];
	}
	return long;
};

const repMaster = (input, f) => {
	return f(input) + ' proves that I am the rep MASTER!!!!!!!';
};
