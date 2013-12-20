Author: Sy Le
Description: Integrate Qunit Testing into Jenkins CI with the use of PhantomJS, QUnit, TAP and JUnit XML

PhantomJS
http://phantomjs.org/

QUnit

QUnit Reporter JUnit
https://github.com/jquery/qunit-reporter-junit



```
ant test -DTEST_HTML_FILES=index.html -DOUTPUT=result
java -jar resource/JSCover-all.jar -ws --document-root=. --no-instrument=resource --no-instrument=test --port=8081
java -jar resource/JSCover-all.jar jscover.report.Main --format=LCOV report/sonar report/sonar
```

java -cp resource/JSCover-all.jar jscover.report.Main --format=LCOV result/sonar/phantom result/sonar/phantom