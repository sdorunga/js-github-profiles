module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ["Gruntfile.js", "src/**/*.js", "spec/**/*.js"] 
    },
    watch: {
      scripts: {
        files: ["Gruntfile.js", "src/**/*.js", "test/**/*.js"],
        tasks: ["jshint", "jasmine"]
      }
    }
  });  
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.registerTask("default", ["jshint"]);
};
