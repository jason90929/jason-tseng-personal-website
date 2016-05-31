module.exports = {
    bundle: {
        bundle: {
            // 需要手動增加後重新 gulp serve 才能匯入新的 library
            scripts: [
                {
                    src: './bower_components/jquery/dist/jquery.js',
                    minSrc: './bower_components/jquery/dist/jquery.min.js'
                },
                {
                    src: './bower_components/bootstrap/dist/js/bootstrap.js',
                    minSrc: './bower_components/bootstrap/dist/js/bootstrap.min.js'
                },
                {
                    src: './bower_components/angular/angular.js',
                    minSrc: './bower_components/angular/angular.min.js'
                },
                {
                    src: './bower_components/angular-route/angular-route.js',
                    minSrc: './bower_components/angular-route/angular-route.min.js'
                },
                {
                    src: './bower_components/angular-animate/angular-animate.js',
                    minSrc: './bower_components/angular-animate/angular-animate.min.js'
                }
            ],
            styles: [
                {
                    src: './bower_components/bootstrap/dist/css/bootstrap.css',
                    minSrc: './bower_components/bootstrap/dist/css/bootstrap.min.css'
                },
                {
                    src: './bower_components/font-awesome/css/font-awesome.css',
                    minSrc: './bower_components/font-awesome/css/font-awesome.min.css'
                }
            ],
            options: {
                rev: false,
                useMin: true,
                uglify: true,
                minCSS: true
            }
        }
    }
};