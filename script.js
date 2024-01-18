function convertToRoman(num) {
  	const obj = {
      0:['M',1000],
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
	let numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
	let symbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
	let ans = "";
	while(num > 0) {
		let i = 0;
		while(num <= numbers[i] && i < numbers.length) {
			i++;
		}
		ans += symbols[i - 1];
	}
	return ans;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
