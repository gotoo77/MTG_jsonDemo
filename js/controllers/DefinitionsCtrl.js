/**
 * Created by GDU on 24/04/2015.
 */

angular.module('myApp').controller('DefinitionsCtrl', ['$scope', '$sce', '$http', function($scope,$sce,$routeParams){
//myApp.controller('DefinitionsCtrl', function ($scope,$sce,$routeParams) {
    $scope.name = "DefinitionsCtrl";
    $scope.params = $routeParams;

    $scope.renderHtml = function(html_code)
    {
        return $sce.trustAsHtml(html_code);
    };

    $scope.tags =
        [
            "",
            "Architecture",
            "Chiffrement",
            "EMV",
            "TPE",
            "Monétique",
            "MPOS",
            "General",
            "Standard",
            "Sécurité"
        ];

    $scope.oneAtATime = true;

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.myInterval = 2000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }

    $scope.users = {};
    $scope.users = [{
        "name": "GDU",
        "avatarFileName": "./img/users/GDU.jpg"
    },
        {
            "name": "RDE",
            "avatarFileName": "./img/users/RDE.png"
        },
        {
            "name": "TOTO",
            "avatarFileName": "./img/users/TOTO.gif"
        }
    ];

    $scope.showCreatedBy = function (def) {
        return def.hasOwnProperty('createdBy')
    };
    $scope.showContent = function (def) {
        return def.hasOwnProperty('content')
    };
    $scope.showLinks = function (def) {
        return def.hasOwnProperty('links')
    };
    $scope.showImgs = function (def) {
        return def.hasOwnProperty('imgs')
    };
    $scope.showMeaning = function (def) {
        return def.hasOwnProperty('meaning')
    };
    $scope.showTags = function (def) {
        return def.hasOwnProperty('tags')
    };

    $scope.title =  "DEFINITIONS & REGLES";

    $scope.data = {};
    $scope.data.definitions = [
        {
            "open": false,
            "tags":["Zone","General"],
            "title": "400. Zone",
            "meaning": " A zone is a place where objects can be during a game",
            "content":
                "<p>"
                +
                "400.1. A zone is a place where objects can be during a game. There are normally seven zones: library, hand, battlefield, graveyard, stack, exile, and command. Some older cards also use the ante zone. Each player has his or her own library, hand, and graveyard. The other zones are shared by all players.\
                400.2. Public zones are zones in which all players can see the cards’ faces, except for those cards that some rule or effect specifically allow to be face down. Graveyard, battlefield, stack, exile, ante, and command are public zones. Hidden zones are zones in which not all players can be expected to see the cards’ faces. Library and hand are hidden zones, even if all the cards in one such zone happen to be revealed.\
                400.3. If an object would go to any library, graveyard, or hand other than its owner’s, it goes to its owner’s corresponding zone.\
                400.4. Cards with certain card types can’t enter certain zones.\
                400.4a If an instant or sorcery card would enter the battlefield, it remains in its previous zone.\
                400.4b If a plane, phenomenon, vanguard, or scheme card would leave the command zone, it remains in the command zone.\
                400.5. The order of objects in a library, in a graveyard, or on the stack can’t be changed except when effects or rules allow it. The same is true for objects arranged in face-down piles in other zones. Other objects in other zones can be arranged however their owners wish, although who controls those objects, whether they’re tapped or flipped, and what other objects are attached to them must remain clear to all players.\
                400.6. If an object would move from one zone to another, determine what event is moving the object. If the object is moving to a public zone, all players look at it to see if it has any abilities that would affect the move. Then any appropriate replacement effects, whether they come from that object or from elsewhere, are applied to that event. If any effects or rules try to do two or more contradictory or mutually exclusive things to a particular object, that object’s controller—or its owner if it has no controller—chooses which effect to apply, and what that effect does. (Note that multiple instances of the same thing may be mutually exclusive; for example, two simultaneous “destroy” effects.) Then the event moves the object.\
                400.7. An object that moves from one zone to another becomes a new object with no memory of, or relation to, its previous existence. There are seven exceptions to this rule:\
                    400.7a Effects from spells, activated abilities, and triggered abilities that change the characteristics of a permanent spell on the stack continue to apply to the permanent that spell becomes.\
                400.7b Prevention effects that apply to damage from a permanent spell on the stack continue to apply to damage from the permanent that spell becomes.\
                400.7c If an ability of a permanent requires information about choices made as that permanent was cast as a spell, including what mana was spent to cast that spell, it uses information about the spell that became that permanent as it resolved.\
                400.7d Abilities that trigger when an object moves from one zone to another (for example, “When Rancor is put into a graveyard from the battlefield”) can find the new object that it became in the zone it moved to when the ability triggered, if that zone is a public zone.\
                400.7e Abilities of Auras that trigger when the enchanted permanent leaves the battlefield can find the new object that Aura became in its owner’s graveyard if it was put into that graveyard at the same time the enchanted permanent left the battlefield. It can also find the new object that Aura became in its owner’s graveyard as a result of being put there as a state-based action for not being attached to a permanent. (See rule 704.5n.)\
                400.7f If an effect grants a nonland card an ability that allows it to be cast, that ability will continue to apply to the new object that card became after it moved to the stack as a result of being cast this way.\
                400.7g A resolving spell or activated ability can perform actions on an object that moved from one zone to another while that spell was being cast or that ability was being activated, if that object moved to a public zone.\
                400.8. If an object in the exile zone is exiled, it doesn’t change zones, but it becomes a new object that has just been exiled.\
                400.9. If a face-up object in the command zone is turned face down, it becomes a new object.\
                400.10. An object is outside the game if it isn’t in any of the game’s zones. Outside the game is not a zone.\
                400.10a Cards in a player’s sideboard are outside the game. See rule 100.4.\
                400.10b Some effects bring cards into a game from outside of it. Those cards remain in the game until it ends.\
                400.10c Cards outside the game can’t be affected by spells or abilities, except for characteristic-defining abilities printed on them (see rule 604.3) and spells and abilities that allow those cards to be brought into the game.\
                400.11. Some effects instruct a player to do something to a zone (such as “Shuffle your hand into your library”). That action is performed on all cards in that zone. The zone itself is not affected."+
                "</p>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)]
        },
        {
            "open": false,
            "tags":["Library","General","Zone"],
            "title": "401. Library",
            "meaning": "When a game begins, each player’s deck becomes his or her library",
            "content":
            "<p>"
            +
            "401.1. When a game begins, each player’s deck becomes his or her library.\
            401.2. Each library must be kept in a single face-down pile. Players can’t look at or change the order of cards in a library.\
            401.3. Any player may count the number of cards remaining in any player’s library at any time.\
            401.4. If an effect puts two or more cards on the top or bottom of a library at the same time, the owner of those cards may arrange them in any order. That library’s owner doesn’t reveal the order in which the cards go into his or her library.\
            401.5. If a spell or ability causes a card to be drawn while another spell is being cast, the drawn card is kept face down until that spell becomes cast (see rule 601.2h). While face down, it’s considered to have no characteristics. \The same is true with relation to another ability being activated. If an effect allows or instructs a player to reveal the card as it’s being drawn, it’s revealed after the spell becomes cast or the ability becomes activated.\
            401.6. Some effects tell a player to play with the top card of his or her library revealed, or say that a player may look at the top card of his or her library. If the top card of the player’s library changes while a spell is being cast, the new top card won’t be revealed and can’t be looked at until the spell becomes cast (see rule 601.2h). The same is true with relation to an ability being activated.\
            401.7. If an effect causes a player to play with the top card of his or her library revealed, and that particular card stops being revealed for any length of time before being revealed again, it becomes a new object.\
            401.8. If an effect causes a player to put a card into a library “Nth from the top,” and that library has fewer than N cards in it, the player puts that card on the bottom of that library."
            +
            "</p>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)]
        },
        {
            "open": false,
            "tags":["Hand","General","Zone"],
            "title": "402. Hand",
            "meaning": "The hand is where a player holds cards that have been drawn.",
            "content":
            "<p>"
            +
            "402.1. The hand is where a player holds cards that have been drawn. Cards can be put into a player’s hand by other effects as well. At the beginning of the game, each player draws a number of cards equal to that player’s starting hand size, normally seven. (See rule 103, “Starting the Game.”)\
            402.2. Each player has a maximum hand size, which is normally seven cards. A player may have any number of cards in his or her hand, but as part of his or her cleanup step, the player must discard excess cards down to the maximum hand size.\
            402.3. A player may arrange his or her hand in any convenient fashion and look at it as much as he or she wishes. A player can’t look at the cards in another player’s hand but may count those cards at any time."
            +
            "</p>"
            ,
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)]
        },



    {
            "tags" :["Monétique","Sécurité","Certification"],
            "title": "EMV",
            "meaning": "Europay Mastercard Visa",
            "content":
                "<div class=''>\
                <p>Cette nouvelle technologie, dont la première version des spécifications est parue en 1996, tire profit de la puce intégrée à la carte.\
                En France, depuis fin 2006, l'ancien système national Cartes Bancaires (CB) utilise désormais les cartes au standard EMV et l'ensemble du parc des \
                terminaux de paiement électroniques (ou TPE) a été aménagé.<br>\
                Principales caractéristiques :\
                <ul>\
                <li>interopérabilité internationale (quel que soit l'émetteur de la carte et quel que soit le terminal de paiement)</li>\
                <li>vérification et chiffrement de la clé personnelle par la puce</li>\
                <li>gestion plus ouverte de plusieurs applications sur la carte : débit/crédit, points de fidélité, porte-monnaie électronique, Authentification forte</li>\
                </ul></p>\
                <p>	Le terme EMV désigne un ensemble ouvert et international de normes et spécifications qui ont été initialement conçus pour \
                fournir une infrastructure de paiement sécurisé et de faciliter l'interopérabilité et la compatibilité des cartes de paiement à puce et des dispositifs\
                accpetateur de cartes à puce. La norme EMV a été construite sur ​​des normes ISO/IEC . La norme EMV prend désormais en charge de multiples facteurs \
                de forme , y compris les cartes de plastique ( contact, sans contact, à double interface) , porte-clés , les cartes mémoire microSD , \
                autocollants adhésifs , et les appareils mobiles . La norme EMV facilite une plate-forme mature, stable pour les transactions de paiement avec et sans contact\
                (les transactions EMV sans contact diffèrent de l'implémentation actuelle aux États-Unis  de transactiona via bande magnétique sans contact ) .\
                Les applications EMV de paiement mobile pour les téléphones mobile seront compatibles avec l'infrastructure d'acceptation EMV sans contact utilisée pour les \
                cartes de paiement .\
                </p>				\
                <p>Le dispositif EMV niveau 1 désigne le matériel qui accepte la carte . \
                Ce dispositif pourrait être un terminal , un dispositif de lecture de carte à un guichet automatique , ou une solution sans surveillance .\
                <br>La certification EMV Level1 mesure la conformité des modules d'interface à l'ensemble des caractéristiques électriques, mécaniques et de protocole de communication définies par EMV\
                <br>La certification EMV Level2 mesure la conformité du logiciel d'application resident dans le terminal qui prend en charge la fonctionnalité spécifié EMV\
                , à la fois obligatoires et facultatives. Des informations sur ces agréments peuvent être consultés sur <a href='http://www.EMVCo.com'>http://www.EMVCo.com</a></p>\
                </div>"
            ,
            "links":["http://fr.wikipedia.org/wiki/Europay_Mastercard_Visa","http://blog.elementps.com/element_payment_solutions/emv/"

            ],
            "createdBy": $scope.users[Math.floor((Math.random() * 3)+ 0)],
            "imgs": ["./img/metier/EMV-Map.jpg","./img/metier/EMV-Diagram.jpg"]
        }

    ];


    // Fonction pour deployer tous les panels
    $scope.openAllPanels = function() {
        $scope.oneAtATime = false;
        angular.forEach( $scope.data.definitions,function(obj){
            obj.open=true;
        })
    };
    // Fonction pour reduire tous les panels
    $scope.closeAllPanels = function() {
        angular.forEach( $scope.data.definitions,function(obj){
            obj.open=false;
        })
    }

}]);