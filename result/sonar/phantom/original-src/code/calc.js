/*
	sample calculate util used for testing,
	
	this calculate will failed when either number is greater than 1000
*/
var Calc = {
	plus : function (a, b) {
		if (a > 1000 || b > 1000)
			throw 'Calc.plus does not supported number greater than 1000';
			
		//sample code block that will never be covered
		if (false == true){
			var res = a + b + b + a;
			return a + b + b + a;
		}
		return a + b;
	},
	minus : function (a, b) {
		if (a > 1000 || b > 1000)
			throw 'Calc.minus does not supported number greater than 1000';
		return a - b;
	}
}
