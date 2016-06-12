module.exports = function($scope, $rootScope) {
    $scope.title = 'SKILLS';

    $scope.skills = [
        {
            title: 'Front-End',
            sub: [
                {
                    title: 'HTML5',
                    content: '熟悉',
                    tagClass: 'red'
                },
                {
                    title: 'SEO',
                    content: '熟悉，且知道如何優化效能',
                    tagClass: 'red'
                },
                {
                    title: 'RWD',
                    content: '還滿熟悉，個人偏好由小裝置為 base 開發到大裝置',
                    tagClass: 'red'
                },
                {
                    title: 'SASS/SCSS',
                    content: 'CSS3 開發必學，架構完善又清楚又速度快',
                    tagClass: 'yellow'
                },
                {
                    title: 'BootStrap',
                    content: '主要使用他的 Modal、Pane 居多，也經常使用 Font Awesome',
                    tagClass: 'yellow'
                },
                {
                    title: 'jQuery',
                    content: '前端必學，不解釋',
                    tagClass: 'indigo'
                },
                {
                    title: 'AngularJS 1.x',
                    content: '架構還算熟悉，使用 filter、directive、router 等具代表性的 Angular 招牌',
                    tagClass: 'indigo'
                },
                {
                    title: 'ReactJS',
                    content: '僅有簡單的開發經驗，雖可以 React 完成專案，但仍須大量上網 survey 協助',
                    tagClass: 'indigo'
                }
            ]
        },
        {
            title: 'Development Tools',
            sub: [
                {
                    title: 'MAC OS X',
                    content: '個人配備，MacBook Pro Retina, 13", Early 2015',
                    tagClass: 'orange'
                },
                {
                    title: 'IntelliJ IDEA',
                    content: '個人專屬的開發工具，功能具包含後台且強大，包含使用內建的 SVN、Git，都能完整使用',
                    tagClass: 'orange'
                },
                {
                    title: 'Atom',
                    content: '次要的開發工具，僅使用於小型的修改或閱讀用',
                    tagClass: 'orange'
                },
                {
                    title: 'Sketch',
                    content: '熟悉介面操作，主要用於排版居多',
                    tagClass: 'blue'
                },
                {
                    title: 'Photoshop',
                    content: '主要僅用於接收設計師網頁稿，並實作 HTML5 網頁；如專案有需求，會做 RWD',
                    tagClass: 'blue'
                }
            ]
        },
        {
            title: 'Project Manager Tools',
            sub: [
                {
                    title: 'Evernote',
                    content: '個人記事本，記錄自己一些系統的環境架設步驟，或功能操作步驟',
                    tagClass: 'green'
                },
                {
                    title: 'Trello',
                    content: '專案與時辰控管',
                    tagClass: 'green'
                },
                {
                    title: 'Slack',
                    content: '專案控管',
                    tagClass: 'green'
                },
                {
                    title: 'SVN',
                    content: '使用於以前公司專案版本控管，具備 Merge 衝突的技能',
                    tagClass: 'purple'
                },
                {
                    title: 'Git',
                    content: '個人使用的版本控管，具備 Merge 衝突的技能',
                    tagClass: 'purple'
                }
            ]
        },
        {
            title: 'System',
            sub: [
                {
                    title: 'Linux',
                    content: '會使用指令，安裝及架站能力',
                    tagClass: 'gray'
                },
                {
                    title: 'AWS',
                    content: '具備上架網站並上線的能力，會使用 S3 靜態頁面上線至 DNS，也會使用具後台的 EC2 上線',
                    tagClass: 'gray'
                },
                {
                    title: 'MAMP',
                    content: 'MAMP 就是 PC 的 Xampp，開啟 Apache 和 Nginx 之用途。主要用在某些 PHP 專案需要。',
                    tagClass: 'gray'
                }
            ]
        }
    ]
};