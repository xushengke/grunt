module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSon('package.json'),
    concat : {
      dist: {
        src: [
          'js/my_modules/*.js',
          'js/main.js'
        ],
        dest: 'prod/production.js'
      }
    },

    uglify: {
      build : {
        src: 'prod/production.js',
        dest: 'prod/production.min.js'
      }
    },

    sass : {
      dist: {
        options : {
          style: 'compressed'
        },
        files : {
          'css/main.css' : 'sass/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'uglify']);//sass
};
