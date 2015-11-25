module.exports = function(grunt) {

  //configuraçao dos plugins
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      projeto: {
        expand: true,
        cwd:'',
        src:['**', '!**/node_modules/**', '!**/sass/**', '!package.json', '!Gruntfile.js', '!bower.json', '!prepros.cfg'],
        dest:'dist'
      }
    },

    clean: ['dist'],

    uglify: {
      main:{
        expand: true,
        cwd:'dist/',
        src: ['**/*.js'],
        dest: 'dist/'
      }
    },

    cssmin:{
      main:{
        expand: true,
        cwd:'dist/',
        src:['**/*.css'],
        dest: 'dist/'
      }
    }

  });

  //novas tasks
  grunt.registerTask('zera', ['clean', 'copy']);
  grunt.registerTask('minifica', ['uglify', 'cssmin']);


  //load
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');



}