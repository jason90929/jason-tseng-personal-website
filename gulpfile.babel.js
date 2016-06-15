import gulp from 'gulp';
var gulpsync = require('gulp-sync')(gulp);
// import gulpsync from 'gulp-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import mainBowerFiles from 'main-bower-files';
import sass from 'gulp-ruby-sass';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import minifyCSS  from 'gulp-minify-css';
import bundle from 'gulp-bundle-assets';
import rimraf from 'gulp-rimraf';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import htmlmin from 'gulp-htmlmin';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('watch', ['browserify', 'scss', 'fonts', 'images', 'html'], () => {
    gulp.watch('app/assets/scripts/**', ['browserify']);
    gulp.watch('app/assets/styles/**', ['scss']);
    gulp.watch('app/assets/fonts/**', ['fonts']);
    gulp.watch('app/assets/images/**', ['images']);
    gulp.watch('app/*.html', ['html']);
});

gulp.task('connect', () => {
    browserSync({
        notify: false,
        port: 8099,
        server: {
            'baseDir': "./public"
        }
    });
});

gulp.task('browserify', () => {
    return browserify('app/assets/scripts/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe($.babel()) // ES6
        .pipe(uglify()) // now gulp-uglify works
        .pipe(gulp.dest('./public/assets'))
        .pipe(reload({stream: true}));
});

gulp.task('scss', () => {
    return sass('app/assets/styles/*.scss')
        .pipe(minifyCSS({
            keepBreaks: false
        }))
        .pipe(gulp.dest('./public/assets'))
        .pipe(reload({stream: true}));
});

gulp.task('fonts', () => {
    return gulp.src(mainBowerFiles('app/assets/fonts/*.{eot,svg,ttf,woff,woff2}', function (err) {})
        .concat('app/assets/fonts/**/*'))
        .pipe(gulp.dest('public/assets/fonts'))
        .pipe(reload({stream: true}));
});

gulp.task('images', () => {
    return gulp.src(mainBowerFiles('app/assets/images/*.{jpg,jpeg,png,svg}', function (err) {})
        .concat('app/assets/images/**/*'))
        .pipe(gulp.dest('public/assets/images'))
        .pipe(reload({stream: true}));
});

gulp.task('html', () => {
    return gulp.src(mainBowerFiles('app/*.html', function (err) {})
        .concat('app/*'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'))
        .pipe(reload({stream: true}));
});

gulp.task('bundle', () => {
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest("./public/assets/bundle"))
        .pipe(reload({stream: true}));
});

gulp.task('clean', () => {
    return gulp.src('./public', { read: false })
        .pipe(rimraf());
});

gulp.task('build', gulpsync.sync([
    'clean', 'bundle',
    ['browserify', 'scss', 'fonts', 'images', 'html']
]));

gulp.task('serve', gulpsync.sync([
    'build', 'connect', 'watch'
]));

gulp.task('default', ['build']);
