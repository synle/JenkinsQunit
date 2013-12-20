/*
	sample calculate util used for testing,
	
	this calculate will failed when either number is greater than 1000
*/
var Calc = {
	plus : function (a, b) {
		if (a > 1000 || b > 1000)
			return 'Calc.plus does not support operand > 1000, a = ' + a + ', b = ' + b;
			
		//sample code block that will never be covered
		if (false == true){
			var res = a + b + b + a;
			return a + b + b + a;
		}
		return a + b;
	},
	minus : function (a, b) {
		if (a > 1000 || b > 1000)
			return  'Calc.minus does not support operand > 1000, a = ' + a + ', b = ' + b;
		return a - b;
	}
}
