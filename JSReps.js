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

