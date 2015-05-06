/**
 * Created by GDU on 24/04/2015.
 */
angular.module('myApp').controller('CardController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.name = "CardController";
    $scope.params = $routeParams;
    $scope.title =  "CardController : gere les data de type 'carte' Magic au format JSON";
    $scope.data = {};

    function getExtensionUrl(currentExt) {
        var url = null;
        url = "./json/" + currentExt +".json";
        //console.log(url);
        return url;
    }
    getExtensionUrl( $scope.params.myExtension);

    var myExtCardsData = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': getExtensionUrl( $scope.params.myExtension),
            'dataType': "json",
            'success': function (data) {
                json = data.cards;
            }
        });
        return json;
    })();

    function convertManaStringToArray(manastring) {
        var toto = manastring.replace(/}/g, "}-");
        toto = toto.split('-');
        return toto;
    }

   // retrieve object in the array by its position from its name
    var elementPos = myExtCardsData.map(function(x) {return x.name; }).indexOf( $scope.params.myCard);
    var objectFound = myExtCardsData[elementPos];
    //console.log(objectFound);

    $scope.data.card = myExtCardsData[elementPos];
    //console.log($scope.data.card);


    $scope.showLayout = function (def) {
        return def.hasOwnProperty('layout')
    };
    $scope.showType = function (def) {
        return def.hasOwnProperty('type')
    };
    $scope.showTypes = function (def) {
        return def.hasOwnProperty('types')
    };
    $scope.showColors = function (def) {
        return def.hasOwnProperty('colors')
    };
    $scope.showMultiverseid = function (def) {
        return def.hasOwnProperty('multiverseid')
    };
    $scope.showName = function (def) {
        return def.hasOwnProperty('name')
    };
    $scope.showSubtypes = function (def) {
        return def.hasOwnProperty('subtypes')
    };
    $scope.showCmc= function (def) {
        return def.hasOwnProperty('cmc')
    };
    $scope.showRarity = function (def) {
        return def.hasOwnProperty('rarity')
    };
    $scope.showPower = function (def) {
        return def.hasOwnProperty('power')
    };
    $scope.showToughness = function (def) {
        return def.hasOwnProperty('toughness')
    };
    $scope.showManaCost = function (def) {
        return def.hasOwnProperty('manaCost')
    };
    $scope.showText = function (def) {
        return def.hasOwnProperty('text')
    };
    $scope.showNumber = function (def) {
        return def.hasOwnProperty('number')
    };
    $scope.showWatermark = function (def) {
        return def.hasOwnProperty('watermark')
    };
    $scope.showImageName = function (def) {
        return def.hasOwnProperty('imageName')
    };
    $scope.showArtist = function (def) {
        return def.hasOwnProperty('artist')
    };
    $scope.showFlavor = function (def) {
        return def.hasOwnProperty('flavor')
    };
    //var manademo ="{2}{W}{U}{B}";

    $scope.data.card.toMC_Array = convertManaStringToArray;//toto;//["{2}","{W}","{U}","{B}"];
    //console.log( $scope.data.card.manaCostArray)

    function getCssFromManasymbolTxt (elem){
        var cssClass = "ms ms-cost ms-shadow ";
        switch(elem)
        {
            case "{W}":
                cssClass += "ms-w";
                break;
            case "{U}":
                cssClass += "ms-u";
                break;
            case "{B}":
                cssClass += "ms-b";
                break;
            case "{R}":
                cssClass += "ms-r";
                break;
            case "{G}":
                cssClass += "ms-g";
                break;
            case "{0}":
                cssClass += "ms-0";
                break;
            case "{1}":
                cssClass += "ms-1";
                break;
            case "{2}":
                cssClass += "ms-2";
                break;
            case "{3}":
                cssClass += "ms-3";
                break;
            case "{4}":
                cssClass += "ms-4";
                break;
            case "{5}":
                cssClass += "ms-5";
                break;
            case "{6}":
                cssClass += "ms-6";
                break;
            case "{7}":
                cssClass += "ms-7";
                break;
            case "{8":
                cssClass += "ms-8";
                break;
            case "{9}":
                cssClass += "ms-9";
                break;
            case "{10}":
                cssClass += "ms-10";
                break;
            case "{11}":
                cssClass += "ms-11";
                break;
            case "{12}":
                cssClass += "ms-12";
                break;
            case "{13}":
                cssClass += "ms-13";
                break;
            case "{14}":
                cssClass += "ms-14";
                break;
            case "{15}":
                cssClass += "ms-15";
                break;
            case "{X}":
                cssClass += "ms-x";
                break;
            case "{Y}":
                cssClass += "ms-y";
                break;
            case "{Z}":
                cssClass += "ms-z";
                break;
            default:
                cssClass="";
                break;
        }
        return cssClass;
    }
    function createManaSybols (élément,index){
        var css = getCssFromManasymbolTxt(élément);
        console.log("css[" + index + "] = " + css);
    }

    function logArrayElements(élément, index, array) {
        console.log("a[" + index + "] = " + élément);
    }
    //convertManaStringToArray(manademo).forEach(logArrayElements);
    //convertManaStringToArray(manademo).forEach(createManaSybols)
    $scope.getCssFromManasymbolTxt = getCssFromManasymbolTxt;

}]);