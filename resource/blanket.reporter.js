(function () {
	blanket.customReporter = function (coverageData) {
		var packages = coverageData.files;
		var stat_total = 0,
		stat_hit = 0,
		stat_ratio = 0,
		stat_percent = 0,
		totalPkg = 0;

		var xml = '';

		for (var k in packages) {
			if (typeof k != 'undefined') {
				var pkg = packages[k];

				var hit = 0,
				total = 0,
				ratio = 1;
				for (var l in pkg) {
					if (parseInt(l) > 0) {
						if (pkg[l] !== 0)
							hit++;
						total++;
					}
				}

				//hit rate
				ratio = hit / total;

				//update total
				stat_hit += hit;
				stat_total += total;
				stat_ratio += ratio;
				totalPkg++;
			}
		}

		stat_percent *= 10;
		xml += '<!--EMMA v2.0.4015 (stable) report, generated Sat May 15 12:02:28 CDT 2004 --><report><stats><packages value="' + totalPkg + '"/><classes value="' + totalPkg + '"/><methods value="1"/><srcfiles value="' + totalPkg + '"/><srclines value="' + stat_total + '"/></stats><data><all name="all classes"><coverage type="class, %" value="100% (1/1)"/><coverage type="method, %" value="100% (1/1)"/><coverage type="block, %" value="100% (1/1)"/><coverage type="line, %" value="' + stat_percent + '% (' + stat_hit + '/' + stat_total + ')"/>';

		for (var k in packages) {
			if (typeof k != 'undefined') {
				var pkg = packages[k];

				var hit = 0,
				total = 0,
				ratio = 1;
				for (var l in pkg) {
					if (parseInt(l) > 0) {
						if (pkg[l] !== 0)
							hit++;
						total++;
					}
				}

				//hit rate
				ratio = hit / total;

				var percent = ratio * 100;

				xml += '<package name="' + k + '">';
				xml += '<coverage type="class, %" value="100% (1/1)"/>';
				xml += '<coverage type="method, %" value="100% (1/1)"/>';
				xml += '<coverage type="block, %" value="100% (1/1)"/>';
				xml += '<coverage type="line, %" value="' + percent + '% (' + hit + '/' + total + ')"/>';
				xml += '</package>';
			}
		}

		xml += '</all>';
		xml += '</data>';
		xml += '</report>';
		
		console.log(xml);
	}
})();
