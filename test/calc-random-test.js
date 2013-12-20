module("test.js");
var max = 1050, tries = 5;
test("Calc.plus", function () {
	for (var i = 0; i < tries; i++){
		var a = parseInt(Math.random() * max);
		var b = parseInt(Math.random() * max);

		console.log('add', a, b);
		equal(Calc.plus(a, b), a + b);
	}	
});

test("Calc minus", function () {
	for (var i = 0; i < tries; i++){
		var a = parseInt(Math.random() * max);
		var b = parseInt(Math.random() * max);

		console.log('minus', a, b);
		equal(Calc.minus(a, b), a - b);
	}	
});
