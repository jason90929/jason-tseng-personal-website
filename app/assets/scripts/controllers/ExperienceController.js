module.exports = function($scope, $rootScope) {
    $scope.title = 'EXPERIENCE';
    
    $scope.experience = [
        {
            name: 'Delta 台達電子',
            intro: '無 RWD 之教師備課系統，獨立完成靜態頁面，具客製化播放器、按鈕特效、拖拉上傳、班級即時排序演算法等功能；完成頁面後需拆成 PHP 並以 include 方式組合頁面。',
            duration: '2016.05 ~ Present',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SCSS / SASS']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA', 'PHP']
                },
                {
                    title: 'System',
                    tags: ['Gulp', 'Bower', 'NodeJS', 'MAMP']
                }
            ]
        },
        {
            name: 'My Wedding 我的婚禮網站',
            intro: '與其他 2 位前端工程師協同完成純靜態頁面。此專案除首頁外並無 RWD',
            duration: '2016.05',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SCSS / SASS']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA']
                },
                {
                    title: 'System',
                    tags: ['Gulp', 'Bower', 'NodeJS']
                }
            ]
        },
        {
            name: '遠傳 WebIWS 文字語音服務系統',
            intro: '主要內容以前端為主，針對功能客製化，串接 API 為主要項目',
            duration: '2016.03 ~ 2016.04',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'RequireJS', 'AngularJs']
                },
                {
                    title: 'Back-End',
                    tags: ['Java', 'Struts2', 'Hibernate']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA']
                },
                {
                    title: 'System',
                    tags: ['Maven']
                }
            ]
        },
        {
            name: '遠傳 ARAP 應收應付系統',
            intro: '協助開發，包含連動 Java、Struts2 架構的 Action 端，以完成畫面能夠實行 CRUD 為此專案主要目的。',
            duration: '2015.10 ~ 2016.02',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery']
                },
                {
                    title: 'Back-End',
                    tags: ['Java', 'Struts2', 'Hibernate']
                },
                {
                    title: 'Tools',
                    tags: ['Eclipse', 'iReport', 'DBVisualizer']
                },
                {
                    title: 'System',
                    tags: ['Maven', 'Tomcat', 'MySQL']
                }
            ]
        },
        {
            name: '良益電鑽纜木軸管理系統',
            intro: '前後端皆有接觸到，此專案以完成 ERP 所需要之功能為主',
            duration: '2015.02 ~ 2015.09',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AngularJS']
                },
                {
                    title: 'Back-End',
                    tags: ['Groovy', 'Grails']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA']
                },
                {
                    title: 'System',
                    tags: ['Linux', 'Tomcat', 'H2']
                }
            ]
        },
        {
            name: '優設網站創意平台',
            intro: '全端開發，具備使用者上傳作品（圖片），Facebook、Twitter 註冊和分享功能，並且具有加入收藏、追蹤、按讚、留言、回覆等功能',
            duration: '2015.05 ~ 2015.09',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AngularJS']
                },
                {
                    title: 'Back-End',
                    tags: ['Groovy', 'Grails']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA']
                },
                {
                    title: 'System',
                    tags: ['Linux', 'Tomcat', 'MongoDB']
                }
            ]
        },
        {
            name: '春秋資訊 CRM',
            intro: '維護案，協助修正 jQuery HighCharts 的 BUG',
            duration: '2014.12 ~ 2015.09',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AngularJS']
                },
                {
                    title: 'Back-End',
                    tags: ['Groovy', 'Grails', 'H2DB']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA', 'iReport']
                },
                {
                    title: 'System',
                    tags: ['Linux', 'Tomcat', 'H2']
                }
            ]
        },
        {
            name: '春天旅遊網站平台（網站＋後台）',
            intro: '全端開發，提供客戶端上傳自己的旅遊行程至後台網站，具附檔、CKEditor、匯率、上下架日期等功能',
            duration: '2014.12 ~ 2015.06',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AngularJS']
                },
                {
                    title: 'Back-End',
                    tags: ['Groovy', 'Grails', 'H2DB']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA']
                },
                {
                    title: 'System',
                    tags: ['Linux', 'Tomcat', 'H2']
                }
            ]
        },
        {
            name: '華江高中教科書系統',
            intro: '維護開發案，現有功能修正及改良，增加後台功能以供廠商端供書、學校端選書',
            duration: '2014.12 ~ 2015.06',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AngularJS']
                },
                {
                    title: 'Back-End',
                    tags: ['Groovy', 'Grails', 'H2DB']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA']
                },
                {
                    title: 'System',
                    tags: ['Linux', 'Tomcat', 'H2']
                }
            ]
        },
        {
            name: '愛台玩星級旅館 APP',
            intro: '協同開發，使用 Web 技術撰寫並以 Cordova 上架，具有二維條碼搜尋、抽獎、寄信、兌換券功能',
            duration: '2014.12 ~ 2015.06',
            detail: [
                {
                    title: 'Front-End',
                    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AngularJS', 'Ionic']
                },
                {
                    title: 'Back-End',
                    tags: ['NodeJS']
                },
                {
                    title: 'Tools',
                    tags: ['IntelliJ IDEA', 'Parse', 'Cloudinary', 'MailGun']
                },
                {
                    title: 'System',
                    tags: ['PhoneGap', 'Cordova']
                }
            ]
        }


    ];

    $scope.max = 2; // 顯示預設量

    $scope.showAll = function() {
        $scope.max = $scope.experience.length;
    };
};