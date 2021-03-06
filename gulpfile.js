var gulp = require("gulp");
var less = require("gulp-less");
var pug = require("gulp-pug");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker ({
          sort: true
      })
  ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"));
});
 
gulp.task("pug", function buildHTML() {
  return gulp.src("pug/*.pug")
      .pipe(plumber())
      .pipe(pug({pretty: true}))
      .pipe( gulp.dest("")); 
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
      .pipe(imagemin([
          imagemin.optipng({optimizationLevel: 3}),
          imagemin.jpegtran({progressive: true})
  ]))
      .pipe(gulp.dest("img")); 
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
      .pipe(imagemin([
          imagemin.optipng({optimizationLevel: 3}),
          imagemin.jpegtran({progressive: true})
  ]))
      .pipe(gulp.dest("img")); 
});

gulp.task("symbols", function() {
    return gulp.src("img/icons/*.svg")
        .pipe(svgmin())
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("symbols.svg"))
        .pipe(gulp.dest("img"));
});


gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/*.less", ["style"]);
  gulp.watch("less/*/*.less", ["style"]);
  gulp.watch("pug/**/*.pug", ["pug"]);
  gulp.watch("*.html").on("change", server.reload);
});