'use strict';

module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    
    // Task configuration.
	
	concat:{ 
		strutura: {
			src:['assets/js/src/**/*.js'],
			dest:'assets/js/scripts.js'
			},
			
		bootstrap: {
			src:['bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/*.js'],
			dest: 'assets/js/bootstrap.js'
			}
	},
	
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['holder.js']
      }
    },
    uglify: {
		all: {
			files: {
				'assets/js/scripts.min.js': ['assets/js/scripts.js'],
				'assets/js/bootstrap.min.js': ['assets/js/boostrap.js']
			}
		}
    },
	
	sass: {
		strutura: {
			files: {
					'assets/css/style.css': 'assets/css/sass/style.scss'
				}
		},
		
		bootstrap: {
			 files: {
					'assets/css/bootstrap.css': 'bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap/bootstrap.scss'
				}	
		},
		
		options: {
			 style:'expanded'
			}
		
	},
	
	cssmin: {
		minify: {
			expand: true,
			cwd: 'assets/css/',
			src: ['style.css','bootstrap.css'],
			dest: 'assets/css/',
			ext: '.min.css'
		}	
	},
	
	watch: {
		strutura: {
			files: 'assets/css/**/*.scss',
			tasks: ['sass','cssmin']	
		},
		
		bootstrap: {
			files:'bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap/**/*.scss',
			tasks: ['sass','cssmin']
			
		},
		
		scripts: {
			files:['assets/js/src/**/*.js','bower_components/bootstrap-sass-official/assets/javascript/bootstrap/**/*.js'],
			tasks: ['concat','jshint','uglify']	
		}
	}
	
	
	
  });


};