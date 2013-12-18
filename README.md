Author: Sy Le
Description: Integrate Qunit Testing into Jenkins CI with the use of PhantomJS, QUnit, TAP and JUnit XML

PhantomJS
http://phantomjs.org/

QUnit

QUnit Reporter JUnit
https://github.com/jquery/qunit-reporter-junit

Ant build
```
ant qunit
```

Generated Phantomjs shell
```
to generate junit xml
phantomjs runner.junit.xml.js index.html

to generate tap (test anything protocol)
phantomjs runner.tap.js index.html
```

Jenkins Pre-Build Config
```
ant job
qunit
```

Jenkins Post-Build Config
```
publish tap
test/output.tap

publish junit xml
test/output.xml
```

Sample Run
```
D:\Git\JenkinsQunit>ant qunit
Buildfile: D:\Git\JenkinsQunit\build.xml

qunit:
   [delete] Deleting: D:\Git\JenkinsQunit\test\output.xml
   [delete] Deleting: D:\Git\JenkinsQunit\test\output.tap
     [echo] File(s) to be tested: index.html
     [echo] Generate XML
[qunit tap] Result: 1
     [echo] Generate TAP
[qunit junit xml] Result: 1

BUILD FAILED
D:\Git\JenkinsQunit\build.xml:30: Qunit Test failed

Total time: 2 seconds
```

Sample TAP File
```
# module: Calc success test
# test: Calc.plus
ok 1
ok 2
ok 3
ok 4
# test: Calc minus
ok 5
ok 6
ok 7
ok 8
# test: Calc plus failed test
not ok 9 - expected: 0, got: 1, test: Calc plus failed test, module: Calc success test, source: at file:///D:/Git/JenkinsQunit/resource/qunit.js:556
#     at file:///D:/Git/JenkinsQunit/test/failed-test.js:3
#     at file:///D:/Git/JenkinsQunit/resource/qunit.js:203
#     at file:///D:/Git/JenkinsQunit/resource/qunit.js:361
#     at process (file:///D:/Git/JenkinsQunit/resource/qunit.js:1453)
#     at file:///D:/Git/JenkinsQunit/resource/qunit.js:479
# test: Calc minus failed test
not ok 10 - expected: 2, got: 1, test: Calc minus failed test, module: Calc success test, source: at file:///D:/Git/JenkinsQunit/resource/qunit.js:556
#     at file:///D:/Git/JenkinsQunit/test/failed-test.js:7
#     at file:///D:/Git/JenkinsQunit/resource/qunit.js:203
#     at file:///D:/Git/JenkinsQunit/resource/qunit.js:361
#     at process (file:///D:/Git/JenkinsQunit/resource/qunit.js:1453)
#     at file:///D:/Git/JenkinsQunit/resource/qunit.js:479
1..10
```

Sample JUnit XML File
```
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="file:///D:/Git/JenkinsQunit/index.html" hostname="localhost" tests="10" failures="2" errors="0" time="0.034" timestamp="2013-12-18T19:05:14Z">
<testsuite id="0" name="Calc success test" hostname="localhost" tests="10" failures="2" errors="0" time="0.006" timestamp="2013-12-18T19:05:14Z">
<testcase name="Calc.plus" tests="4" failures="0" errors="0" time="0.002" timestamp="2013-12-18T19:05:14Z">
</testcase>
<testcase name="Calc minus" tests="4" failures="0" errors="0" time="0" timestamp="2013-12-18T19:05:14Z">
</testcase>
<testcase name="Calc plus failed test" tests="1" failures="1" errors="0" time="0.002" timestamp="2013-12-18T19:05:14Z">
<failure type="AssertionFailedError" message="undefined" />
</testcase>
<testcase name="Calc minus failed test" tests="1" failures="1" errors="0" time="0.001" timestamp="2013-12-18T19:05:14Z">
<failure type="AssertionFailedError" message="undefined">
<actual value="1" /><expected value="2" />
</failure>
</testcase>
<system-out>
<![CDATA[
[Calc success test, Calc plus failed test, 1] undefined
[Calc success test, Calc minus failed test, 1] undefined
]]>
</system-out>
</testsuite>
</testsuites>

```