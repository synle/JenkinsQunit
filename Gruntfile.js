module.exports = function(grunt) {
	// Project configuration.
grunt.initConfig({
  qunit: {
    all: ['index.html']
  }
});

	// This plugin provides the "connect" task.
grunt.loadNpmTasks('grunt-contrib-qunit');
}