module.exports = function(grunt) {
	//Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/**\n * 农历（阴历）万年历\n * LunarCalendar；NPM NAME:<%= pkg.name %>\n * vervison : v<%= pkg.version %>\n * Github : https://github.com/zzyss86/LunarCalendar\n * HomePage : http://www.tuijs.com/\n * Author : JasonZhou\n * Email : zzyss86@qq.com\n */\n'
			},
			build: {
				src: 'lib/LunarCalendar.js',
				dest: 'lib/LunarCalendar.min.js'
			}
		}
	});

	// 加载包含 "uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 默认被执行的任务列表。
	grunt.registerTask('default', ['uglify']);
};