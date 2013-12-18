module("failed-test.js");
test("Calc plus failed test", function () {
	equal(1, 0);
});

test("Calc minus failed test", function () {
	equal(1, 2);
});
