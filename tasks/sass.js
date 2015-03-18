module.exports = function(grunt) {
	grunt.config('sass', {
		options: {

		},
		// Dist
		dist: {
			options: {
			  style: 'compressed',
			  sourcemap: 'auto'
			},
			files: {
			  '<%= pkg.cssDir %>/screen-unprefix.css': '<%= pkg.scssDir %>/screen.scss'
			}
		},
		// Dev
		dev: {
			options: {
			  style: 'expanded',
			  sourcemap: 'auto'
			},
			files: {
			  '<%= pkg.cssDir %>/screen-unprefix.css': '<%= pkg.scssDir %>/screen.scss'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
};

