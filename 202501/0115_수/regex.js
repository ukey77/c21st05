const htmlStringArr = [
	`<body>`,
	`<h1>Welcome</h1>`,
	`<h2>2222</h2>`,
	`<h2>asdfasdf</h3>`
];

const regex = /<([hH][1-6])>.*?<\/\1>/;

const regexTest = (arr,regex) => {
	const result = arr.filter((value)=>{
		return regex.test(value);
	});

	return console.log(result);
}

regexTest(htmlStringArr,regex);