"use strict";

var gulp = require ("gulp");
var less = require ("gulp-less");
var plumber = require ("gulp-plumber");  
var postcss = require ("gulp-postcss");
var html = require ("gulp-posthtml");
var include = require ("posthtml-include");
var run = require ("run-sequence");
var del = require ("del");
var webp = require ("gulp-webp");
var autoprefixer = require ("autoprefixer");
var imagemin = require ("gulp-imagemin");
var sprite = require ("gulp-svgstore");
var minify = require ("gulp-csso");
var rename = require ("gulp-rename");
var server = require ("browser-sync").create();       


gulp.task ("clean", function () {//плагин не нужен, clean обязателен
  return del("build");
});

gulp.task ("copy", function () {//плагин не нужен
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"              //Для копирования ПАПОК
     })
  .pipe(gulp.dest("build"));
}
);

gulp.task("style", function() {//Yes
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("sprite", function() {
   return gulp.src("source/img/icon-*.svg")
    .pipe(sprite({inlineSvg: true}))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task ("html", function (){
  return gulp.src("source/*.html")
  .pipe(html([include()]))
  .pipe(gulp.dest("build"));
});

gulp.task("webp", function() {
    return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("images", function() {
    return gulp.src("source/img/**/*.svg") 
        .pipe(imagemin([
            imagemin.optipng({optimizationlevel: 3}), 
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo()                           
        ]))
        .pipe(gulp.dest("source/img"));
});

gulp.task("serve", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html", ['html']); 
});





gulp.task('build', function (done) {
   run (
        'clean',
        'copy',
        'style',
        'sprite',
        'html',
         done
   );
});














