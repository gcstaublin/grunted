module.exports = function(grunt) {
	var jsFiles = ['<%= pkg.jsDir %>/test.js', '<%= pkg.jsDir %>/test2.js'];

	grunt.config('uglify', {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			preserveComments: 'some'
		},
		// Dist
		dist: {
			options: {
				  preserveComments: 'some',
				  compress: {
				    drop_console: true
				  }
			},
			files: {
			   '<%= pkg.jsDir %>/site.js': jsFiles
			}
		},
		// Dev
		dev: {
			options: {
			  compress: false,
			  beautify: true,
			  mangle: false
			},
			files: {
			  '<%= pkg.jsDir %>/site.js': jsFiles
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
};



