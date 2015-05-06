/**
 * Created by GDU on 24/04/2015.
 */
angular.module('myApp').controller('SharedDataController', ['$scope', '$http', function($scope, $http){
    var jsonMenus = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./json/menus.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

    $scope.shareddata = {};
    $scope.shareddata.menus = jsonMenus ;
    $scope.shareddata.footeritems = [
        {
            "id"    :   "1",
            "title" :   "section_footer1",
            "link"  :   "Card/section_footer1"
        },
        {
            "id"    :   "2",
            "title" :   "section_footer2",
            "link"  :   "Extension/zsa"
        },
        {
            "id"    :   "3",
            "title" :   "section_footer3",
            "link"  :   "definitions/eger"
        }
    ];
    $scope.shareddata.dpmenus = [
        {
            "title" :   "Extension",
            "link"  :   "Extension",
            "submenus":  [
                {
                    "type"  :  "header",
                    "title" :   "Commander"
                },
                {
                    "title" :   "C14",
                    "link"  :   "Extension/C14"
                },
                {
                    "type"  :  "header",
                    "title" :   "DuelDeck"
                },
                {
                    "title" :   "DD3_DVD",
                    "link"  :   "Extension/DD3_DVD"
                },
                {
                    "title" :   "DD3_EVG",
                    "link"  :   "Extension/DD3_EVG"
                },
                {
                    "title" :   "DD3_GVL",
                    "link"  :   "Extension/DD3_GVL"
                },
                {
                    "title" :   "DD3_JVC",
                    "link"  :   "Extension/DD3_JVC"
                },
                {
                    "type"  :  "divider",
                    "title" :   "divider"
                },
                {
                    "title" :   "DDN",
                    "link"  :   "Extension/DDN"
                },
                {
                    "title" :   "DDO",
                    "link"  :   "Extension/DDO"
                },
                {
                    "title" :   "DTK",
                    "link"  :   "Extension/DTK"
                },
                {
                    "title" :   "FRF",
                    "link"  :   "Extension/FRF"
                },
                {
                    "title" :   "FRF_UGIN",
                    "link"  :   "Extension/FRF_UGIN"
                },
                {
                    "title" :   "KTK",
                    "link"  :   "Extension/KTK"
                },
                {
                    "title" :   "M15",
                    "link"  :   "Extension/M15"
                },
                {
                    "title" :   "TPR",
                    "link"  :   "Extension/TPR"
                },
                {
                    "title" :   "V14",
                    "link"  :   "Extension/V14"
                }
            ]
        }
    ];
    $scope.shareddata.imgs = [
        {
            "name" :   "MMS",
            "path" :   "./img/service-icon/man337.png"
        },
        {
            "name" :   "MPOS",
            "path" :   "./img/service-icon/hand103.png"
        },
        {
            "name" :   "Terminal",
            "path" :   "./img/service-icon/terminal8.png"
        },
        {
            "name" :   "BO (BackOffice)",
            "path" :   "./img/service-icon/servers1.png"
        },
        {
            "name" :   "Retail",
            "path" :   "./img/service-icon/shopping159.png"
        },
        {
            "name" :   "eCommmerce",
            "path" :   "./img/service-icon/businessman120.png"
        },
        {
            "name" :   "CP",
            "path" :   "./img/service-icon/credit31.png"
        }
    ];
    $scope.shareddata.imgs.icon ="./img/ico/Mtg.ico" ;
    $scope.shareddata.imgs.logo = "./img/mtg-logo.png" ;
    $scope.shareddata.imgs.footer = "./img/mtg-logo.png" ;

    $scope.shareddata.imgs.slides = {};
    $scope.shareddata.imgs.slides = [
        {
            "idx"       :   "1",
            "img"       :   "./img/homepage-slider/slide_TAPS_SAPS_MPOS.png",
            "title"     :   "Architecture solution TAPS/SAPS [MPOS]",
            "subtitle"   :   "Architecture solution TAPS/SAPS [MPOS] propose differents services \
                    Architecture solution TAPS/SAPS [MPOS]Architecture solution TAPS/SAPS [MPOS].",
            "bg_class"  : "bg1"
        },
        {
            "idx"       :   "2",
            "img"       :   "./img/terminaux/magic_x_series_1_225x225.png",
            "title"     :   "terminaux",
            "subtitle"   :  "Architecture solution TAPS/SAPS [MPOS] \
							terminaux terminaux)\
							terminaux	terminaux\
							terminaux terminaux.",
            "bg_class"  : "bg2"
        }
    ];

    $scope.showMenudropdown = function (item) {
        return item.hasOwnProperty('drop')
    };

    $scope.isDivider = function (item) {
        var ret = false;
        if (item.hasOwnProperty('type'))
            if (item.type === "divider")
                ret=true;
        return ret;
    };
    $scope.getClassOf = function (item) {
        var myclass = "";
        if (item.hasOwnProperty('type'))
            if (item.type === "divider")
                myclass="divider";
        if (item.type === "header")
            myclass="dropdown-header";
        return myclass;
    };
    /*
     new Array;
     var idxImg=1;
     var oNewSlide={}; oNewSlide.idx = idxImg++;
     oNewSlide.img =  "./img/homepage-slider/slide_ArchiMPOS.png";
     oNewSlide.title = "slide 1";
     oNewSlide.content = "DermaLASER propose differents services de traitement LASER \
     ( Epilation définitive,	Taches pigmentaires, Photo rajeunissement...) ainsi que d'injections.";
     oNewSlide.bg_class = "bg1";
     $scope.shareddata.imgs.Slides.push(oNewSlide);
     delete oNewSlide;
     var oNewSlide={}; oNewSlide.idx = idxImg++;
     oNewSlide.img = "./img/homepage-slider/slide_TAPS_SAPS_MPOS.png";
     oNewSlide.title = "Slide2";
     oNewSlide.content = "Tous les soins sont pratiqués à l'aide d'une machine de dernière génération(Classe 4) \
     permettant de traiter tous les types de peau (y compris bronzées, métisses ou noires)\
     offrant	une efficacité maximale en réduisant le nombre\
     totale de séances (5 à 7 aujourd’hui pour 10 à 12 avec des machines plus anciennes).";
     oNewSlide.bg_class = "bg2";
     $scope.shareddata.imgs.Slides.push(oNewSlide); oNewSlide.idx = idxImg++;
     delete oNewSlide;
     var oNewSlide={}; oNewSlide.idx = idxImg++;
     oNewSlide.img = "./img/terminaux/magic_x_series_1_225x225.png";
     oNewSlide.title = "Slide 3";
     oNewSlide.content = "Tous les produits utilisés sont des produits de très haute performance, offrant une sécurité\
     absolue et une parfaite stabilité dans le temps, et ce par un praticien expérimenté.";
     oNewSlide.bg_class = "bg3";
     $scope.shareddata.imgs.Slides.push(oNewSlide);
     delete oNewSlide;*/
    /*
     $scope.shareddata.slides = [
     {
     "img": "./img/homepage-slider/slide_ArchiMPOS.png",
     "title": "slide 1"
     },
     {
     "img": "./img/homepage-slider/slide_TAPS_SAPS_MPOS.png",
     "title": "slide 2"
     },
     {
     "img": "./img/terminaux/magic_x_series_1_225x225.png",
     "title": "slide 3"
     }
     ]*/
}]);
