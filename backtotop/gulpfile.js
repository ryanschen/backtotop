var gulp = require('gulp');
var uglify = require('gulp-uglify');//压缩js
var concat = require('gulp-concat');//合并

var less = require('gulp-less');//编译less
var cssmin = require('gulp-cssmin');//压缩css
var autoprefixer = require('gulp-autoprefixer');//css自动添加浏览器前缀
var rev = require('gulp-rev');//添加版本号

var revCollector = require('gulp-rev-collector');//html中新文件名替换旧文件名

gulp.task('js', function(){
	gulp.src('./WebContent/js/*.js')
		//.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./WebContent/js/dist'))
});

gulp.task('less', function(){
	gulp.src('./WebContent/less/*.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(autoprefixer())//css自动添加浏览器前缀
		.pipe(rev())//添加版本号
		.pipe(gulp.dest('./WebContent/css/'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./WebContent/css/'));
});

gulp.task('rev', function(){
	gulp.src(['./WebContent/css/*.json', './WebContent/index.html'], {base: './WebContent'})
		.pipe(revCollector())
		.pipe(gulp.dest('./WebContent'));
});