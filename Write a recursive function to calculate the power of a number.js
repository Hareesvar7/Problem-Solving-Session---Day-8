function myPowerFunction(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	const result = 
		base * myPowerFunction(base, exponent - 1);
	return result;
}
const b = 2;
const e = 4;
console.log
	(`The recursively calculated value of ${b}^${e} is: ${myPowerFunction(b, e)}`);
