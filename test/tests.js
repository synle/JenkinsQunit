module("Calc success test");
test("Calc.plus", function () {
	equal(Calc.plus(1, 2), 3);
	equal(Calc.plus(-3, -5), -8);
	equal(Calc.plus(1, -10), -9);
	equal(Calc.plus(-8, 2), -6);
});

test("Calc minus", function () {
	equal(Calc.minus(1, 2), -1);
	equal(Calc.minus(-3, -5), 2);
	equal(Calc.minus(1, -10), 11);
	equal(Calc.minus(-8, 2), -10);
});
