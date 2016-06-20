module.exports = function($scope, $rootScope) {
    $scope.title = 'SKILLS';

    $scope.skills = [
        {
            title: 'Front-End',
            sub: [
                {
                    title: 'HTML5',
                    content: '熟悉，且了解部分標籤對於 SEO 的影響'
                },
                {
                    title: 'SEO',
                    content: '熟悉'
                },
                {
                    title: 'RWD',
                    content: '熟悉，個人偏好由小裝置開發到大裝置'
                },
                {
                    title: 'SASS / SCSS',
                    content: 'CSS3 開發必學，架構完善又清楚，且開發速度快'
                },
                {
                    title: 'BootStrap',
                    content: '主要使用他的 Modal、Pane、Slider 居多，也經常使用 Font Awesome；網頁架構仍以自己刻居多'
                },
                {
                    title: 'jQuery',
                    content: '前端必學，不解釋'
                },
                {
                    title: 'AngularJS 1.x',
                    content: '善用其架構，常使用 filter、directive、router 等擴充 JavaScript 和 jQuery 不足的部分'
                }
            ]
        },
        {
            title: 'Development Tools',
            sub: [
                {
                    title: 'IntelliJ IDEA 2016.1',
                    content: '個人專屬的開發工具，功能具包含後台且強大，包含使用內建的 SVN、Git，都能完整使用'
                },
                {
                    title: 'Npm',
                    content: '管理所有前端套件以及安裝，開發人員必學項目'
                },
                {
                    title: 'Gulp',
                    content: '前端好用的自動化神器，個人要用在 SCSS 合併、即時偵測 .js、.css 的變動、彙整成一包靜態 HTML 網頁'
                },
                {
                    title: 'Bower',
                    content: '個人用於所有前端套件組合成一隻 .js 後匯入網頁中'
                }
            ]
        },
        {
            title: 'Project Manager Tools',
            sub: [
                {
                    title: 'Evernote',
                    content: '個人記事本，記錄一些系統的環境架設步驟，或功能操作步驟'
                },
                {
                    title: 'Trello',
                    content: '個人的專案與時辰控管'
                },
                {
                    title: 'Slack',
                    content: '與公司的專案控管'
                },
                {
                    title: 'SVN',
                    content: '使用於以前公司專案版本控管，具備 Merge 衝突的技能'
                },
                {
                    title: 'Git',
                    content: '個人使用的版本控管，具備 Merge 衝突的技能'
                }
            ]
        },
        {
            title: 'System',
            sub: [
                {
                    title: 'MAC OS X',
                    content: '個人開發設備，MacBook Pro Retina, 13", Early 2015'
                },
                {
                    title: 'Linux',
                    content: '會使用指令，安裝及架站能力'
                },
                {
                    title: 'AWS',
                    content: '具備上架網站並上線的能力，會使用 S3 靜態頁面上線至 DNS，也會使用具後台的 EC2 上線'
                },
                {
                    title: 'MAMP',
                    content: 'MAMP 就是 PC 的 Xampp，開啟 Apache 和 Nginx 之用途。主要用在某些 PHP 專案需要。'
                },
                {
                    title: 'Tomcat',
                    content: '以 Grails 和 Java 所匯出的 .war 檔，使用架在 Linux 內的 Tomcat 去啟動。'
                }
            ]
        }
    ]
};