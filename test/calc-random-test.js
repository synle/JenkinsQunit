module("test.js");
test("Calc.plus", function () {
	for (var i = 0; i < 50; i++){
		var a = parseInt(Math.random() * 10000);
		var b = parseInt(Math.random() * 10000);
		equal(Calc.plus(a, b), a + b);
	}	
});

test("Calc minus", function () {
	for (var i = 0; i < 50; i++){
		var a = parseInt(Math.random() * 10000);
		var b = parseInt(Math.random() * 10000);
		equal(Calc.minus(a, b), a - b);
	}	
});
