module("failed-test.js");
test("Calc plus failed test", function () {
	equal(Calc.plus(1000, 2), 3);
	equal(Calc.plus(2, 23423423), 3);
});

test("Calc minus failed test", function () {
	equal(Calc.minus(1000, 2), 3);
	equal(Calc.minus(2, 23423423), 3);
});
