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
                    src: './bower_components/angular/angular.js',
                    minSrc: './bower_components/angular/angular.min.js'
                },
                {
                    src: './bower_components/angular-scroll/angular-scroll.js',
                    minSrc: './bower_components/angular-scroll/angular-scroll.min.js'
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