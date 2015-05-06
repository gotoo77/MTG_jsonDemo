//TODO(gdu): this controller needs to be updated
/**
 * Created by GDU on 24/04/2015.
 */
angular.module('myApp').controller('ExtensionController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.name = "ExtensionController";
    $scope.params = $routeParams;
    $scope.title =  "ExtensionController : gere les data de type 'extension' Magic au format JSON";
    $scope.data = {};
    $scope.data.CardSet = [
        {
            "name" :   "DTK",
            "path" :   "./img/CardSet/DTK.png"
        },
        {
            "name" :   "ZEN",
            "path" :   "./img/CardSet/ZEN.png"
        }
    ];

    function getExtensionUrl(currentExt) {
       // alert(currentExt);
        var url = null;
        url = "./json/" + currentExt +".json";
        console.log(url);
        return url;
    }
    getExtensionUrl( $scope.params.myExtension);

    var myExtensionData = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': getExtensionUrl( $scope.params.myExtension),
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();


    //TODO(gdu): extension data to be managed-> load JSON with file instead of inserting it directly
    $scope.data.extension = myExtensionData;

   /* {
        "name":"Dragons of Tarkir",
        "code":"DTK",
        "magicCardsInfoCode":"dtk",
        "releaseDate":"2015-03-27",
        "border":"black",
        "type":"expansion",
        "block":"Khans of Tarkir",
        "booster":[
            [
                "rare",
                "mythic rare"
            ],
            "uncommon",
            "uncommon",
            "uncommon",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "common",
            "land",
            "marketing"
        ],
        "cards":[
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394485,
                "name":"Acid-Spewer Dragon",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"James Zapata",
                "power":"3",
                "toughness":"3",
                "manaCost":"{5}{B}",
                "text":"Flying, deathtouch\nMegamorph {5}{B}{B} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Acid-Spewer Dragon is turned face up, put a +1/+1 counter on each other Dragon creature you control.",
                "number":"86",
                "watermark":"Silumgar",
                "imageName":"acid-spewer dragon"
            },
            {
                "layout":"normal",
                "type":"Creature — Hound Archer",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394486,
                "name":"Aerie Bowmasters",
                "subtypes":[
                    "Hound",
                    "Archer"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Matt Stewart",
                "power":"3",
                "toughness":"4",
                "manaCost":"{2}{G}{G}",
                "text":"Reach (This creature can block creatures with flying.)\nMegamorph {5}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "number":"170",
                "watermark":"Dromoka",
                "imageName":"aerie bowmasters"
            },
            {
                "layout":"normal",
                "type":"Creature — Hound Archer",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394487,
                "name":"Ainok Artillerist",
                "subtypes":[
                    "Hound",
                    "Archer"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"James Paick",
                "power":"4",
                "toughness":"1",
                "manaCost":"{2}{G}",
                "text":"Ainok Artillerist has reach as long as it has a +1/+1 counter on it. (It can block creatures with flying.)",
                "flavor":"\"In the Tarkir I once knew, the Abzan revered their ancestor trees. Now, as Dromoka, they cut their finest groves to make weapons.\"\n—Sarkhan Vol",
                "number":"171",
                "watermark":"Dromoka",
                "imageName":"ainok artillerist"
            },
            {
                "layout":"normal",
                "type":"Creature — Hound Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394488,
                "name":"Ainok Survivalist",
                "subtypes":[
                    "Hound",
                    "Shaman"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Craig J Spearing",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{G}",
                "text":"Megamorph {1}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Ainok Survivalist is turned face up, destroy target artifact or enchantment an opponent controls.",
                "number":"172",
                "watermark":"Atarka",
                "imageName":"ainok survivalist"
            },
            {
                "layout":"normal",
                "type":"Creature — Orc Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394489,
                "name":"Ambuscade Shaman",
                "subtypes":[
                    "Orc",
                    "Shaman"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Anthony Palumbo",
                "power":"2",
                "toughness":"2",
                "manaCost":"{2}{B}",
                "text":"Whenever Ambuscade Shaman or another creature enters the battlefield under your control, that creature gets +2/+2 until end of turn.\nDash {3}{B} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"87",
                "watermark":"Kolaghan",
                "imageName":"ambuscade shaman"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Spirit Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394490,
                "name":"Anafenza, Kin-Tree Spirit",
                "subtypes":[
                    "Spirit",
                    "Soldier"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Ryan Yee",
                "power":"2",
                "toughness":"2",
                "manaCost":"{W}{W}",
                "text":"Whenever another nontoken creature enters the battlefield under your control, bolster 1. (Choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "flavor":"Martyred for worshipping her ancestors, she now walks among them.",
                "number":"2",
                "watermark":"Dromoka",
                "imageName":"anafenza, kin-tree spirit"
            },
            {
                "layout":"normal",
                "type":"Artifact Creature — Golem",
                "types":[
                    "Artifact",
                    "Creature"
                ],
                "multiverseid":394491,
                "name":"Ancestral Statue",
                "subtypes":[
                    "Golem"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Tomasz Jedruszek",
                "power":"3",
                "toughness":"4",
                "manaCost":"{4}",
                "text":"When Ancestral Statue enters the battlefield, return a nonland permanent you control to its owner's hand.",
                "flavor":"The mage awakened the statue in hopes of learning the lost lore of her clan, but the statue was interested only in war.",
                "number":"234",
                "imageName":"ancestral statue"
            },
            {
                "layout":"normal",
                "type":"Creature — Fish",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394492,
                "name":"Ancient Carp",
                "subtypes":[
                    "Fish"
                ],
                "cmc":5,
                "rarity":"Common",
                "artist":"Christopher Burdett",
                "power":"2",
                "toughness":"5",
                "manaCost":"{4}{U}",
                "flavor":"\"Why eat now what could one day grow into a feast?\"\n—Ojutai, translated from Draconic",
                "number":"44",
                "imageName":"ancient carp"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394493,
                "name":"Anticipate",
                "cmc":2,
                "rarity":"Common",
                "artist":"Lake Hurwitz",
                "manaCost":"{1}{U}",
                "text":"Look at the top three cards of your library. Put one of them into your hand and the rest on the bottom of your library in any order.",
                "flavor":"\"When I have meditated on all outcomes, my opponent has no recourse.\"",
                "number":"45",
                "imageName":"anticipate"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394494,
                "name":"Arashin Foremost",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":3,
                "rarity":"Rare",
                "artist":"David Palumbo",
                "power":"2",
                "toughness":"2",
                "manaCost":"{1}{W}{W}",
                "text":"Double strike\nWhenever Arashin Foremost enters the battlefield or attacks, another target Warrior creature you control gains double strike until end of turn.",
                "flavor":"\"I would gladly give my life if it would inspire my clan to victory.\"",
                "number":"3",
                "watermark":"Dromoka",
                "imageName":"arashin foremost"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White",
                    "Green"
                ],
                "multiverseid":394495,
                "name":"Arashin Sovereign",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":7,
                "rarity":"Rare",
                "artist":"Dan Scott",
                "power":"6",
                "toughness":"6",
                "manaCost":"{5}{G}{W}",
                "text":"Flying\nWhen Arashin Sovereign dies, you may put it on the top or bottom of its owner's library.",
                "flavor":"Dromoka dragons foster trust among their subjects, while the other clans must spend their time quelling rebellion.",
                "number":"212",
                "watermark":"Dromoka",
                "imageName":"arashin sovereign"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394496,
                "name":"Artful Maneuver",
                "cmc":2,
                "rarity":"Common",
                "artist":"Lars Grant-West",
                "manaCost":"{1}{W}",
                "text":"Target creature gets +2/+2 until end of turn.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"4",
                "watermark":"Ojutai",
                "imageName":"artful maneuver"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394497,
                "name":"Assault Formation",
                "cmc":2,
                "rarity":"Rare",
                "artist":"Kieran Yanner",
                "manaCost":"{1}{G}",
                "text":"Each creature you control assigns combat damage equal to its toughness rather than its power.\n{G}: Target creature with defender can attack this turn as though it didn't have defender.\n{2}{G}: Creatures you control get +0/+1 until end of turn.",
                "number":"173",
                "imageName":"assault formation"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394498,
                "name":"Atarka Beastbreaker",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Johannes Voss",
                "power":"2",
                "toughness":"2",
                "manaCost":"{1}{G}",
                "text":"Formidable — {4}{G}: Atarka Beastbreaker gets +4/+4 until end of turn. Activate this ability only if creatures you control have total power 8 or greater.",
                "flavor":"He scorns the heavy winter garb of lesser warriors, trusting his anger to keep him warm.",
                "number":"174",
                "watermark":"Atarka",
                "imageName":"atarka beastbreaker"
            },
            {
                "layout":"normal",
                "type":"Creature — Efreet Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394499,
                "name":"Atarka Efreet",
                "subtypes":[
                    "Efreet",
                    "Shaman"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Izzy",
                "power":"5",
                "toughness":"1",
                "manaCost":"{3}{R}",
                "text":"Megamorph {2}{R} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Atarka Efreet is turned face up, it deals 1 damage to target creature or player.",
                "number":"128",
                "watermark":"Atarka",
                "imageName":"atarka efreet"
            },
            {
                "layout":"normal",
                "type":"Artifact",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394500,
                "name":"Atarka Monument",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Daniel Ljunggren",
                "manaCost":"{3}",
                "text":"{T}: Add {R} or {G} to your mana pool.\n{4}{R}{G}: Atarka Monument becomes a 4/4 red and green Dragon artifact creature with flying until end of turn.",
                "flavor":"Atarka is worshipped and fed by her subjects at Ayagor, the Dragon's Bowl.",
                "number":"235",
                "watermark":"Atarka",
                "imageName":"atarka monument"
            },
            {
                "layout":"normal",
                "type":"Creature — Ogre Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394501,
                "name":"Atarka Pummeler",
                "subtypes":[
                    "Ogre",
                    "Warrior"
                ],
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"Lucas Graciano",
                "power":"4",
                "toughness":"5",
                "manaCost":"{4}{R}",
                "text":"Formidable — {3}{R}{R}: Each creature you control can't be blocked this turn except by two or more creatures. Activate this ability only if creatures you control have total power 8 or greater.",
                "number":"129",
                "watermark":"Atarka",
                "imageName":"atarka pummeler"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red",
                    "Green"
                ],
                "multiverseid":394502,
                "name":"Atarka's Command",
                "cmc":2,
                "rarity":"Rare",
                "artist":"Chris Rahn",
                "manaCost":"{R}{G}",
                "text":"Choose two —\n• Your opponents can't gain life this turn.\n• Atarka's Command deals 3 damage to each opponent.\n• You may put a land card from your hand onto the battlefield.\n• Creatures you control get +1/+1 and gain reach until end of turn.",
                "number":"213",
                "watermark":"Atarka",
                "imageName":"atarka's command"
            },
            {
                "layout":"normal",
                "type":"Creature — Avatar",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394503,
                "name":"Avatar of the Resolute",
                "subtypes":[
                    "Avatar"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Jeff Simpson",
                "power":"3",
                "toughness":"2",
                "manaCost":"{G}{G}",
                "text":"Reach, trample\nAvatar of the Resolute enters the battlefield with a +1/+1 counter on it for each other creature you control with a +1/+1 counter on it.",
                "flavor":"It exemplifies the ideals of the Dromoka: strength, unity, and honor.",
                "number":"175",
                "watermark":"Dromoka",
                "imageName":"avatar of the resolute"
            },
            {
                "layout":"normal",
                "type":"Creature — Bird Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394504,
                "name":"Aven Sunstriker",
                "subtypes":[
                    "Bird",
                    "Warrior"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"John Severin Brassell",
                "power":"1",
                "toughness":"1",
                "manaCost":"{1}{W}{W}",
                "text":"Flying\nDouble strike (This creature deals both first-strike and regular combat damage.)\nMegamorph {4}{W} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "number":"5",
                "watermark":"Ojutai",
                "imageName":"aven sunstriker"
            },
            {
                "layout":"normal",
                "type":"Creature — Bird Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394505,
                "name":"Aven Tactician",
                "subtypes":[
                    "Bird",
                    "Soldier"
                ],
                "cmc":5,
                "rarity":"Common",
                "artist":"Christopher Moeller",
                "power":"2",
                "toughness":"3",
                "manaCost":"{4}{W}",
                "text":"Flying\nWhen Aven Tactician enters the battlefield, bolster 1. (Choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "flavor":"The aven are admired, for they are able to fly with the dragons.",
                "number":"6",
                "watermark":"Dromoka",
                "imageName":"aven tactician"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394506,
                "name":"Battle Mastery",
                "subtypes":[
                    "Aura"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Viktor Titov",
                "manaCost":"{2}{W}",
                "text":"Enchant creature\nEnchanted creature has double strike. (It deals both first-strike and regular combat damage.)",
                "flavor":"\"There is elegance in all the Ojutai do—even their killing.\"\n—Kirada, Silumgar enforcer",
                "number":"7",
                "imageName":"battle mastery"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394507,
                "name":"Belltoll Dragon",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Zack Stella",
                "power":"3",
                "toughness":"3",
                "manaCost":"{5}{U}",
                "text":"Flying, hexproof\nMegamorph {5}{U}{U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Belltoll Dragon is turned face up, put a +1/+1 counter on each other Dragon creature you control.",
                "number":"46",
                "watermark":"Ojutai",
                "imageName":"belltoll dragon"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394508,
                "name":"Berserkers' Onslaught",
                "cmc":5,
                "rarity":"Rare",
                "artist":"Zoltan Boros",
                "manaCost":"{3}{R}{R}",
                "text":"Attacking creatures you control have double strike.",
                "flavor":"\"Atarka's people starve while she feasts upon the bounty of their hunts. They must conquer ever more lands just for the sake of their own subsistence.\"\n—Arel, Unseen Whisperer",
                "number":"130",
                "imageName":"berserkers' onslaught"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394509,
                "name":"Blessed Reincarnation",
                "cmc":4,
                "rarity":"Rare",
                "artist":"Kev Walker",
                "manaCost":"{3}{U}",
                "text":"Exile target creature an opponent controls. That player reveals cards from the top of his or her library until a creature card is revealed. The player puts that card onto the battlefield, then shuffles the rest into his or her library.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"47",
                "watermark":"Ojutai",
                "imageName":"blessed reincarnation"
            },
            {
                "layout":"normal",
                "type":"Creature — Orc Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394510,
                "name":"Blood-Chin Fanatic",
                "subtypes":[
                    "Orc",
                    "Warrior"
                ],
                "cmc":3,
                "rarity":"Rare",
                "artist":"David Palumbo",
                "power":"3",
                "toughness":"3",
                "manaCost":"{1}{B}{B}",
                "text":"{1}{B}, Sacrifice another Warrior creature: Target player loses X life and you gain X life, where X is the sacrificed creature's power.",
                "flavor":"\"We are as brutal as our dragonlord. We strike like wild lightning and feast on human flesh.\"",
                "number":"88",
                "watermark":"Kolaghan",
                "imageName":"blood-chin fanatic"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394511,
                "name":"Blood-Chin Rager",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Karl Kopinski",
                "power":"2",
                "toughness":"2",
                "manaCost":"{1}{B}",
                "text":"Whenever Blood-Chin Rager attacks, each Warrior creature you control can't be blocked this turn except by two or more creatures.",
                "flavor":"Kolaghan blades rarely stay clean for long.",
                "number":"89",
                "watermark":"Kolaghan",
                "imageName":"blood-chin rager"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black",
                    "Red"
                ],
                "multiverseid":394512,
                "name":"Boltwing Marauder",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":5,
                "rarity":"Rare",
                "artist":"Raymond Swanland",
                "power":"5",
                "toughness":"4",
                "manaCost":"{3}{B}{R}",
                "text":"Flying\nWhenever another creature enters the battlefield under your control, target creature gets +2/+0 until end of turn.",
                "flavor":"When battling the Kolaghan, consider yourself lucky if lightning strikes the same place only twice.",
                "number":"214",
                "watermark":"Kolaghan",
                "imageName":"boltwing marauder"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394513,
                "name":"Butcher's Glee",
                "cmc":3,
                "rarity":"Common",
                "artist":"Jesper Ejsing",
                "manaCost":"{2}{B}",
                "text":"Target creature gets +3/+0 and gains lifelink until end of turn. Regenerate it. (Damage dealt by a creature with lifelink also causes its controller to gain that much life.)",
                "flavor":"The Crave made Kneecleaver think she was bigger than the dragon.",
                "number":"90",
                "imageName":"butcher's glee"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394514,
                "name":"Center Soul",
                "cmc":2,
                "rarity":"Common",
                "artist":"Igor Kieryluk",
                "manaCost":"{1}{W}",
                "text":"Target creature you control gains protection from the color of your choice until end of turn.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"8",
                "watermark":"Ojutai",
                "imageName":"center soul"
            },
            {
                "layout":"normal",
                "type":"Creature — Hound Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394515,
                "name":"Champion of Arashin",
                "subtypes":[
                    "Hound",
                    "Warrior"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Joseph Meehan",
                "power":"3",
                "toughness":"2",
                "manaCost":"{3}{W}",
                "text":"Lifelink (Damage dealt by this creature also causes you to gain that much life.)",
                "flavor":"\"The blood of Dromoka and the blood of my veins are the same.\"",
                "number":"9",
                "watermark":"Dromoka",
                "imageName":"champion of arashin"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394516,
                "name":"Circle of Elders",
                "subtypes":[
                    "Human",
                    "Shaman"
                ],
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Jakub Kasper",
                "power":"2",
                "toughness":"4",
                "manaCost":"{2}{G}{G}",
                "text":"Vigilance\nFormidable — {T}: Add {3} to your mana pool. Activate this ability only if creatures you control have total power 8 or greater.",
                "flavor":"They whisper of an ancient hero who saved the dragons of their world.",
                "number":"176",
                "watermark":"Atarka",
                "imageName":"circle of elders"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394517,
                "name":"Clone Legion",
                "cmc":9,
                "rarity":"Mythic Rare",
                "artist":"Svetlin Velinov",
                "manaCost":"{7}{U}{U}",
                "text":"For each creature target player controls, put a token onto the battlefield that's a copy of that creature.",
                "flavor":"Their lust for battle was so great that they didn't care their enemies wore their own faces.",
                "number":"48",
                "imageName":"clone legion"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394518,
                "name":"Coat with Venom",
                "cmc":1,
                "rarity":"Common",
                "artist":"Johann Bodin",
                "manaCost":"{B}",
                "text":"Target creature gets +1/+2 and gains deathtouch until end of turn. (Any amount of damage it deals to a creature is enough to destroy it.)",
                "flavor":"\"Every Silumgar blade carries the blessing of our dragonlord.\"\n—Xathi the Infallible",
                "number":"91",
                "imageName":"coat with venom"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394519,
                "name":"Collected Company",
                "cmc":4,
                "rarity":"Rare",
                "artist":"Franz Vohwinkel",
                "manaCost":"{3}{G}",
                "text":"Look at the top six cards of your library. Put up to two creature cards with converted mana cost 3 or less from among them onto the battlefield. Put the rest on the bottom of your library in any order.",
                "flavor":"Many can stand where one would fall.",
                "number":"177",
                "imageName":"collected company"
            },
            {
                "layout":"normal",
                "type":"Creature — Beast",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394520,
                "name":"Colossodon Yearling",
                "subtypes":[
                    "Beast"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Yeong-Hao Han",
                "power":"2",
                "toughness":"4",
                "manaCost":"{2}{G}",
                "flavor":"The colossodon's hard outer shell stops many predators, but with a gentle flip from a dragon, it quickly becomes a meal in a bowl.",
                "number":"178",
                "imageName":"colossodon yearling"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394521,
                "name":"Commune with Lava",
                "cmc":2,
                "rarity":"Rare",
                "artist":"Ryan Barger",
                "manaCost":"{X}{R}{R}",
                "text":"Exile the top X cards of your library. Until the end of your next turn, you may play those cards.",
                "flavor":"Atarka conquered Qadat, the Fire Rim, long ago, winning over its efreet with a promise to spread the glory of fire to all the world.",
                "number":"131",
                "imageName":"commune with lava"
            },
            {
                "layout":"normal",
                "type":"Creature — Elemental",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394522,
                "name":"Conifer Strider",
                "subtypes":[
                    "Elemental"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"YW Tang",
                "power":"5",
                "toughness":"1",
                "manaCost":"{3}{G}",
                "text":"Hexproof (This creature can't be the target of spells or abilities your opponents control.)",
                "flavor":"Atarka's presence thaws the glaciers of Qal Sisma, forcing its elementals to migrate or adapt.",
                "number":"179",
                "imageName":"conifer strider"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394523,
                "name":"Contradict",
                "cmc":5,
                "rarity":"Common",
                "artist":"Steve Prescott",
                "manaCost":"{3}{U}{U}",
                "text":"Counter target spell.\nDraw a card.",
                "flavor":"Those who question Ojutai may not like the answers they receive.",
                "number":"49",
                "imageName":"contradict"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394524,
                "name":"Corpseweft",
                "cmc":3,
                "rarity":"Rare",
                "artist":"Nils Hamm",
                "manaCost":"{2}{B}",
                "text":"{1}{B}, Exile one or more creature cards from your graveyard: Put an X/X black Zombie Horror creature token onto the battlefield tapped, where X is twice the number of cards exiled this way.",
                "flavor":"Sidisi hated to limit her options.",
                "number":"92",
                "imageName":"corpseweft"
            },
            {
                "layout":"normal",
                "type":"Creature — Elemental",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394525,
                "name":"Crater Elemental",
                "subtypes":[
                    "Elemental"
                ],
                "cmc":3,
                "rarity":"Rare",
                "artist":"Svetlin Velinov",
                "power":"0",
                "toughness":"6",
                "manaCost":"{2}{R}",
                "text":"{R}, {T}, Sacrifice Crater Elemental: Crater Elemental deals 4 damage to target creature.\nFormidable — {2}{R}: Crater Elemental has base power 8 until end of turn. Activate this ability only if creatures you control have total power 8 or greater.",
                "number":"132",
                "watermark":"Atarka",
                "imageName":"crater elemental"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White",
                    "Blue"
                ],
                "multiverseid":394526,
                "name":"Cunning Breezedancer",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Todd Lockwood",
                "power":"4",
                "toughness":"4",
                "manaCost":"{4}{W}{U}",
                "text":"Flying\nWhenever you cast a noncreature spell, Cunning Breezedancer gets +2/+2 until end of turn.",
                "flavor":"\"That which is beautiful in form can also be deadly.\"\n—Ishai, Ojutai dragonspeaker",
                "number":"215",
                "watermark":"Ojutai",
                "imageName":"cunning breezedancer"
            },
            {
                "layout":"normal",
                "type":"Artifact Creature — Golem",
                "types":[
                    "Artifact",
                    "Creature"
                ],
                "multiverseid":394527,
                "name":"Custodian of the Trove",
                "subtypes":[
                    "Golem"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Raoul Vitale",
                "power":"2",
                "toughness":"5",
                "manaCost":"{3}",
                "text":"Defender\nCustodian of the Trove enters the battlefield tapped.",
                "flavor":"Silumgar delights in repurposing the treasures of other clans to serve his own ravenous greed.",
                "number":"236",
                "imageName":"custodian of the trove"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394528,
                "name":"Damnable Pact",
                "cmc":2,
                "rarity":"Rare",
                "artist":"Zack Stella",
                "manaCost":"{X}{B}{B}",
                "text":"Target player draws X cards and loses X life.",
                "flavor":"\"Silumgar's mind is a dark labyrinth, full of grim secrets and subtle traps.\"\n—Siara, the Dragon's Mouth",
                "number":"93",
                "imageName":"damnable pact"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394529,
                "name":"Dance of the Skywise",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Jack Wang",
                "manaCost":"{1}{U}",
                "text":"Until end of turn, target creature you control becomes a blue Dragon Illusion with base power and toughness 4/4, loses all abilities, and gains flying.",
                "flavor":"The Ojutai believe in the Great Wheel: those who best serve the dragonlord are destined to be reborn as dragons.",
                "number":"50",
                "imageName":"dance of the skywise"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394530,
                "name":"Deadly Wanderings",
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"David Palumbo",
                "manaCost":"{3}{B}{B}",
                "text":"As long as you control exactly one creature, that creature gets +2/+0 and has deathtouch and lifelink.",
                "flavor":"\"Seclusion is only an option for the strong.\"\n—Sorin Markov",
                "number":"94",
                "imageName":"deadly wanderings"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394531,
                "name":"Death Wind",
                "cmc":1,
                "rarity":"Uncommon",
                "artist":"Nils Hamm",
                "manaCost":"{X}{B}",
                "text":"Target creature gets -X/-X until end of turn.",
                "flavor":"\"I am a dragonslayer for Lord Silumgar. There is no dragon save him whom I fear.\"\n—Xathi the Infallible",
                "number":"95",
                "imageName":"death wind"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394532,
                "name":"Deathbringer Regent",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":7,
                "rarity":"Rare",
                "artist":"Adam Paquette",
                "power":"5",
                "toughness":"6",
                "manaCost":"{5}{B}{B}",
                "text":"Flying\nWhen Deathbringer Regent enters the battlefield, if you cast it from your hand and there are five or more other creatures on the battlefield, destroy all other creatures.",
                "number":"96",
                "watermark":"Silumgar",
                "imageName":"deathbringer regent"
            },
            {
                "layout":"normal",
                "type":"Creature — Lizard Beast",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394533,
                "name":"Deathmist Raptor",
                "subtypes":[
                    "Lizard",
                    "Beast"
                ],
                "cmc":3,
                "rarity":"Mythic Rare",
                "artist":"Filip Burburan",
                "power":"3",
                "toughness":"3",
                "manaCost":"{1}{G}{G}",
                "text":"Deathtouch\nWhenever a permanent you control is turned face up, you may return Deathmist Raptor from your graveyard to the battlefield face up or face down.\nMegamorph {4}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "number":"180",
                "imageName":"deathmist raptor"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394534,
                "name":"Defeat",
                "cmc":2,
                "rarity":"Common",
                "artist":"Dave Kendall",
                "manaCost":"{1}{B}",
                "text":"Destroy target creature with power 2 or less.",
                "flavor":"\"Wars are decided one life at a time.\"\n—Gvar Barzeel, Kolaghan warrior",
                "number":"97",
                "imageName":"defeat"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394535,
                "name":"Den Protector",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Viktor Titov",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{G}",
                "text":"Creatures with power less than Den Protector's power can't block it.\nMegamorph {1}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Den Protector is turned face up, return target card from your graveyard to your hand.",
                "number":"181",
                "watermark":"Atarka",
                "imageName":"den protector"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394536,
                "name":"Descent of the Dragons",
                "cmc":6,
                "rarity":"Mythic Rare",
                "artist":"Steve Prescott",
                "manaCost":"{4}{R}{R}",
                "text":"Destroy any number of target creatures. For each creature destroyed this way, its controller puts a 4/4 red Dragon creature token with flying onto the battlefield.",
                "flavor":"Dragons emerge from tempests fully formed and terribly hungry.",
                "number":"133",
                "imageName":"descent of the dragons"
            },
            {
                "layout":"normal",
                "type":"Creature — Serpent",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394537,
                "name":"Dirgur Nemesis",
                "subtypes":[
                    "Serpent"
                ],
                "cmc":6,
                "rarity":"Common",
                "artist":"Mathias Kollros",
                "power":"6",
                "toughness":"5",
                "manaCost":"{5}{U}",
                "text":"Defender\nMegamorph {6}{U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "number":"51",
                "imageName":"dirgur nemesis"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394538,
                "name":"Display of Dominance",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Tomasz Jedruszek",
                "manaCost":"{1}{G}",
                "text":"Choose one —\n• Destroy target blue or black noncreature permanent.\n• Permanents you control can't be the targets of blue or black spells your opponents control this turn.",
                "number":"182",
                "imageName":"display of dominance"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394539,
                "name":"Draconic Roar",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Kev Walker",
                "manaCost":"{1}{R}",
                "text":"As an additional cost to cast Draconic Roar, you may reveal a Dragon card from your hand.\nDraconic Roar deals 3 damage to target creature. If you revealed a Dragon card or controlled a Dragon as you cast Draconic Roar, Draconic Roar deals 3 damage to that creature's controller.",
                "number":"134",
                "watermark":"Atarka",
                "imageName":"draconic roar"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394540,
                "name":"Dragon Fodder",
                "cmc":2,
                "rarity":"Common",
                "artist":"Volkan Baga",
                "manaCost":"{1}{R}",
                "text":"Put two 1/1 red Goblin creature tokens onto the battlefield.",
                "flavor":"Atarka goblins meet their demise as readily as their Temur counterparts did, but usually under big, winged shadows.",
                "number":"135",
                "imageName":"dragon fodder"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394541,
                "name":"Dragon Hunter",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":1,
                "rarity":"Uncommon",
                "artist":"Johannes Voss",
                "power":"2",
                "toughness":"1",
                "manaCost":"{W}",
                "text":"Protection from Dragons\nDragon Hunter can block Dragons as though it had reach.",
                "flavor":"\"Dromoka has taught me the secrets of her kind, that I might use them in her service.\"",
                "number":"10",
                "watermark":"Dromoka",
                "imageName":"dragon hunter"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394542,
                "name":"Dragon Tempest",
                "cmc":2,
                "rarity":"Rare",
                "artist":"Willian Murai",
                "manaCost":"{1}{R}",
                "text":"Whenever a creature with flying enters the battlefield under your control, it gains haste until end of turn.\nWhenever a Dragon enters the battlefield under your control, it deals X damage to target creature or player, where X is the number of Dragons you control.",
                "number":"136",
                "imageName":"dragon tempest"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394543,
                "name":"Dragon Whisperer",
                "subtypes":[
                    "Human",
                    "Shaman"
                ],
                "cmc":2,
                "rarity":"Mythic Rare",
                "artist":"Chris Rallis",
                "power":"2",
                "toughness":"2",
                "manaCost":"{R}{R}",
                "text":"{R}: Dragon Whisperer gains flying until end of turn.\n{1}{R}: Dragon Whisperer gets +1/+0 until end of turn.\nFormidable — {4}{R}{R}: Put a 4/4 red Dragon creature token with flying onto the battlefield. Activate this ability only if creatures you control have total power 8 or greater.",
                "number":"137",
                "watermark":"Atarka",
                "imageName":"dragon whisperer"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394544,
                "name":"Dragon's Eye Sentry",
                "subtypes":[
                    "Human",
                    "Monk"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Anastasia Ovchinnikova",
                "power":"1",
                "toughness":"3",
                "manaCost":"{W}",
                "text":"Defender, first strike",
                "flavor":"Even the humblest guard of Ojutai's strongholds ponders the puzzles of the Great Teacher's lessons.",
                "number":"11",
                "watermark":"Ojutai",
                "imageName":"dragon's eye sentry"
            },
            {
                "layout":"normal",
                "type":"Creature — Bear",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394553,
                "name":"Dragon-Scarred Bear",
                "subtypes":[
                    "Bear"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Lars Grant-West",
                "power":"3",
                "toughness":"2",
                "manaCost":"{2}{G}",
                "text":"Formidable — {1}{G}: Regenerate Dragon-Scarred Bear. Activate this ability only if creatures you control have total power 8 or greater.",
                "flavor":"Bears are a delicacy for the Atarka. The few that remain are the toughest of their species.",
                "number":"183",
                "watermark":"Atarka",
                "imageName":"dragon-scarred bear"
            },
            {
                "layout":"normal",
                "type":"Artifact Creature — Gargoyle",
                "types":[
                    "Artifact",
                    "Creature"
                ],
                "multiverseid":394545,
                "name":"Dragonloft Idol",
                "subtypes":[
                    "Gargoyle"
                ],
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Jung Park",
                "power":"3",
                "toughness":"3",
                "manaCost":"{4}",
                "text":"As long as you control a Dragon, Dragonloft Idol gets +1/+1 and has flying and trample.",
                "flavor":"The idols were forged during the time of the Khanfall, when the dragons came to rule Tarkir and its people aligned themselves with the five dragonlords.",
                "number":"237",
                "imageName":"dragonloft idol"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Elder Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red",
                    "Green"
                ],
                "multiverseid":394546,
                "name":"Dragonlord Atarka",
                "subtypes":[
                    "Elder",
                    "Dragon"
                ],
                "cmc":7,
                "rarity":"Mythic Rare",
                "artist":"Karl Kopinski",
                "power":"8",
                "toughness":"8",
                "manaCost":"{5}{R}{G}",
                "text":"Flying, trample\nWhen Dragonlord Atarka enters the battlefield, it deals 5 damage divided as you choose among any number of target creatures and/or planeswalkers your opponents control.",
                "number":"216",
                "watermark":"Atarka",
                "imageName":"dragonlord atarka"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Elder Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White",
                    "Green"
                ],
                "multiverseid":394547,
                "name":"Dragonlord Dromoka",
                "subtypes":[
                    "Elder",
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Mythic Rare",
                "artist":"Eric Deschamps",
                "power":"5",
                "toughness":"7",
                "manaCost":"{4}{G}{W}",
                "text":"Dragonlord Dromoka can't be countered.\nFlying, lifelink\nYour opponents can't cast spells during your turn.",
                "flavor":"Dromoka's followers forsake blood ties so that they may join a greater family.",
                "number":"217",
                "watermark":"Dromoka",
                "imageName":"dragonlord dromoka"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Elder Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black",
                    "Red"
                ],
                "multiverseid":394548,
                "name":"Dragonlord Kolaghan",
                "subtypes":[
                    "Elder",
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Mythic Rare",
                "artist":"Jaime Jones",
                "power":"6",
                "toughness":"5",
                "manaCost":"{4}{B}{R}",
                "text":"Flying, haste\nOther creatures you control have haste.\nWhenever an opponent casts a creature or planeswalker spell with the same name as a card in his or her graveyard, that player loses 10 life.",
                "number":"218",
                "watermark":"Kolaghan",
                "imageName":"dragonlord kolaghan"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Elder Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White",
                    "Blue"
                ],
                "multiverseid":394549,
                "name":"Dragonlord Ojutai",
                "subtypes":[
                    "Elder",
                    "Dragon"
                ],
                "cmc":5,
                "rarity":"Mythic Rare",
                "artist":"Chase Stone",
                "power":"5",
                "toughness":"4",
                "manaCost":"{3}{W}{U}",
                "text":"Flying\nDragonlord Ojutai has hexproof as long as it's untapped.\nWhenever Dragonlord Ojutai deals combat damage to a player, look at the top three cards of your library. Put one of them into your hand and the rest on the bottom of your library in any order.",
                "number":"219",
                "watermark":"Ojutai",
                "imageName":"dragonlord ojutai"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Elder Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue",
                    "Black"
                ],
                "multiverseid":394550,
                "name":"Dragonlord Silumgar",
                "subtypes":[
                    "Elder",
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Mythic Rare",
                "artist":"Steven Belledin",
                "power":"3",
                "toughness":"5",
                "manaCost":"{4}{U}{B}",
                "text":"Flying, deathtouch\nWhen Dragonlord Silumgar enters the battlefield, gain control of target creature or planeswalker for as long as you control Dragonlord Silumgar.",
                "flavor":"Silumgar never passes up an opportunity to add to his opulence.",
                "number":"220",
                "watermark":"Silumgar",
                "imageName":"dragonlord silumgar"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394551,
                "name":"Dragonlord's Prerogative",
                "cmc":6,
                "rarity":"Rare",
                "artist":"Seb McKinnon",
                "manaCost":"{4}{U}{U}",
                "text":"As an additional cost to cast Dragonlord's Prerogative, you may reveal a Dragon card from your hand.\nIf you revealed a Dragon card or controlled a Dragon as you cast Dragonlord's Prerogative, Dragonlord's Prerogative can't be countered.\nDraw four cards.",
                "number":"52",
                "imageName":"dragonlord's prerogative"
            },
            {
                "layout":"normal",
                "type":"Creature — Goblin Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394552,
                "name":"Dragonlord's Servant",
                "subtypes":[
                    "Goblin",
                    "Shaman"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Steve Prescott",
                "power":"1",
                "toughness":"3",
                "manaCost":"{1}{R}",
                "text":"Dragon spells you cast cost {1} less to cast.",
                "flavor":"Atarka serving-goblins coat themselves with grease imbued with noxious herbs, hoping to discourage their ravenous masters from adding them to the meal.",
                "number":"138",
                "watermark":"Atarka",
                "imageName":"dragonlord's servant"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394554,
                "name":"Dromoka Captain",
                "subtypes":[
                    "Human",
                    "Soldier"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Matt Stewart",
                "power":"1",
                "toughness":"1",
                "manaCost":"{2}{W}",
                "text":"First strike\nWhenever Dromoka Captain attacks, bolster 1. (Choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "flavor":"\"We fight not out of fear, but for honor.\"",
                "number":"12",
                "watermark":"Dromoka",
                "imageName":"dromoka captain"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394555,
                "name":"Dromoka Dunecaster",
                "subtypes":[
                    "Human",
                    "Wizard"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Mark Winters",
                "power":"0",
                "toughness":"2",
                "manaCost":"{W}",
                "text":"{1}{W}, {T}: Tap target creature without flying.",
                "flavor":"\"The dragonlords rule the tempests of the skies. Here in the wastes, the storms are mine to command.\"",
                "number":"13",
                "watermark":"Dromoka",
                "imageName":"dromoka dunecaster"
            },
            {
                "layout":"normal",
                "type":"Artifact",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394556,
                "name":"Dromoka Monument",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Daniel Ljunggren",
                "manaCost":"{3}",
                "text":"{T}: Add {G} or {W} to your mana pool.\n{4}{G}{W}: Dromoka Monument becomes a 4/4 green and white Dragon artifact creature with flying until end of turn.",
                "flavor":"Dromoka rules her clan from the Great Aerie atop Arashin, the central city of the Shifting Wastes.",
                "number":"238",
                "watermark":"Dromoka",
                "imageName":"dromoka monument"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394557,
                "name":"Dromoka Warrior",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Zack Stella",
                "power":"3",
                "toughness":"1",
                "manaCost":"{1}{W}",
                "flavor":"Dromoka has regard for the humans who serve under her. In return for her protection, they obey with steadfast loyalty, acting as weapons for her and her scalelords against the other clans.",
                "number":"14",
                "watermark":"Dromoka",
                "imageName":"dromoka warrior"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White",
                    "Green"
                ],
                "multiverseid":394558,
                "name":"Dromoka's Command",
                "cmc":2,
                "rarity":"Rare",
                "artist":"James Ryman",
                "manaCost":"{G}{W}",
                "text":"Choose two —\n• Prevent all damage target instant or sorcery spell would deal this turn.\n• Target player sacrifices an enchantment.\n• Put a +1/+1 counter on target creature.\n• Target creature you control fights target creature you don't control.",
                "number":"221",
                "watermark":"Dromoka",
                "imageName":"dromoka's command"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394559,
                "name":"Dromoka's Gift",
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"Winona Nelson",
                "manaCost":"{4}{G}",
                "text":"Bolster 4. (Choose a creature with the least toughness among creatures you control and put four +1/+1 counters on it.)",
                "flavor":"The simplest gift from a dragon can be a revered accolade for a human warrior.",
                "number":"184",
                "watermark":"Dromoka",
                "imageName":"dromoka's gift"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394560,
                "name":"Duress",
                "cmc":1,
                "rarity":"Common",
                "artist":"Jason Rainville",
                "manaCost":"{B}",
                "text":"Target opponent reveals his or her hand. You choose a noncreature, nonland card from it. That player discards that card.",
                "flavor":"Sarkhan was eager to take vengeance on Zurgo until he saw how lowly his old foe had become.",
                "number":"98",
                "imageName":"duress"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394561,
                "name":"Dutiful Attendant",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Aaron Miller",
                "power":"1",
                "toughness":"2",
                "manaCost":"{2}{B}",
                "text":"When Dutiful Attendant dies, return another target creature card from your graveyard to your hand.",
                "flavor":"The dragon who eats the last head in the basket is entitled to the servant's.",
                "number":"99",
                "watermark":"Silumgar",
                "imageName":"dutiful attendant"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394562,
                "name":"Echoes of the Kin Tree",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Ryan Alexander Lee",
                "manaCost":"{1}{W}",
                "text":"{2}{W}: Bolster 1. (Choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "flavor":"Even after Anafenza was executed, many secretly maintained their beliefs in the old ways.",
                "number":"15",
                "watermark":"Dromoka",
                "imageName":"echoes of the kin tree"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394563,
                "name":"Elusive Spellfist",
                "subtypes":[
                    "Human",
                    "Monk"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Viktor Titov",
                "power":"1",
                "toughness":"3",
                "manaCost":"{1}{U}",
                "text":"Whenever you cast a noncreature spell, Elusive Spellfist gets +1/+0 until end of turn and can't be blocked this turn.",
                "flavor":"\"Learn to see an obstacle from a new perspective. Underneath, for example.\"\n—Chanyi, Ojutai monk",
                "number":"53",
                "watermark":"Ojutai",
                "imageName":"elusive spellfist"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394564,
                "name":"Encase in Ice",
                "subtypes":[
                    "Aura"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Mathias Kollros",
                "manaCost":"{1}{U}",
                "text":"Flash (You may cast this spell any time you could cast an instant.)\nEnchant red or green creature\nWhen Encase in Ice enters the battlefield, tap enchanted creature.\nEnchanted creature doesn't untap during its controller's untap step.",
                "number":"54",
                "imageName":"encase in ice"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White",
                    "Green"
                ],
                "multiverseid":394565,
                "name":"Enduring Scalelord",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Clint Cearley",
                "power":"4",
                "toughness":"4",
                "manaCost":"{4}{G}{W}",
                "text":"Flying\nWhenever one or more +1/+1 counters are placed on another creature you control, you may put a +1/+1 counter on Enduring Scalelord.",
                "flavor":"Only the sun that beats down upon Arashin's walls could shine more brightly.",
                "number":"222",
                "watermark":"Dromoka",
                "imageName":"enduring scalelord"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394566,
                "name":"Enduring Victory",
                "cmc":5,
                "rarity":"Common",
                "artist":"Mike Sass",
                "manaCost":"{4}{W}",
                "text":"Destroy target attacking or blocking creature. Bolster 1. (Choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "flavor":"\"My dragonlord is immortal. Most dragons are not.\"\n—Kadri, Dromoka warrior",
                "number":"16",
                "watermark":"Dromoka",
                "imageName":"enduring victory"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394567,
                "name":"Epic Confrontation",
                "cmc":2,
                "rarity":"Common",
                "artist":"Wayne Reynolds",
                "manaCost":"{1}{G}",
                "text":"Target creature you control gets +1/+2 until end of turn. It fights target creature you don't control. (Each deals damage equal to its power to the other.)",
                "flavor":"No matter the timeline, some legends will endure.",
                "number":"185",
                "imageName":"epic confrontation"
            },
            {
                "layout":"normal",
                "type":"Land",
                "types":[
                    "Land"
                ],
                "multiverseid":394568,
                "name":"Evolving Wilds",
                "rarity":"Common",
                "artist":"Andreas Rocha",
                "text":"{T}, Sacrifice Evolving Wilds: Search your library for a basic land card and put it onto the battlefield tapped. Then shuffle your library.",
                "flavor":"The land is ever resilient. Should it die, it will be reborn.",
                "number":"248",
                "imageName":"evolving wilds"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394569,
                "name":"Explosive Vegetation",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Florian de Gesincourt",
                "manaCost":"{3}{G}",
                "text":"Search your library for up to two basic land cards and put them onto the battlefield tapped. Then shuffle your library.",
                "flavor":"Despite the flames and devastation of the dragons, Tarkir continued to thrive.",
                "number":"186",
                "imageName":"explosive vegetation"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394570,
                "name":"Fate Forgotten",
                "cmc":3,
                "rarity":"Common",
                "artist":"Cliff Childs",
                "manaCost":"{2}{W}",
                "text":"Exile target artifact or enchantment.",
                "flavor":"When Sarkhan saved Ugin in Tarkir's past, it changed Tarkir's future. The Sultai no longer exist, having been supplanted by the dragonlord Silumgar and his clan.",
                "number":"17",
                "imageName":"fate forgotten"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394571,
                "name":"Flatten",
                "cmc":4,
                "rarity":"Common",
                "artist":"Raoul Vitale",
                "manaCost":"{3}{B}",
                "text":"Target creature gets -4/-4 until end of turn.",
                "flavor":"Like their dragonlord, the Kolaghan take no trophies. They find true fulfillment only in the battle itself, in clash of steel and thunder of hooves.",
                "number":"100",
                "imageName":"flatten"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394572,
                "name":"Foe-Razer Regent",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":7,
                "rarity":"Rare",
                "artist":"Lucas Graciano",
                "power":"4",
                "toughness":"5",
                "manaCost":"{5}{G}{G}",
                "text":"Flying\nWhen Foe-Razer Regent enters the battlefield, you may have it fight target creature you don't control.\nWhenever a creature you control fights, put two +1/+1 counters on it at the beginning of the next end step.",
                "number":"187",
                "watermark":"Atarka",
                "imageName":"foe-razer regent"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Forest",
                "types":[
                    "Land"
                ],
                "multiverseid":394575,
                "name":"Forest",
                "subtypes":[
                    "Forest"
                ],
                "rarity":"Basic Land",
                "artist":"Sam Burley",
                "number":"262",
                "variations":[
                    394573,
                    394574
                ],
                "imageName":"forest1"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Forest",
                "types":[
                    "Land"
                ],
                "multiverseid":394573,
                "name":"Forest",
                "subtypes":[
                    "Forest"
                ],
                "rarity":"Basic Land",
                "artist":"Titus Lunter",
                "number":"263",
                "variations":[
                    394574,
                    394575
                ],
                "imageName":"forest2"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Forest",
                "types":[
                    "Land"
                ],
                "multiverseid":394574,
                "name":"Forest",
                "subtypes":[
                    "Forest"
                ],
                "rarity":"Basic Land",
                "artist":"Titus Lunter",
                "number":"264",
                "variations":[
                    394573,
                    394575
                ],
                "imageName":"forest3"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394576,
                "name":"Foul Renewal",
                "cmc":4,
                "rarity":"Rare",
                "artist":"Filip Burburan",
                "manaCost":"{3}{B}",
                "text":"Return target creature card from your graveyard to your hand. Target creature gets -X/-X until end of turn, where X is the toughness of the card returned this way.",
                "flavor":"The cycle of life and death is rarely pretty.",
                "number":"101",
                "imageName":"foul renewal"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394577,
                "name":"Foul-Tongue Invocation",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Daarken",
                "manaCost":"{2}{B}",
                "text":"As an additional cost to cast Foul-Tongue Invocation, you may reveal a Dragon card from your hand.\nTarget player sacrifices a creature. If you revealed a Dragon card or controlled a Dragon as you cast Foul-Tongue Invocation, you gain 4 life.",
                "number":"102",
                "watermark":"Kolaghan",
                "imageName":"foul-tongue invocation"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394578,
                "name":"Foul-Tongue Shriek",
                "cmc":1,
                "rarity":"Common",
                "artist":"Dave Kendall",
                "manaCost":"{B}",
                "text":"Target opponent loses 1 life for each attacking creature you control. You gain that much life.",
                "flavor":"Foul-Tongue shamans draw their powers from a dark twisting of the Draconic language.",
                "number":"103",
                "imageName":"foul-tongue shriek"
            },
            {
                "layout":"normal",
                "type":"Artifact — Equipment",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394579,
                "name":"Gate Smasher",
                "subtypes":[
                    "Equipment"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Filip Burburan",
                "manaCost":"{3}",
                "text":"Gate Smasher can be attached only to a creature with toughness 4 or greater.\nEquipped creature gets +3/+0 and has trample.\nEquip {3}",
                "number":"239",
                "imageName":"gate smasher"
            },
            {
                "layout":"normal",
                "type":"Creature — Elemental",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394580,
                "name":"Glade Watcher",
                "subtypes":[
                    "Elemental"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Jesper Ejsing",
                "power":"3",
                "toughness":"3",
                "manaCost":"{1}{G}",
                "text":"Defender\nFormidable — {G}: Glade Watcher can attack this turn as though it didn't have defender. Activate this ability only if creatures you control have total power 8 or greater.",
                "number":"188",
                "watermark":"Atarka",
                "imageName":"glade watcher"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394581,
                "name":"Glaring Aegis",
                "subtypes":[
                    "Aura"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Anthony Palumbo",
                "manaCost":"{W}",
                "text":"Enchant creature\nWhen Glaring Aegis enters the battlefield, tap target creature an opponent controls.\nEnchanted creature gets +1/+3.",
                "number":"18",
                "imageName":"glaring aegis"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394582,
                "name":"Gleam of Authority",
                "subtypes":[
                    "Aura"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Jakub Kasper",
                "manaCost":"{1}{W}",
                "text":"Enchant creature\nEnchanted creature gets +1/+1 for each +1/+1 counter on other creatures you control.\nEnchanted creature has vigilance and \"{W}, {T}: Bolster 1.\" (To bolster 1, choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "number":"19",
                "watermark":"Dromoka",
                "imageName":"gleam of authority"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394583,
                "name":"Glint",
                "cmc":2,
                "rarity":"Common",
                "artist":"Igor Kieryluk",
                "manaCost":"{1}{U}",
                "text":"Target creature you control gets +0/+3 and gains hexproof until end of turn. (It can't be the target of spells or abilities your opponents control.)",
                "flavor":"Rakshasa waste no opportunity to display their wealth and power, even in the midst of a sorcerous duel.",
                "number":"55",
                "imageName":"glint"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394584,
                "name":"Graceblade Artisan",
                "subtypes":[
                    "Human",
                    "Monk"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Magali Villeneuve",
                "power":"2",
                "toughness":"3",
                "manaCost":"{2}{W}",
                "text":"Graceblade Artisan gets +2/+2 for each Aura attached to it.",
                "flavor":"\"Can you catch a snowflake on the edge of your blade? Her sword has snagged an entire blizzard.\"\n—Zogye, Ojutai mystic",
                "number":"20",
                "watermark":"Ojutai",
                "imageName":"graceblade artisan"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394585,
                "name":"Gravepurge",
                "cmc":3,
                "rarity":"Common",
                "artist":"Nils Hamm",
                "manaCost":"{2}{B}",
                "text":"Put any number of target creature cards from your graveyard on top of your library.\nDraw a card.",
                "flavor":"\"Lord Silumgar has given you a second chance to please him.\"\n—Siara, the Dragon's Mouth",
                "number":"104",
                "imageName":"gravepurge"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394586,
                "name":"Great Teacher's Decree",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Zoltan Boros",
                "manaCost":"{3}{W}",
                "text":"Creatures you control get +2/+1 until end of turn.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"21",
                "watermark":"Ojutai",
                "imageName":"great teacher's decree"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394587,
                "name":"Guardian Shield-Bearer",
                "subtypes":[
                    "Human",
                    "Soldier"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Lindsey Look",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{G}",
                "text":"Megamorph {3}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Guardian Shield-Bearer is turned face up, put a +1/+1 counter on another target creature you control.",
                "number":"189",
                "watermark":"Dromoka",
                "imageName":"guardian shield-bearer"
            },
            {
                "layout":"normal",
                "type":"Creature — Salamander",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394588,
                "name":"Gudul Lurker",
                "subtypes":[
                    "Salamander"
                ],
                "cmc":1,
                "rarity":"Uncommon",
                "artist":"Christopher Burdett",
                "power":"1",
                "toughness":"1",
                "manaCost":"{U}",
                "text":"Gudul Lurker can't be blocked.\nMegamorph {U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"The small are mostly ignored by dragons.",
                "number":"56",
                "imageName":"gudul lurker"
            },
            {
                "layout":"normal",
                "type":"Creature — Naga Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394589,
                "name":"Gurmag Drowner",
                "subtypes":[
                    "Naga",
                    "Wizard"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Lake Hurwitz",
                "power":"2",
                "toughness":"4",
                "manaCost":"{3}{U}",
                "text":"Exploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Gurmag Drowner exploits a creature, look at the top four cards of your library. Put one of them into your hand and the rest into your graveyard.",
                "number":"57",
                "watermark":"Silumgar",
                "imageName":"gurmag drowner"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394590,
                "name":"Hand of Silumgar",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Lius Lasahido",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{B}",
                "text":"Deathtouch (Any amount of damage this deals to a creature is enough to destroy it.)",
                "flavor":"Silumgar trains those whom he favors in his magic, granting them the ability to spread his disdain across the land.",
                "number":"105",
                "watermark":"Silumgar",
                "imageName":"hand of silumgar"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red",
                    "Green"
                ],
                "multiverseid":394591,
                "name":"Harbinger of the Hunt",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":5,
                "rarity":"Rare",
                "artist":"Aaron Miller",
                "power":"5",
                "toughness":"3",
                "manaCost":"{3}{R}{G}",
                "text":"Flying\n{2}{R}: Harbinger of the Hunt deals 1 damage to each creature without flying.\n{2}{G}: Harbinger of the Hunt deals 1 damage to each other creature with flying.",
                "flavor":"An Atarka dragon's exhale cooks what its inhale consumes.",
                "number":"223",
                "watermark":"Atarka",
                "imageName":"harbinger of the hunt"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Berserker",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394592,
                "name":"Hardened Berserker",
                "subtypes":[
                    "Human",
                    "Berserker"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Viktor Titov",
                "power":"3",
                "toughness":"2",
                "manaCost":"{2}{R}",
                "text":"Whenever Hardened Berserker attacks, the next spell you cast this turn costs {1} less to cast.",
                "flavor":"\"Just let him loose and follow the charge.\"\n—Yikaro, Atarka warrior",
                "number":"139",
                "watermark":"Atarka",
                "imageName":"hardened berserker"
            },
            {
                "layout":"normal",
                "type":"Land",
                "types":[
                    "Land"
                ],
                "multiverseid":394593,
                "name":"Haven of the Spirit Dragon",
                "rarity":"Rare",
                "artist":"Raymond Swanland",
                "text":"{T}: Add {1} to your mana pool.\n{T}: Add one mana of any color to your mana pool. Spend this mana only to cast a Dragon creature spell.\n{2}, {T}, Sacrifice Haven of the Spirit Dragon: Return target Dragon creature card or Ugin planeswalker card from your graveyard to your hand.",
                "number":"249",
                "imageName":"haven of the spirit dragon"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394594,
                "name":"Hedonist's Trove",
                "cmc":7,
                "rarity":"Rare",
                "artist":"Peter Mohrbacher",
                "manaCost":"{5}{B}{B}",
                "text":"When Hedonist's Trove enters the battlefield, exile all cards from target opponent's graveyard.\nYou may play land cards exiled with Hedonist's Trove.\nYou may cast nonland cards exiled with Hedonist's Trove. You can't cast more than one spell this way each turn.",
                "number":"106",
                "imageName":"hedonist's trove"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394595,
                "name":"Herald of Dromoka",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Zack Stella",
                "power":"2",
                "toughness":"2",
                "manaCost":"{1}{W}",
                "text":"Vigilance\nOther Warrior creatures you control have vigilance.",
                "flavor":"The trumpeters of Arashin are ever alert in their watch over the Great Aerie.",
                "number":"22",
                "watermark":"Dromoka",
                "imageName":"herald of dromoka"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394596,
                "name":"Herdchaser Dragon",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Seb McKinnon",
                "power":"3",
                "toughness":"3",
                "manaCost":"{5}{G}",
                "text":"Flying, trample\nMegamorph {5}{G}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Herdchaser Dragon is turned face up, put a +1/+1 counter on each other Dragon creature you control.",
                "number":"190",
                "watermark":"Atarka",
                "imageName":"herdchaser dragon"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394597,
                "name":"Hidden Dragonslayer",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Anastasia Ovchinnikova",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{W}",
                "text":"Lifelink\nMegamorph {2}{W} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Hidden Dragonslayer is turned face up, destroy target creature with power 4 or greater an opponent controls.",
                "number":"23",
                "watermark":"Dromoka",
                "imageName":"hidden dragonslayer"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394598,
                "name":"Icefall Regent",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":5,
                "rarity":"Rare",
                "artist":"David Gaillet",
                "power":"4",
                "toughness":"3",
                "manaCost":"{3}{U}{U}",
                "text":"Flying\nWhen Icefall Regent enters the battlefield, tap target creature an opponent controls. That creature doesn't untap during its controller's untap step for as long as you control Icefall Regent. \nSpells your opponents cast that target Icefall Regent cost {2} more to cast.",
                "number":"58",
                "watermark":"Ojutai",
                "imageName":"icefall regent"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394599,
                "name":"Illusory Gains",
                "subtypes":[
                    "Aura"
                ],
                "cmc":5,
                "rarity":"Rare",
                "artist":"Kev Walker",
                "manaCost":"{3}{U}{U}",
                "text":"Enchant creature\nYou control enchanted creature.\nWhenever a creature enters the battlefield under an opponent's control, attach Illusory Gains to that creature.",
                "number":"59",
                "imageName":"illusory gains"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394600,
                "name":"Impact Tremors",
                "cmc":2,
                "rarity":"Common",
                "artist":"Lake Hurwitz",
                "manaCost":"{1}{R}",
                "text":"Whenever a creature enters the battlefield under your control, Impact Tremors deals 1 damage to each opponent.",
                "flavor":"\"If their ears are to the ground, we will make them bleed!\"\n—Taklai, Kolaghan warrior",
                "number":"140",
                "imageName":"impact tremors"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394601,
                "name":"Inspiring Call",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Dan Scott",
                "manaCost":"{2}{G}",
                "text":"Draw a card for each creature you control with a +1/+1 counter on it. Those creatures gain indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy them.)",
                "number":"191",
                "watermark":"Dromoka",
                "imageName":"inspiring call"
            },
            {
                "layout":"normal",
                "type":"Creature — Orc Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394602,
                "name":"Ire Shaman",
                "subtypes":[
                    "Orc",
                    "Shaman"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Jack Wang",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{R}",
                "text":"Ire Shaman can't be blocked except by two or more creatures.\nMegamorph {R} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Ire Shaman is turned face up, exile the top card of your library. Until end of turn, you may play that card.",
                "number":"141",
                "watermark":"Kolaghan",
                "imageName":"ire shaman"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Island",
                "types":[
                    "Land"
                ],
                "multiverseid":394605,
                "name":"Island",
                "subtypes":[
                    "Island"
                ],
                "rarity":"Basic Land",
                "artist":"Florian de Gesincourt",
                "number":"253",
                "variations":[
                    394603,
                    394604
                ],
                "imageName":"island1"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Island",
                "types":[
                    "Land"
                ],
                "multiverseid":394603,
                "name":"Island",
                "subtypes":[
                    "Island"
                ],
                "rarity":"Basic Land",
                "artist":"Florian de Gesincourt",
                "number":"254",
                "variations":[
                    394604,
                    394605
                ],
                "imageName":"island2"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Island",
                "types":[
                    "Land"
                ],
                "multiverseid":394604,
                "name":"Island",
                "subtypes":[
                    "Island"
                ],
                "rarity":"Basic Land",
                "artist":"Adam Paquette",
                "number":"255",
                "variations":[
                    394603,
                    394605
                ],
                "imageName":"island3"
            },
            {
                "layout":"normal",
                "type":"Artifact Creature — Golem",
                "types":[
                    "Artifact",
                    "Creature"
                ],
                "multiverseid":394606,
                "name":"Keeper of the Lens",
                "subtypes":[
                    "Golem"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Ryan Barger",
                "power":"1",
                "toughness":"2",
                "manaCost":"{1}",
                "text":"You may look at face-down creatures you don't control. (You may do this at any time.)",
                "flavor":"\"It sees all, but it reveals what it sees only to a chosen few.\"\n—Taigam, Ojutai master",
                "number":"240",
                "imageName":"keeper of the lens"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394607,
                "name":"Kindled Fury",
                "cmc":1,
                "rarity":"Common",
                "artist":"Dan Scott",
                "manaCost":"{R}",
                "text":"Target creature gets +1/+0 and gains first strike until end of turn.",
                "flavor":"\"It is most honorable to use every part of the animals we kill . . . especially if we use them to annihilate our enemies.\"\n—Surrak, the Hunt Caller",
                "number":"142",
                "imageName":"kindled fury"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394608,
                "name":"Kolaghan Aspirant",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Aaron Miller",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{R}",
                "text":"Whenever Kolaghan Aspirant becomes blocked by a creature, Kolaghan Aspirant deals 1 damage to that creature.",
                "flavor":"She answers the call of the Crave, the desire for battle sated only by bloodshed.",
                "number":"143",
                "watermark":"Kolaghan",
                "imageName":"kolaghan aspirant"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Berserker",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394609,
                "name":"Kolaghan Forerunners",
                "subtypes":[
                    "Human",
                    "Berserker"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Jason A. Engle",
                "power":"*",
                "toughness":"3",
                "manaCost":"{2}{R}",
                "text":"Trample\nKolaghan Forerunners's power is equal to the number of creatures you control.\nDash {2}{R} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"144",
                "watermark":"Kolaghan",
                "imageName":"kolaghan forerunners"
            },
            {
                "layout":"normal",
                "type":"Artifact",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394610,
                "name":"Kolaghan Monument",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Daniel Ljunggren",
                "manaCost":"{3}",
                "text":"{T}: Add {B} or {R} to your mana pool.\n{4}{B}{R}: Kolaghan Monument becomes a 4/4 black and red Dragon artifact creature with flying until end of turn.",
                "flavor":"Kolaghan has no lasting home, but her disciples leave relics to mark her conquests.",
                "number":"241",
                "watermark":"Kolaghan",
                "imageName":"kolaghan monument"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394611,
                "name":"Kolaghan Skirmisher",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Anthony Palumbo",
                "power":"2",
                "toughness":"2",
                "manaCost":"{1}{B}",
                "text":"Dash {2}{B} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "flavor":"Kolaghan's army rushes from kill to kill, desperate to avoid the dragon's wrath.",
                "number":"107",
                "watermark":"Kolaghan",
                "imageName":"kolaghan skirmisher"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394612,
                "name":"Kolaghan Stormsinger",
                "subtypes":[
                    "Human",
                    "Shaman"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Scott Murphy",
                "power":"1",
                "toughness":"1",
                "manaCost":"{R}",
                "text":"Haste\nMegamorph {R} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Kolaghan Stormsinger is turned face up, target creature gains haste until end of turn.",
                "number":"145",
                "watermark":"Kolaghan",
                "imageName":"kolaghan stormsinger"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black",
                    "Red"
                ],
                "multiverseid":394613,
                "name":"Kolaghan's Command",
                "cmc":3,
                "rarity":"Rare",
                "artist":"Daarken",
                "manaCost":"{1}{B}{R}",
                "text":"Choose two —\n• Return target creature card from your graveyard to your hand.\n• Target player discards a card.\n• Destroy target artifact.\n• Kolaghan's Command deals 2 damage to target creature or player.",
                "number":"224",
                "watermark":"Kolaghan",
                "imageName":"kolaghan's command"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394614,
                "name":"Learn from the Past",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Chase Stone",
                "manaCost":"{3}{U}",
                "text":"Target player shuffles his or her graveyard into his or her library.\nDraw a card.",
                "flavor":"\"I've been told my whole life that the great Ojutai holds all knowledge, but I wonder what our forebears knew.\"\n—Narset",
                "number":"60",
                "imageName":"learn from the past"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Berserker",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394615,
                "name":"Lightning Berserker",
                "subtypes":[
                    "Human",
                    "Berserker"
                ],
                "cmc":1,
                "rarity":"Uncommon",
                "artist":"Joseph Meehan",
                "power":"1",
                "toughness":"1",
                "manaCost":"{R}",
                "text":"{R}: Lightning Berserker gets +1/+0 until end of turn.\nDash {R} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"146",
                "watermark":"Kolaghan",
                "imageName":"lightning berserker"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394616,
                "name":"Lightwalker",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Winona Nelson",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{W}",
                "text":"Lightwalker has flying as long as it has a +1/+1 counter on it.",
                "flavor":"\"The greatest gift Dromoka gives is the ability to fly without wings.\"\n—Urdnan, Dromoka warrior",
                "number":"24",
                "watermark":"Dromoka",
                "imageName":"lightwalker"
            },
            {
                "layout":"normal",
                "type":"Creature — Avatar",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394617,
                "name":"Living Lore",
                "subtypes":[
                    "Avatar"
                ],
                "cmc":4,
                "rarity":"Rare",
                "artist":"Jason Felix",
                "power":"*",
                "toughness":"*",
                "manaCost":"{3}{U}",
                "text":"As Living Lore enters the battlefield, exile an instant or sorcery card from your graveyard.\nLiving Lore's power and toughness are each equal to the exiled card's converted mana cost.\nWhenever Living Lore deals combat damage, you may sacrifice it. If you do, you may cast the exiled card without paying its mana cost.",
                "number":"61",
                "watermark":"Ojutai",
                "imageName":"living lore"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394618,
                "name":"Lose Calm",
                "cmc":4,
                "rarity":"Common",
                "artist":"Jason A. Engle",
                "manaCost":"{3}{R}",
                "text":"Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn and can't be blocked this turn except by two or more creatures.",
                "flavor":"A lifetime of discipline forsaken in a moment of rage.",
                "number":"147",
                "imageName":"lose calm"
            },
            {
                "layout":"normal",
                "type":"Creature — Cat Beast",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394619,
                "name":"Lurking Arynx",
                "subtypes":[
                    "Cat",
                    "Beast"
                ],
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"Carl Frank",
                "power":"3",
                "toughness":"5",
                "manaCost":"{4}{G}",
                "text":"Formidable — {2}{G}: Target creature blocks Lurking Arynx this turn if able. Activate this ability only if creatures you control have total power 8 or greater.",
                "flavor":"Once it has your scent, it will hunt you from the Gurmag Swamp to Ayagor.",
                "number":"192",
                "watermark":"Atarka",
                "imageName":"lurking arynx"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394620,
                "name":"Magmatic Chasm",
                "cmc":2,
                "rarity":"Common",
                "artist":"Volkan Baga",
                "manaCost":"{1}{R}",
                "text":"Creatures without flying can't block this turn.",
                "flavor":"\"Our shamans assert their mastery over the land, thwarting the lesser clans' attempts to stand in the way of our dragonlord.\"\n—Allek, Atarka hunter",
                "number":"148",
                "imageName":"magmatic chasm"
            },
            {
                "layout":"normal",
                "type":"Creature — Skeleton",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394621,
                "name":"Marang River Skeleton",
                "subtypes":[
                    "Skeleton"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Jack Wang",
                "power":"1",
                "toughness":"1",
                "manaCost":"{1}{B}",
                "text":"{B}: Regenerate Marang River Skeleton.\nMegamorph {3}{B} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"The gurgling of the Marang conceals both footsteps and screams.",
                "number":"108",
                "watermark":"Silumgar",
                "imageName":"marang river skeleton"
            },
            {
                "layout":"normal",
                "type":"Creature — Zombie Ogre",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394622,
                "name":"Marsh Hulk",
                "subtypes":[
                    "Zombie",
                    "Ogre"
                ],
                "cmc":6,
                "rarity":"Common",
                "artist":"Raf Sarmento",
                "power":"4",
                "toughness":"6",
                "manaCost":"{4}{B}{B}",
                "text":"Megamorph {6}{B} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"Now vengeance is his sole purpose.",
                "number":"109",
                "imageName":"marsh hulk"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394623,
                "name":"Mind Rot",
                "cmc":3,
                "rarity":"Common",
                "artist":"Clint Cearley",
                "manaCost":"{2}{B}",
                "text":"Target player discards two cards.",
                "flavor":"\"The Ojutai are my favorite victims. They have so much knowledge to lose.\"\n—Asmala, Silumgar sorcerer",
                "number":"110",
                "imageName":"mind rot"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394624,
                "name":"Minister of Pain",
                "subtypes":[
                    "Human",
                    "Shaman"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Izzy",
                "power":"2",
                "toughness":"3",
                "manaCost":"{2}{B}",
                "text":"Exploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Minister of Pain exploits a creature, creatures your opponents control get -1/-1 until end of turn.",
                "flavor":"Draconic words need not be shouted. A whisper will suffice.",
                "number":"111",
                "watermark":"Silumgar",
                "imageName":"minister of pain"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394625,
                "name":"Mirror Mockery",
                "subtypes":[
                    "Aura"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Ryan Alexander Lee",
                "manaCost":"{1}{U}",
                "text":"Enchant creature\nWhenever enchanted creature attacks, you may put a token onto the battlefield that's a copy of that creature. Exile that token at end of combat.",
                "flavor":"Who you are constantly runs toward who you will be.",
                "number":"62",
                "imageName":"mirror mockery"
            },
            {
                "layout":"normal",
                "type":"Creature — Kirin",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394626,
                "name":"Misthoof Kirin",
                "subtypes":[
                    "Kirin"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Ryan Barger",
                "power":"2",
                "toughness":"1",
                "manaCost":"{2}{W}",
                "text":"Flying, vigilance\nMegamorph {1}{W} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"It heralded Sarkhan's return to Tarkir's present.",
                "number":"25",
                "imageName":"misthoof kirin"
            },
            {
                "layout":"normal",
                "type":"Creature — Djinn Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394627,
                "name":"Monastery Loremaster",
                "subtypes":[
                    "Djinn",
                    "Wizard"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Ryan Alexander Lee",
                "power":"3",
                "toughness":"2",
                "manaCost":"{3}{U}",
                "text":"Megamorph {5}{U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Monastery Loremaster is turned face up, return target noncreature, nonland card from your graveyard to your hand.",
                "number":"63",
                "watermark":"Ojutai",
                "imageName":"monastery loremaster"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Mountain",
                "types":[
                    "Land"
                ],
                "multiverseid":394628,
                "name":"Mountain",
                "subtypes":[
                    "Mountain"
                ],
                "rarity":"Basic Land",
                "artist":"Noah Bradley",
                "number":"259",
                "variations":[
                    394629,
                    394630
                ],
                "imageName":"mountain1"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Mountain",
                "types":[
                    "Land"
                ],
                "multiverseid":394630,
                "name":"Mountain",
                "subtypes":[
                    "Mountain"
                ],
                "rarity":"Basic Land",
                "artist":"Noah Bradley",
                "number":"260",
                "variations":[
                    394628,
                    394629
                ],
                "imageName":"mountain2"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Mountain",
                "types":[
                    "Land"
                ],
                "multiverseid":394629,
                "name":"Mountain",
                "subtypes":[
                    "Mountain"
                ],
                "rarity":"Basic Land",
                "artist":"Titus Lunter",
                "number":"261",
                "variations":[
                    394628,
                    394630
                ],
                "imageName":"mountain3"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394631,
                "name":"Mystic Meditation",
                "cmc":4,
                "rarity":"Common",
                "artist":"Howard Lyon",
                "manaCost":"{3}{U}",
                "text":"Draw three cards. Then discard two cards unless you discard a creature card.",
                "flavor":"\"Still the mind and quiet the heart. Only then will you hear the Multiverse's great truths.\"\n—Narset",
                "number":"64",
                "imageName":"mystic meditation"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394632,
                "name":"Myth Realized",
                "cmc":1,
                "rarity":"Rare",
                "artist":"Jason Rainville",
                "manaCost":"{W}",
                "text":"Whenever you cast a noncreature spell, put a lore counter on Myth Realized.\n{2}{W}: Put a lore counter on Myth Realized.\n{W}: Until end of turn, Myth Realized becomes a Monk Avatar creature in addition to its other types and gains \"This creature's power and toughness are each equal to the number of lore counters on it.\"",
                "number":"26",
                "watermark":"Ojutai",
                "imageName":"myth realized"
            },
            {
                "layout":"normal",
                "type":"Planeswalker — Narset",
                "types":[
                    "Planeswalker"
                ],
                "colors":[
                    "White",
                    "Blue"
                ],
                "multiverseid":394633,
                "name":"Narset Transcendent",
                "subtypes":[
                    "Narset"
                ],
                "cmc":4,
                "rarity":"Mythic Rare",
                "artist":"Magali Villeneuve",
                "loyalty":6,
                "manaCost":"{2}{W}{U}",
                "text":"+1: Look at the top card of your library. If it's a noncreature, nonland card, you may reveal it and put it into your hand.\n−2: When you cast your next instant or sorcery spell from your hand this turn, it gains rebound.\n−9: You get an emblem with \"Your opponents can't cast noncreature spells.\"",
                "number":"225",
                "imageName":"narset transcendent"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394634,
                "name":"Naturalize",
                "cmc":2,
                "rarity":"Common",
                "artist":"James Paick",
                "manaCost":"{1}{G}",
                "text":"Destroy target artifact or enchantment.",
                "flavor":"The remains of ancient civilizations litter the run-down land.",
                "number":"193",
                "imageName":"naturalize"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue",
                    "Black"
                ],
                "multiverseid":394635,
                "name":"Necromaster Dragon",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":5,
                "rarity":"Rare",
                "artist":"Mark Zug",
                "power":"4",
                "toughness":"4",
                "manaCost":"{3}{U}{B}",
                "text":"Flying\nWhenever Necromaster Dragon deals combat damage to a player, you may pay {2}. If you do, put a 2/2 black Zombie creature token onto the battlefield and each opponent puts the top two cards of his or her library into his or her graveyard.",
                "number":"226",
                "watermark":"Silumgar",
                "imageName":"necromaster dragon"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394636,
                "name":"Negate",
                "cmc":2,
                "rarity":"Common",
                "artist":"Willian Murai",
                "manaCost":"{1}{U}",
                "text":"Counter target noncreature spell.",
                "flavor":"\"You cannot be an Ojutai monk. They prize wisdom and skill, and you have neither.\"\n—Siara, the Dragon's Mouth",
                "number":"65",
                "imageName":"negate"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394637,
                "name":"Obscuring Æther",
                "cmc":1,
                "rarity":"Rare",
                "artist":"Min Yum",
                "manaCost":"{G}",
                "text":"Face-down creature spells you cast cost {1} less to cast.\n{1}{G}: Turn Obscuring Æther face down. (It becomes a 2/2 creature.)",
                "number":"194",
                "imageName":"obscuring aether"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394638,
                "name":"Ojutai Exemplars",
                "subtypes":[
                    "Human",
                    "Monk"
                ],
                "cmc":4,
                "rarity":"Mythic Rare",
                "artist":"Willian Murai",
                "power":"4",
                "toughness":"4",
                "manaCost":"{2}{W}{W}",
                "text":"Whenever you cast a noncreature spell, choose one —\n• Tap target creature.\n• Ojutai Exemplars gains first strike and lifelink until end of turn.\n• Exile Ojutai Exemplars, then return it to the battlefield tapped under its owner's control.",
                "number":"27",
                "watermark":"Ojutai",
                "imageName":"ojutai exemplars"
            },
            {
                "layout":"normal",
                "type":"Creature — Bird Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394639,
                "name":"Ojutai Interceptor",
                "subtypes":[
                    "Bird",
                    "Soldier"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Johann Bodin",
                "power":"3",
                "toughness":"1",
                "manaCost":"{3}{U}",
                "text":"Flying\nMegamorph {3}{U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"\"Though I may soar, I could never fly as high as the dragons.\"",
                "number":"66",
                "watermark":"Ojutai",
                "imageName":"ojutai interceptor"
            },
            {
                "layout":"normal",
                "type":"Artifact",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394640,
                "name":"Ojutai Monument",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Daniel Ljunggren",
                "manaCost":"{3}",
                "text":"{T}: Add {W} or {U} to your mana pool.\n{4}{W}{U}: Ojutai Monument becomes a 4/4 white and blue Dragon artifact creature with flying until end of turn.",
                "flavor":"Ojutai spends time at all his strongholds, but he most favors Cori Stronghold for his meditation.",
                "number":"242",
                "watermark":"Ojutai",
                "imageName":"ojutai monument"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394641,
                "name":"Ojutai's Breath",
                "cmc":3,
                "rarity":"Common",
                "artist":"Kev Walker",
                "manaCost":"{2}{U}",
                "text":"Tap target creature. It doesn't untap during its controller's next untap step.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"67",
                "watermark":"Ojutai",
                "imageName":"ojutai's breath"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White",
                    "Blue"
                ],
                "multiverseid":394642,
                "name":"Ojutai's Command",
                "cmc":4,
                "rarity":"Rare",
                "artist":"Willian Murai",
                "manaCost":"{2}{W}{U}",
                "text":"Choose two —\n• Return target creature card with converted mana cost 2 or less from your graveyard to the battlefield.\n• You gain 4 life.\n• Counter target creature spell.\n• Draw a card.",
                "number":"227",
                "watermark":"Ojutai",
                "imageName":"ojutai's command"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394643,
                "name":"Ojutai's Summons",
                "cmc":5,
                "rarity":"Common",
                "artist":"Jakub Kasper",
                "manaCost":"{3}{U}{U}",
                "text":"Put a 2/2 blue Djinn Monk creature token with flying onto the battlefield.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"68",
                "watermark":"Ojutai",
                "imageName":"ojutai's summons"
            },
            {
                "layout":"normal",
                "type":"Creature — Bird Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394644,
                "name":"Orator of Ojutai",
                "subtypes":[
                    "Bird",
                    "Monk"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Zack Stella",
                "power":"0",
                "toughness":"4",
                "manaCost":"{1}{W}",
                "text":"As an additional cost to cast Orator of Ojutai, you may reveal a Dragon card from your hand.\nDefender, flying\nWhen Orator of Ojutai enters the battlefield, if you revealed a Dragon card or controlled a Dragon as you cast Orator of Ojutai, draw a card.",
                "number":"28",
                "watermark":"Ojutai",
                "imageName":"orator of ojutai"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394645,
                "name":"Pacifism",
                "subtypes":[
                    "Aura"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Mark Zug",
                "manaCost":"{1}{W}",
                "text":"Enchant creature\nEnchanted creature can't attack or block.",
                "flavor":"\"If I fight, I might step on a butterfly. That would be sad.\"\n—Krowg of Qal Sisma",
                "number":"29",
                "imageName":"pacifism"
            },
            {
                "layout":"normal",
                "type":"Creature — Bird",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394646,
                "name":"Palace Familiar",
                "subtypes":[
                    "Bird"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Kev Walker",
                "power":"1",
                "toughness":"1",
                "manaCost":"{1}{U}",
                "text":"Flying\nWhen Palace Familiar dies, draw a card.",
                "flavor":"\"The most profound secrets lie in the darkest places of the world. It can be prudent to make use of another set of eyes.\"\n—Sidisi, Silumgar vizier",
                "number":"69",
                "watermark":"Silumgar",
                "imageName":"palace familiar"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394647,
                "name":"Pinion Feast",
                "cmc":5,
                "rarity":"Common",
                "artist":"Ryan Barger",
                "manaCost":"{4}{G}",
                "text":"Destroy target creature with flying. Bolster 2. (Choose a creature with the least toughness among creatures you control and put two +1/+1 counters on it.)",
                "flavor":"\"Even paradise is not without tragedies.\"\n—Sarkhan Vol",
                "number":"195",
                "watermark":"Dromoka",
                "imageName":"pinion feast"
            },
            {
                "layout":"normal",
                "type":"Creature — Orc Berserker",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394648,
                "name":"Pitiless Horde",
                "subtypes":[
                    "Orc",
                    "Berserker"
                ],
                "cmc":3,
                "rarity":"Rare",
                "artist":"Viktor Titov",
                "power":"5",
                "toughness":"3",
                "manaCost":"{2}{B}",
                "text":"At the beginning of your upkeep, you lose 2 life.\nDash {2}{B}{B} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"112",
                "watermark":"Kolaghan",
                "imageName":"pitiless horde"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Plains",
                "types":[
                    "Land"
                ],
                "multiverseid":394649,
                "name":"Plains",
                "subtypes":[
                    "Plains"
                ],
                "rarity":"Basic Land",
                "artist":"Sam Burley",
                "number":"250",
                "variations":[
                    394650,
                    394651
                ],
                "imageName":"plains1"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Plains",
                "types":[
                    "Land"
                ],
                "multiverseid":394650,
                "name":"Plains",
                "subtypes":[
                    "Plains"
                ],
                "rarity":"Basic Land",
                "artist":"Sam Burley",
                "number":"251",
                "variations":[
                    394649,
                    394651
                ],
                "imageName":"plains2"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Plains",
                "types":[
                    "Land"
                ],
                "multiverseid":394651,
                "name":"Plains",
                "subtypes":[
                    "Plains"
                ],
                "rarity":"Basic Land",
                "artist":"Florian de Gesincourt",
                "number":"252",
                "variations":[
                    394649,
                    394650
                ],
                "imageName":"plains3"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394652,
                "name":"Press the Advantage",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Marco Nelor",
                "manaCost":"{2}{G}{G}",
                "text":"Up to two target creatures each get +2/+2 and gain trample until end of turn.",
                "flavor":"\"Show your enemies as much mercy as they would show you.\"\n—Surrak, the Hunt Caller",
                "number":"196",
                "imageName":"press the advantage"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White",
                    "Blue"
                ],
                "multiverseid":394653,
                "name":"Pristine Skywise",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Rare",
                "artist":"Adam Paquette",
                "power":"6",
                "toughness":"4",
                "manaCost":"{4}{W}{U}",
                "text":"Flying\nWhenever you cast a noncreature spell, untap Pristine Skywise. It gains protection from the color of your choice until end of turn.",
                "flavor":"The elite of Ojutai's brood, the skywise see their enemies as puzzles to be solved.",
                "number":"228",
                "watermark":"Ojutai",
                "imageName":"pristine skywise"
            },
            {
                "layout":"normal",
                "type":"Creature — Naga Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394654,
                "name":"Profaner of the Dead",
                "subtypes":[
                    "Naga",
                    "Wizard"
                ],
                "cmc":4,
                "rarity":"Rare",
                "artist":"Vincent Proce",
                "power":"3",
                "toughness":"3",
                "manaCost":"{3}{U}",
                "text":"Exploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Profaner of the Dead exploits a creature, return to their owners' hands all creatures your opponents control with toughness less than the exploited creature's toughness.",
                "number":"70",
                "watermark":"Silumgar",
                "imageName":"profaner of the dead"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394655,
                "name":"Profound Journey",
                "cmc":7,
                "rarity":"Rare",
                "artist":"Tomasz Jedruszek",
                "manaCost":"{5}{W}{W}",
                "text":"Return target permanent card from your graveyard to the battlefield.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"30",
                "watermark":"Ojutai",
                "imageName":"profound journey"
            },
            {
                "layout":"normal",
                "type":"Creature — Ogre Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394656,
                "name":"Qal Sisma Behemoth",
                "subtypes":[
                    "Ogre",
                    "Warrior"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Evan Shipard",
                "power":"5",
                "toughness":"5",
                "manaCost":"{2}{R}",
                "text":"Qal Sisma Behemoth can't attack or block unless you pay {2}.",
                "flavor":"\"It hunts grand game for Atarka, and when the time comes, it will become a mighty feast.\"\n—Surrak, the Hunt Caller",
                "number":"149",
                "watermark":"Atarka",
                "imageName":"qal sisma behemoth"
            },
            {
                "layout":"normal",
                "type":"Creature — Naga Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394657,
                "name":"Qarsi Deceiver",
                "subtypes":[
                    "Naga",
                    "Wizard"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Raymond Swanland",
                "power":"0",
                "toughness":"4",
                "manaCost":"{1}{U}",
                "text":"{T}: Add {1} to your mana pool. Spend this mana only to cast a face-down creature spell, pay a mana cost to turn a manifested creature face up, or pay a morph cost. (A megamorph cost is a morph cost.)",
                "number":"71",
                "watermark":"Silumgar",
                "imageName":"qarsi deceiver"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Cleric",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394658,
                "name":"Qarsi Sadist",
                "subtypes":[
                    "Human",
                    "Cleric"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"Volkan Baga",
                "power":"1",
                "toughness":"3",
                "manaCost":"{1}{B}",
                "text":"Exploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Qarsi Sadist exploits a creature, target opponent loses 2 life and you gain 2 life.",
                "flavor":"Dying for the greater good still hurts.",
                "number":"113",
                "watermark":"Silumgar",
                "imageName":"qarsi sadist"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394659,
                "name":"Radiant Purge",
                "cmc":2,
                "rarity":"Rare",
                "artist":"Igor Kieryluk",
                "manaCost":"{1}{W}",
                "text":"Exile target multicolored creature or multicolored enchantment.",
                "flavor":"The Shifting Wastes are Dromoka's domain. She will not tolerate intruders.",
                "number":"31",
                "imageName":"radiant purge"
            },
            {
                "layout":"normal",
                "type":"Creature — Cat Demon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394660,
                "name":"Rakshasa Gravecaller",
                "subtypes":[
                    "Cat",
                    "Demon"
                ],
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"Jakub Kasper",
                "power":"3",
                "toughness":"6",
                "manaCost":"{4}{B}",
                "text":"Exploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Rakshasa Gravecaller exploits a creature, put two 2/2 black Zombie creature tokens onto the battlefield.",
                "flavor":"Debts to rakshasa linger beyond death.",
                "number":"114",
                "watermark":"Silumgar",
                "imageName":"rakshasa gravecaller"
            },
            {
                "layout":"normal",
                "type":"Creature — Imp",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394661,
                "name":"Reckless Imp",
                "subtypes":[
                    "Imp"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Torstein Nordstrand",
                "power":"2",
                "toughness":"2",
                "manaCost":"{2}{B}",
                "text":"Flying\nReckless Imp can't block.\nDash {1}{B} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"115",
                "watermark":"Kolaghan",
                "imageName":"reckless imp"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394662,
                "name":"Reduce in Stature",
                "subtypes":[
                    "Aura"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Dan Scott",
                "manaCost":"{2}{U}",
                "text":"Enchant creature\nEnchanted creature has base power and toughness 0/2.",
                "flavor":"A dragon learns humility only in the moments before its death.",
                "number":"72",
                "imageName":"reduce in stature"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394663,
                "name":"Rending Volley",
                "cmc":1,
                "rarity":"Uncommon",
                "artist":"Lucas Graciano",
                "manaCost":"{R}",
                "text":"Rending Volley can't be countered by spells or abilities.\nRending Volley deals 4 damage to target white or blue creature.",
                "flavor":"The sky offers few hiding places.",
                "number":"150",
                "imageName":"rending volley"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394664,
                "name":"Resupply",
                "cmc":6,
                "rarity":"Common",
                "artist":"Filip Burburan",
                "manaCost":"{5}{W}",
                "text":"You gain 6 life.\nDraw a card.",
                "flavor":"\"If the scalelords are the brains of Dromoka's army, the supply caravans are its beating heart.\"\n—Baihir, Dromoka mage",
                "number":"32",
                "imageName":"resupply"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394665,
                "name":"Revealing Wind",
                "cmc":3,
                "rarity":"Common",
                "artist":"Phill Simmer",
                "manaCost":"{2}{G}",
                "text":"Prevent all combat damage that would be dealt this turn. You may look at each face-down creature that's attacking or blocking.",
                "flavor":"\"The sands obscure the vision of others, but clarify ours.\"\n—Faiso, Dromoka commander",
                "number":"197",
                "imageName":"revealing wind"
            },
            {
                "layout":"normal",
                "type":"Creature — Zombie Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394666,
                "name":"Risen Executioner",
                "subtypes":[
                    "Zombie",
                    "Warrior"
                ],
                "cmc":4,
                "rarity":"Mythic Rare",
                "artist":"Craig J Spearing",
                "power":"4",
                "toughness":"3",
                "manaCost":"{2}{B}{B}",
                "text":"Risen Executioner can't block.\nOther Zombie creatures you control get +1/+1.\nYou may cast Risen Executioner from your graveyard if you pay {1} more to cast it for each other creature card in your graveyard.",
                "number":"116",
                "watermark":"Silumgar",
                "imageName":"risen executioner"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394667,
                "name":"Roast",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Zoltan Boros",
                "manaCost":"{1}{R}",
                "text":"Roast deals 5 damage to target creature without flying.",
                "flavor":"\"Intruders in the lands of Atarka have but two choices: be consumed by fire, or be consumed by maw.\"\n—Ulnok, Atarka shaman",
                "number":"151",
                "imageName":"roast"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue",
                    "Black"
                ],
                "multiverseid":394668,
                "name":"Ruthless Deathfang",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Filip Burburan",
                "power":"4",
                "toughness":"4",
                "manaCost":"{4}{U}{B}",
                "text":"Flying\nWhenever you sacrifice a creature, target opponent sacrifices a creature.",
                "flavor":"\"Bring forth the dead, their skull-grins and rattle-bones. We will feast upon their wailing ghosts.\"\n—Silumgar, translated from Draconic",
                "number":"229",
                "watermark":"Silumgar",
                "imageName":"ruthless deathfang"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394669,
                "name":"Sabertooth Outrider",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Winona Nelson",
                "power":"4",
                "toughness":"2",
                "manaCost":"{3}{R}",
                "text":"Trample\nFormidable — Whenever Sabertooth Outrider attacks, if creatures you control have total power 8 or greater, Sabertooth Outrider gains first strike until end of turn.",
                "number":"152",
                "watermark":"Atarka",
                "imageName":"sabertooth outrider"
            },
            {
                "layout":"normal",
                "type":"Creature — Hound Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394670,
                "name":"Salt Road Ambushers",
                "subtypes":[
                    "Hound",
                    "Warrior"
                ],
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Joseph Meehan",
                "power":"3",
                "toughness":"3",
                "manaCost":"{3}{G}",
                "text":"Whenever another permanent you control is turned face up, if it's a creature, put two +1/+1 counters on it.\nMegamorph {3}{G}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "number":"198",
                "watermark":"Dromoka",
                "imageName":"salt road ambushers"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394671,
                "name":"Salt Road Quartermasters",
                "subtypes":[
                    "Human",
                    "Soldier"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Anthony Palumbo",
                "power":"1",
                "toughness":"1",
                "manaCost":"{2}{G}",
                "text":"Salt Road Quartermasters enters the battlefield with two +1/+1 counters on it.\n{2}{G}, Remove a +1/+1 counter from Salt Road Quartermasters: Put a +1/+1 counter on target creature.",
                "number":"199",
                "watermark":"Dromoka",
                "imageName":"salt road quartermasters"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394672,
                "name":"Sandcrafter Mage",
                "subtypes":[
                    "Human",
                    "Wizard"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Willian Murai",
                "power":"2",
                "toughness":"2",
                "manaCost":"{2}{W}",
                "text":"When Sandcrafter Mage enters the battlefield, bolster 1. (Choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "flavor":"With heat, sand can form a delicate work of art; with pressure, an impenetrable bulwark.",
                "number":"33",
                "watermark":"Dromoka",
                "imageName":"sandcrafter mage"
            },
            {
                "layout":"normal",
                "type":"Creature — Hound Scout",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394673,
                "name":"Sandsteppe Scavenger",
                "subtypes":[
                    "Hound",
                    "Scout"
                ],
                "cmc":5,
                "rarity":"Common",
                "artist":"Kieran Yanner",
                "power":"2",
                "toughness":"2",
                "manaCost":"{4}{G}",
                "text":"When Sandsteppe Scavenger enters the battlefield, bolster 2. (Choose a creature with the least toughness among creatures you control and put two +1/+1 counters on it.)",
                "flavor":"\"Sad what passes for a dragon among the Silumgar.\"",
                "number":"200",
                "watermark":"Dromoka",
                "imageName":"sandsteppe scavenger"
            },
            {
                "layout":"normal",
                "type":"Creature — Beast",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394674,
                "name":"Sandstorm Charger",
                "subtypes":[
                    "Beast"
                ],
                "cmc":5,
                "rarity":"Common",
                "artist":"Dave Kendall",
                "power":"3",
                "toughness":"4",
                "manaCost":"{4}{W}",
                "text":"Megamorph {4}{W} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"\"May our foes choke upon its horns!\"\n—Urdnan, Dromoka warrior",
                "number":"34",
                "watermark":"Dromoka",
                "imageName":"sandstorm charger"
            },
            {
                "layout":"normal",
                "type":"Planeswalker — Sarkhan",
                "types":[
                    "Planeswalker"
                ],
                "colors":[
                    "Blue",
                    "Red",
                    "Green"
                ],
                "multiverseid":394675,
                "name":"Sarkhan Unbroken",
                "subtypes":[
                    "Sarkhan"
                ],
                "cmc":5,
                "rarity":"Mythic Rare",
                "artist":"Aleksi Briclot",
                "loyalty":4,
                "manaCost":"{2}{G}{U}{R}",
                "text":"+1: Draw a card, then add one mana of any color to your mana pool.\n−2: Put a 4/4 red Dragon creature token with flying onto the battlefield.\n−8: Search your library for any number of Dragon creature cards and put them onto the battlefield. Then shuffle your library.",
                "number":"230",
                "imageName":"sarkhan unbroken"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394676,
                "name":"Sarkhan's Rage",
                "cmc":5,
                "rarity":"Common",
                "artist":"Chris Rahn",
                "manaCost":"{4}{R}",
                "text":"Sarkhan's Rage deals 5 damage to target creature or player. If you control no Dragons, Sarkhan's Rage deals 2 damage to you.",
                "flavor":"The people of Tarkir speak of an ancient legend, of the dragon-man called Sarkhan who was greatest of all khans.",
                "number":"153",
                "imageName":"sarkhan's rage"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394677,
                "name":"Sarkhan's Triumph",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Chris Rahn",
                "manaCost":"{2}{R}",
                "text":"Search your library for a Dragon creature card, reveal it, put it into your hand, then shuffle your library.",
                "flavor":"Sarkhan gazed on the world around him, the dragons sweeping through its skies, and joy kindled like a fire in his soul.",
                "number":"154",
                "imageName":"sarkhan's triumph"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red",
                    "Green"
                ],
                "multiverseid":394678,
                "name":"Savage Ventmaw",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Slawomir Maniak",
                "power":"4",
                "toughness":"4",
                "manaCost":"{4}{R}{G}",
                "text":"Flying\nWhenever Savage Ventmaw attacks, add {R}{R}{R}{G}{G}{G} to your mana pool. Until end of turn, this mana doesn't empty from your mana pool as steps and phases end.",
                "number":"231",
                "watermark":"Atarka",
                "imageName":"savage ventmaw"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394679,
                "name":"Scale Blessing",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Matt Stewart",
                "manaCost":"{3}{W}",
                "text":"Bolster 1, then put a +1/+1 counter on each creature you control with a +1/+1 counter on it. (To bolster 1, choose a creature with the least toughness among creatures you control and put a +1/+1 counter on it.)",
                "flavor":"\"Your bravery honors us all.\"\n—Dromoka, translated from Draconic",
                "number":"35",
                "watermark":"Dromoka",
                "imageName":"scale blessing"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394680,
                "name":"Scaleguard Sentinels",
                "subtypes":[
                    "Human",
                    "Soldier"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Matt Stewart",
                "power":"2",
                "toughness":"3",
                "manaCost":"{G}{G}",
                "text":"As an additional cost to cast Scaleguard Sentinels, you may reveal a Dragon card from your hand.\nScaleguard Sentinels enters the battlefield with a +1/+1 counter on it if you revealed a Dragon card or controlled a Dragon as you cast Scaleguard Sentinels.",
                "number":"201",
                "watermark":"Dromoka",
                "imageName":"scaleguard sentinels"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon Spirit",
                "types":[
                    "Creature"
                ],
                "multiverseid":394681,
                "name":"Scion of Ugin",
                "subtypes":[
                    "Dragon",
                    "Spirit"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Cliff Childs",
                "power":"4",
                "toughness":"4",
                "manaCost":"{6}",
                "text":"Flying",
                "flavor":"For hundreds of years Ugin slept, encased in the cocoon of stone and magic Sarkhan had created using a shard of a Zendikari hedron. As Ugin lay dormant, his spectral guardians kept vigil.",
                "number":"1",
                "imageName":"scion of ugin"
            },
            {
                "layout":"normal",
                "type":"Creature — Orc Berserker",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394682,
                "name":"Screamreach Brawler",
                "subtypes":[
                    "Orc",
                    "Berserker"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Slawomir Maniak",
                "power":"2",
                "toughness":"3",
                "manaCost":"{2}{R}",
                "text":"Dash {1}{R} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "flavor":"\"My dragonlord's lightning will dance upon your bones!\"",
                "number":"155",
                "watermark":"Kolaghan",
                "imageName":"screamreach brawler"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394683,
                "name":"Secure the Wastes",
                "cmc":1,
                "rarity":"Rare",
                "artist":"Scott Murphy",
                "manaCost":"{X}{W}",
                "text":"Put X 1/1 white Warrior creature tokens onto the battlefield.",
                "flavor":"\"The Shifting Wastes provide our clan eternal protection. It is our duty to return the favor.\"\n—Kadri, Dromoka warrior",
                "number":"36",
                "imageName":"secure the wastes"
            },
            {
                "layout":"normal",
                "type":"Creature — Insect",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394684,
                "name":"Segmented Krotiq",
                "subtypes":[
                    "Insect"
                ],
                "cmc":6,
                "rarity":"Common",
                "artist":"Christopher Moeller",
                "power":"6",
                "toughness":"5",
                "manaCost":"{5}{G}",
                "text":"Megamorph {6}{G} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"The list of things a krotiq eats is as long as the krotiq itself.",
                "number":"202",
                "imageName":"segmented krotiq"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394685,
                "name":"Seismic Rupture",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Jason A. Engle",
                "manaCost":"{2}{R}",
                "text":"Seismic Rupture deals 2 damage to each creature without flying.",
                "flavor":"The shaman opened the earth beneath their feet, trapping the survivors within the crevices of Ayagor for Atarka to devour at her leisure.",
                "number":"156",
                "imageName":"seismic rupture"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394686,
                "name":"Self-Inflicted Wound",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Mathias Kollros",
                "manaCost":"{1}{B}",
                "text":"Target opponent sacrifices a green or white creature. If that player does, he or she loses 2 life.",
                "flavor":"\"Worse than watching the cruelest deed is watching it done by your own hand.\"\n—Baihir, Dromoka mage",
                "number":"117",
                "imageName":"self-inflicted wound"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Soldier",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394687,
                "name":"Servant of the Scale",
                "subtypes":[
                    "Human",
                    "Soldier"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Winona Nelson",
                "power":"0",
                "toughness":"0",
                "manaCost":"{G}",
                "text":"Servant of the Scale enters the battlefield with a +1/+1 counter on it.\nWhen Servant of the Scale dies, put X +1/+1 counters on target creature you control, where X is the number of +1/+1 counters on Servant of the Scale.",
                "number":"203",
                "watermark":"Dromoka",
                "imageName":"servant of the scale"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394688,
                "name":"Shaman of Forgotten Ways",
                "subtypes":[
                    "Human",
                    "Shaman"
                ],
                "cmc":3,
                "rarity":"Mythic Rare",
                "artist":"Tyler Jacobson",
                "power":"2",
                "toughness":"3",
                "manaCost":"{2}{G}",
                "text":"{T}: Add two mana in any combination of colors to your mana pool. Spend this mana only to cast creature spells.\nFormidable — {9}{G}{G}, {T}: Each player's life total becomes the number of creatures he or she controls. Activate this ability only if creatures you control have total power 8 or greater.",
                "number":"204",
                "watermark":"Atarka",
                "imageName":"shaman of forgotten ways"
            },
            {
                "layout":"normal",
                "type":"Creature — Zombie Goblin",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394689,
                "name":"Shambling Goblin",
                "subtypes":[
                    "Zombie",
                    "Goblin"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Yeong-Hao Han",
                "power":"1",
                "toughness":"1",
                "manaCost":"{B}",
                "text":"When Shambling Goblin dies, target creature an opponent controls gets -1/-1 until end of turn.",
                "flavor":"\"The Kolaghan send them at us. We kill and raise them. They fight the next wave the Kolaghan send. It's a neat little cycle.\"\n—Asmala, Silumgar sorcerer",
                "number":"118",
                "watermark":"Silumgar",
                "imageName":"shambling goblin"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394690,
                "name":"Shape the Sands",
                "cmc":1,
                "rarity":"Common",
                "artist":"Ryan Yee",
                "manaCost":"{G}",
                "text":"Target creature gets +0/+5 and gains reach until end of turn. (It can block creatures with flying.)",
                "flavor":"\"Dragons in flight seldom expect company.\"\n—Kadri, Dromoka warrior",
                "number":"205",
                "imageName":"shape the sands"
            },
            {
                "layout":"normal",
                "type":"Enchantment — Aura",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394691,
                "name":"Sheltered Aerie",
                "subtypes":[
                    "Aura"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Raoul Vitale",
                "manaCost":"{2}{G}",
                "text":"Enchant land\nEnchanted land has \"{T}: Add two mana of any one color to your mana pool.\"",
                "flavor":"Dromoka's scalelords patrol the skies over Arashin, offering her people safety from the harsh world.",
                "number":"206",
                "imageName":"sheltered aerie"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394692,
                "name":"Shieldhide Dragon",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Chris Rallis",
                "power":"3",
                "toughness":"3",
                "manaCost":"{5}{W}",
                "text":"Flying, lifelink\nMegamorph {5}{W}{W} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Shieldhide Dragon is turned face up, put a +1/+1 counter on each other Dragon creature you control.",
                "number":"37",
                "watermark":"Dromoka",
                "imageName":"shieldhide dragon"
            },
            {
                "layout":"normal",
                "type":"Creature — Elemental",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394693,
                "name":"Shorecrasher Elemental",
                "subtypes":[
                    "Elemental"
                ],
                "cmc":3,
                "rarity":"Mythic Rare",
                "artist":"Igor Kieryluk",
                "power":"3",
                "toughness":"3",
                "manaCost":"{U}{U}{U}",
                "text":"{U}: Exile Shorecrasher Elemental, then return it to the battlefield face down under its owner's control.\n{1}: Shorecrasher Elemental gets +1/-1 or -1/+1 until end of turn. \nMegamorph {4}{U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "number":"73",
                "imageName":"shorecrasher elemental"
            },
            {
                "layout":"normal",
                "type":"Creature — Zombie",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394694,
                "name":"Sibsig Icebreakers",
                "subtypes":[
                    "Zombie"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Zoltan Boros",
                "power":"2",
                "toughness":"3",
                "manaCost":"{2}{B}",
                "text":"When Sibsig Icebreakers enters the battlefield, each player discards a card.",
                "flavor":"\"I almost envy them. They can't get frostbite.\"\n—Kirada, Silumgar enforcer",
                "number":"119",
                "watermark":"Silumgar",
                "imageName":"sibsig icebreakers"
            },
            {
                "layout":"normal",
                "type":"Creature — Naga Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394696,
                "name":"Sidisi's Faithful",
                "subtypes":[
                    "Naga",
                    "Wizard"
                ],
                "cmc":1,
                "rarity":"Common",
                "artist":"Lius Lasahido",
                "power":"0",
                "toughness":"4",
                "manaCost":"{U}",
                "text":"Exploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Sidisi's Faithful exploits a creature, return target creature to its owner's hand.",
                "flavor":"\"I tire of your prattle, and your face.\"",
                "number":"74",
                "watermark":"Silumgar",
                "imageName":"sidisi's faithful"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Zombie Naga",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394695,
                "name":"Sidisi, Undead Vizier",
                "subtypes":[
                    "Zombie",
                    "Naga"
                ],
                "cmc":5,
                "rarity":"Rare",
                "artist":"Min Yum",
                "power":"4",
                "toughness":"6",
                "manaCost":"{3}{B}{B}",
                "text":"Deathtouch\nExploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Sidisi, Undead Vizier exploits a creature, you may search your library for a card, put it into your hand, then shuffle your library.",
                "number":"120",
                "watermark":"Silumgar",
                "imageName":"sidisi, undead vizier"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394697,
                "name":"Sight Beyond Sight",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Anastasia Ovchinnikova",
                "manaCost":"{3}{U}",
                "text":"Look at the top two cards of your library. Put one of them into your hand and the other on the bottom of your library.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"75",
                "watermark":"Ojutai",
                "imageName":"sight beyond sight"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394698,
                "name":"Sight of the Scalelords",
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"Marc Simonetti",
                "manaCost":"{4}{G}",
                "text":"At the beginning of combat on your turn, creatures you control with toughness 4 or greater get +2/+2 and gain vigilance until end of turn.",
                "flavor":"\"The Silumgar creep around our borders and infiltrate our aeries. We must remain ever watchful.\"\n—Golran, Dromoka captain",
                "number":"207",
                "imageName":"sight of the scalelords"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394699,
                "name":"Silkwrap",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"David Gaillet",
                "manaCost":"{1}{W}",
                "text":"When Silkwrap enters the battlefield, exile target creature with converted mana cost 3 or less an opponent controls until Silkwrap leaves the battlefield. (That creature returns under its owner's control.)",
                "flavor":"Better scarves than scars.",
                "number":"38",
                "imageName":"silkwrap"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Assassin",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394700,
                "name":"Silumgar Assassin",
                "subtypes":[
                    "Human",
                    "Assassin"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Yohann Schepacz",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{B}",
                "text":"Creatures with power greater than Silumgar Assassin's power can't block it.\nMegamorph {2}{B} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Silumgar Assassin is turned face up, destroy target creature with power 3 or less an opponent controls.",
                "number":"121",
                "watermark":"Silumgar",
                "imageName":"silumgar assassin"
            },
            {
                "layout":"normal",
                "type":"Creature — Zombie Djinn",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394701,
                "name":"Silumgar Butcher",
                "subtypes":[
                    "Zombie",
                    "Djinn"
                ],
                "cmc":5,
                "rarity":"Common",
                "artist":"Dave Kendall",
                "power":"3",
                "toughness":"3",
                "manaCost":"{4}{B}",
                "text":"Exploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Silumgar Butcher exploits a creature, target creature gets -3/-3 until end of turn.",
                "flavor":"Silumgar takes pride in the diversity of his sibsig.",
                "number":"122",
                "watermark":"Silumgar",
                "imageName":"silumgar butcher"
            },
            {
                "layout":"normal",
                "type":"Artifact",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394702,
                "name":"Silumgar Monument",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Daniel Ljunggren",
                "manaCost":"{3}",
                "text":"{T}: Add {U} or {B} to your mana pool.\n{4}{U}{B}: Silumgar Monument becomes a 4/4 blue and black Dragon artifact creature with flying until end of turn.",
                "flavor":"Silumgar dominates his clan from a fortress on the Marang River, where he rests upon piles of treasure.",
                "number":"243",
                "watermark":"Silumgar",
                "imageName":"silumgar monument"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394703,
                "name":"Silumgar Sorcerer",
                "subtypes":[
                    "Human",
                    "Wizard"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Jeff Simpson",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{U}{U}",
                "text":"Flash (You may cast this spell any time you could cast an instant.)\nFlying\nExploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Silumgar Sorcerer exploits a creature, counter target creature spell.",
                "number":"76",
                "watermark":"Silumgar",
                "imageName":"silumgar sorcerer"
            },
            {
                "layout":"normal",
                "type":"Creature — Naga Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394704,
                "name":"Silumgar Spell-Eater",
                "subtypes":[
                    "Naga",
                    "Wizard"
                ],
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Dave Kendall",
                "power":"2",
                "toughness":"3",
                "manaCost":"{2}{U}",
                "text":"Megamorph {4}{U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Silumgar Spell-Eater is turned face up, counter target spell unless its controller pays {3}.",
                "number":"77",
                "watermark":"Silumgar",
                "imageName":"silumgar spell-eater"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue",
                    "Black"
                ],
                "multiverseid":394705,
                "name":"Silumgar's Command",
                "cmc":5,
                "rarity":"Rare",
                "artist":"Nils Hamm",
                "manaCost":"{3}{U}{B}",
                "text":"Choose two —\n• Counter target noncreature spell.\n• Return target permanent to its owner's hand.\n• Target creature gets -3/-3 until end of turn.\n• Destroy target planeswalker.",
                "number":"232",
                "watermark":"Silumgar",
                "imageName":"silumgar's command"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394706,
                "name":"Silumgar's Scorn",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Ryan Yee",
                "manaCost":"{U}{U}",
                "text":"As an additional cost to cast Silumgar's Scorn, you may reveal a Dragon card from your hand.\nCounter target spell unless its controller pays {1}. If you revealed a Dragon card or controlled a Dragon as you cast Silumgar's Scorn, counter that spell instead.",
                "number":"78",
                "watermark":"Silumgar",
                "imageName":"silumgar's scorn"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394707,
                "name":"Skywise Teachings",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Filip Burburan",
                "manaCost":"{3}{U}",
                "text":"Whenever you cast a noncreature spell, you may pay {1}{U}. If you do, put a 2/2 blue Djinn Monk creature token with flying onto the battlefield.",
                "flavor":"Ojutai's words must be translated from Draconic before his students can benefit from their wisdom.",
                "number":"79",
                "watermark":"Ojutai",
                "imageName":"skywise teachings"
            },
            {
                "layout":"normal",
                "type":"Artifact — Equipment",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394708,
                "name":"Spidersilk Net",
                "subtypes":[
                    "Equipment"
                ],
                "cmc":0,
                "rarity":"Common",
                "artist":"Steve Argyle",
                "manaCost":"{0}",
                "text":"Equipped creature gets +0/+2 and has reach. (It can block creatures with flying.)\nEquip {2} ({2}: Attach to target creature you control. Equip only as a sorcery.)",
                "flavor":"\"Dragons are our betters, but we will fight them if our dragonlord orders it.\"",
                "number":"244",
                "imageName":"spidersilk net"
            },
            {
                "layout":"normal",
                "type":"Creature — Ogre Berserker",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394709,
                "name":"Sprinting Warbrute",
                "subtypes":[
                    "Ogre",
                    "Berserker"
                ],
                "cmc":5,
                "rarity":"Common",
                "artist":"Lake Hurwitz",
                "power":"5",
                "toughness":"4",
                "manaCost":"{4}{R}",
                "text":"Sprinting Warbrute attacks each turn if able.\nDash {3}{R} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"157",
                "watermark":"Kolaghan",
                "imageName":"sprinting warbrute"
            },
            {
                "layout":"normal",
                "type":"Creature — Elk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394710,
                "name":"Stampeding Elk Herd",
                "subtypes":[
                    "Elk"
                ],
                "cmc":5,
                "rarity":"Common",
                "artist":"Carl Frank",
                "power":"5",
                "toughness":"5",
                "manaCost":"{3}{G}{G}",
                "text":"Formidable — Whenever Stampeding Elk Herd attacks, if creatures you control have total power 8 or greater, creatures you control gain trample until end of turn.",
                "flavor":"The Atarka use them not just for food, but also to clear away snow, trees, and enemy forces.",
                "number":"208",
                "watermark":"Atarka",
                "imageName":"stampeding elk herd"
            },
            {
                "layout":"normal",
                "type":"Creature — Elemental",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394711,
                "name":"Stormcrag Elemental",
                "subtypes":[
                    "Elemental"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Ralph Horsley",
                "power":"5",
                "toughness":"5",
                "manaCost":"{5}{R}",
                "text":"Trample\nMegamorph {4}{R}{R} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)",
                "flavor":"The storms of Tarkir awaken more than dragons.",
                "number":"158",
                "imageName":"stormcrag elemental"
            },
            {
                "layout":"normal",
                "type":"Artifact — Equipment",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394712,
                "name":"Stormrider Rig",
                "subtypes":[
                    "Equipment"
                ],
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Min Yum",
                "manaCost":"{2}",
                "text":"Equipped creature gets +1/+1.\nWhenever a creature enters the battlefield under your control, you may attach Stormrider Rig to it.\nEquip {2}",
                "number":"245",
                "imageName":"stormrider rig"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394713,
                "name":"Stormwing Dragon",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Svetlin Velinov",
                "power":"3",
                "toughness":"3",
                "manaCost":"{5}{R}",
                "text":"Flying, first strike\nMegamorph {5}{R}{R} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Stormwing Dragon is turned face up, put a +1/+1 counter on each other Dragon creature you control.",
                "number":"159",
                "watermark":"Kolaghan",
                "imageName":"stormwing dragon"
            },
            {
                "layout":"normal",
                "type":"Creature — Djinn Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394714,
                "name":"Stratus Dancer",
                "subtypes":[
                    "Djinn",
                    "Monk"
                ],
                "cmc":2,
                "rarity":"Rare",
                "artist":"Anastasia Ovchinnikova",
                "power":"2",
                "toughness":"1",
                "manaCost":"{1}{U}",
                "text":"Flying\nMegamorph {1}{U} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Stratus Dancer is turned face up, counter target instant or sorcery spell.",
                "number":"80",
                "watermark":"Ojutai",
                "imageName":"stratus dancer"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394715,
                "name":"Strongarm Monk",
                "subtypes":[
                    "Human",
                    "Monk"
                ],
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"Viktor Titov",
                "power":"3",
                "toughness":"3",
                "manaCost":"{4}{W}",
                "text":"Whenever you cast a noncreature spell, creatures you control get +1/+1 until end of turn.",
                "flavor":"\"His companions are wise to follow him, for his foes dare not stand in his way.\"\n—Zhiada, Dirgur protector",
                "number":"39",
                "watermark":"Ojutai",
                "imageName":"strongarm monk"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394716,
                "name":"Student of Ojutai",
                "subtypes":[
                    "Human",
                    "Monk"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Jason A. Engle",
                "power":"2",
                "toughness":"4",
                "manaCost":"{3}{W}",
                "text":"Whenever you cast a noncreature spell, you gain 2 life.",
                "flavor":"\"Human enlightenment is a firefly that sparks in the night. Dragon enlightenment is a beacon that disperses all darkness.\"",
                "number":"40",
                "watermark":"Ojutai",
                "imageName":"student of ojutai"
            },
            {
                "layout":"normal",
                "type":"Creature — Yeti",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394717,
                "name":"Summit Prowler",
                "subtypes":[
                    "Yeti"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Filip Burburan",
                "power":"4",
                "toughness":"3",
                "manaCost":"{2}{R}{R}",
                "flavor":"\"Do you not hunt the yetis of the high peaks, stripling? Their meat is as tender as a bear's and their blood as warming as fire. They are prey that will please Atarka.\"\n—Surrak, the Hunt Caller",
                "number":"160",
                "imageName":"summit prowler"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394718,
                "name":"Sunbringer's Touch",
                "cmc":4,
                "rarity":"Rare",
                "artist":"Lucas Graciano",
                "manaCost":"{2}{G}{G}",
                "text":"Bolster X, where X is the number of cards in your hand. Each creature you control with a +1/+1 counter on it gains trample until end of turn. (To bolster X, choose a creature with the least toughness among creatures you control and put X +1/+1 counters on it.)",
                "number":"209",
                "watermark":"Dromoka",
                "imageName":"sunbringer's touch"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394719,
                "name":"Sunscorch Regent",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":5,
                "rarity":"Rare",
                "artist":"Matt Stewart",
                "power":"4",
                "toughness":"3",
                "manaCost":"{3}{W}{W}",
                "text":"Flying\nWhenever an opponent casts a spell, put a +1/+1 counter on Sunscorch Regent and you gain 1 life.",
                "flavor":"\"We trust in the scalelords, bringers of justice that none can escape.\"\n—Urdnan, Dromoka warrior",
                "number":"41",
                "watermark":"Dromoka",
                "imageName":"sunscorch regent"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394720,
                "name":"Surge of Righteousness",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Marco Nelor",
                "manaCost":"{1}{W}",
                "text":"Destroy target black or red creature that's attacking or blocking. You gain 2 life.",
                "flavor":"Though she stood alone, she struck with the force of an army.",
                "number":"42",
                "imageName":"surge of righteousness"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Human Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394721,
                "name":"Surrak, the Hunt Caller",
                "subtypes":[
                    "Human",
                    "Warrior"
                ],
                "cmc":4,
                "rarity":"Rare",
                "artist":"Wesley Burt",
                "power":"5",
                "toughness":"4",
                "manaCost":"{2}{G}{G}",
                "text":"Formidable — At the beginning of combat on your turn, if creatures you control have total power 8 or greater, target creature you control gains haste until end of turn.",
                "flavor":"\"The greatest honor is to feed Atarka.\"",
                "number":"210",
                "watermark":"Atarka",
                "imageName":"surrak, the hunt caller"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Swamp",
                "types":[
                    "Land"
                ],
                "multiverseid":394722,
                "name":"Swamp",
                "subtypes":[
                    "Swamp"
                ],
                "rarity":"Basic Land",
                "artist":"Noah Bradley",
                "number":"256",
                "variations":[
                    394723,
                    394724
                ],
                "imageName":"swamp1"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Swamp",
                "types":[
                    "Land"
                ],
                "multiverseid":394723,
                "name":"Swamp",
                "subtypes":[
                    "Swamp"
                ],
                "rarity":"Basic Land",
                "artist":"Adam Paquette",
                "number":"257",
                "variations":[
                    394722,
                    394724
                ],
                "imageName":"swamp2"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Basic"
                ],
                "type":"Basic Land — Swamp",
                "types":[
                    "Land"
                ],
                "multiverseid":394724,
                "name":"Swamp",
                "subtypes":[
                    "Swamp"
                ],
                "rarity":"Basic Land",
                "artist":"Adam Paquette",
                "number":"258",
                "variations":[
                    394722,
                    394723
                ],
                "imageName":"swamp3"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black",
                    "Red"
                ],
                "multiverseid":394725,
                "name":"Swift Warkite",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":6,
                "rarity":"Uncommon",
                "artist":"Izzy",
                "power":"4",
                "toughness":"4",
                "manaCost":"{4}{B}{R}",
                "text":"Flying\nWhen Swift Warkite enters the battlefield, you may put a creature card with converted mana cost 3 or less from your hand or graveyard onto the battlefield. That creature gains haste. Return it to your hand at the beginning of the next end step.",
                "number":"233",
                "watermark":"Kolaghan",
                "imageName":"swift warkite"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394726,
                "name":"Taigam's Strike",
                "cmc":4,
                "rarity":"Common",
                "artist":"David Gaillet",
                "manaCost":"{3}{U}",
                "text":"Target creature gets +2/+0 until end of turn and can't be blocked this turn.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"81",
                "watermark":"Ojutai",
                "imageName":"taigam's strike"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394727,
                "name":"Tail Slash",
                "cmc":3,
                "rarity":"Common",
                "artist":"Efrem Palacios",
                "manaCost":"{2}{R}",
                "text":"Target creature you control deals damage equal to its power to target creature you don't control.",
                "flavor":"\"Kneel before a dragon and you will be spared when it turns to leave.\"\n—Yikaro, Atarka warrior",
                "number":"161",
                "imageName":"tail slash"
            },
            {
                "layout":"normal",
                "type":"Artifact",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394728,
                "name":"Tapestry of the Ages",
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Yeong-Hao Han",
                "manaCost":"{4}",
                "text":"{2}, {T}: Draw a card. Activate this ability only if you've cast a noncreature spell this turn.",
                "flavor":"\"Abzan, Jeskai, Sultai, Mardu, Temur—names lost to history, yet worthy of further study.\"\n—Narset",
                "number":"246",
                "imageName":"tapestry of the ages"
            },
            {
                "layout":"normal",
                "type":"Creature — Bird",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "White"
                ],
                "multiverseid":394729,
                "name":"Territorial Roc",
                "subtypes":[
                    "Bird"
                ],
                "cmc":2,
                "rarity":"Common",
                "artist":"YW Tang",
                "power":"1",
                "toughness":"3",
                "manaCost":"{1}{W}",
                "text":"Flying",
                "flavor":"\"Such lesser creatures must be purged from the sky. What use do they have but to help channel the lightning of our mighty dragonlord?\"\n—Gvar Barzeel, Kolaghan warrior",
                "number":"43",
                "imageName":"territorial roc"
            },
            {
                "layout":"normal",
                "type":"Creature — Dragon",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394730,
                "name":"Thunderbreak Regent",
                "subtypes":[
                    "Dragon"
                ],
                "cmc":4,
                "rarity":"Rare",
                "artist":"Ryan Pancoast",
                "power":"4",
                "toughness":"4",
                "manaCost":"{2}{R}{R}",
                "text":"Flying\nWhenever a Dragon you control becomes the target of a spell or ability an opponent controls, Thunderbreak Regent deals 3 damage to that player.",
                "flavor":"Attracting a dragon's attention may be the last mistake you make.",
                "number":"162",
                "watermark":"Kolaghan",
                "imageName":"thunderbreak regent"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394731,
                "name":"Tormenting Voice",
                "cmc":2,
                "rarity":"Common",
                "artist":"Volkan Baga",
                "manaCost":"{1}{R}",
                "text":"As an additional cost to cast Tormenting Voice, discard a card.\nDraw two cards.",
                "flavor":"A mocking laughter echoed in Ugin's mind. How many centuries had he slumbered, stricken, while Nicol Bolas moved unchallenged among the planes?",
                "number":"163",
                "imageName":"tormenting voice"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Green"
                ],
                "multiverseid":394732,
                "name":"Tread Upon",
                "cmc":2,
                "rarity":"Common",
                "artist":"Efrem Palacios",
                "manaCost":"{1}{G}",
                "text":"Target creature gets +2/+2 and gains trample until end of turn.",
                "flavor":"\"Boasting impenetrable defenses only draws the most tenacious of attackers.\"\n—Yikaro, Atarka warrior",
                "number":"211",
                "imageName":"tread upon"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394733,
                "name":"Twin Bolt",
                "cmc":2,
                "rarity":"Common",
                "artist":"Svetlin Velinov",
                "manaCost":"{1}{R}",
                "text":"Twin Bolt deals 2 damage divided as you choose among one or two target creatures and/or players.",
                "flavor":"Kolaghan archers are trained in Dakla, the way of the bow. They utilize their dragonlord's lightning to strike their target, no matter how small, how fast, or how far away.",
                "number":"164",
                "imageName":"twin bolt"
            },
            {
                "layout":"normal",
                "type":"Creature — Snake",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394734,
                "name":"Ukud Cobra",
                "subtypes":[
                    "Snake"
                ],
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Johann Bodin",
                "power":"2",
                "toughness":"5",
                "manaCost":"{3}{B}",
                "text":"Deathtouch",
                "flavor":"\"The Silumgar hide behind the deadly wildlife of their swamps. They'd rather scheme in their jungle palaces than face us.\"\n—Khibat, Kolaghan warrior",
                "number":"123",
                "imageName":"ukud cobra"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394735,
                "name":"Ultimate Price",
                "cmc":2,
                "rarity":"Uncommon",
                "artist":"Jack Wang",
                "manaCost":"{1}{B}",
                "text":"Destroy target monocolored creature.",
                "flavor":"\"The realization that one is dying is far more terrifying than death itself.\"\n—Sidisi, Silumgar vizier",
                "number":"124",
                "imageName":"ultimate price"
            },
            {
                "layout":"normal",
                "type":"Creature — Elemental",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394736,
                "name":"Updraft Elemental",
                "subtypes":[
                    "Elemental"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Raf Sarmento",
                "power":"1",
                "toughness":"4",
                "manaCost":"{2}{U}",
                "text":"Flying",
                "flavor":"\"It slips through the smallest cracks in the mountain, emerging whole and unfettered. There is nowhere it cannot go, for what can hold back the air itself?\"\n—Chanyi, Ojutai monk",
                "number":"82",
                "watermark":"Ojutai",
                "imageName":"updraft elemental"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394737,
                "name":"Vandalize",
                "cmc":5,
                "rarity":"Common",
                "artist":"Ryan Barger",
                "manaCost":"{4}{R}",
                "text":"Choose one or both —\n• Destroy target artifact.\n• Destroy target land.",
                "flavor":"\"As we have learned from Kolaghan, to ruin is to rule.\"\n—Shensu, Kolaghan rider",
                "number":"165",
                "imageName":"vandalize"
            },
            {
                "layout":"normal",
                "type":"Artifact",
                "types":[
                    "Artifact"
                ],
                "multiverseid":394738,
                "name":"Vial of Dragonfire",
                "cmc":2,
                "rarity":"Common",
                "artist":"Franz Vohwinkel",
                "manaCost":"{2}",
                "text":"{2}, {T}, Sacrifice Vial of Dragonfire: Vial of Dragonfire deals 2 damage to target creature.",
                "flavor":"Designed by an ancient artificer, the vials are strong enough to hold the very breath of a dragon—until it's needed.",
                "number":"247",
                "imageName":"vial of dragonfire"
            },
            {
                "layout":"normal",
                "type":"Enchantment",
                "types":[
                    "Enchantment"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394739,
                "name":"Virulent Plague",
                "cmc":3,
                "rarity":"Uncommon",
                "artist":"Johann Bodin",
                "manaCost":"{2}{B}",
                "text":"Creature tokens get -2/-2.",
                "flavor":"\"This pestilence robs us of glorious death in battle. We starve to death with full bellies and drown trying to slake our unnatural thirst.\"\n—Kerai Hatesinger, Kolaghan warrior",
                "number":"125",
                "imageName":"virulent plague"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394740,
                "name":"Void Squall",
                "cmc":5,
                "rarity":"Uncommon",
                "artist":"James Paick",
                "manaCost":"{4}{U}",
                "text":"Return target nonland permanent to its owner's hand.\nRebound (If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.)",
                "number":"83",
                "watermark":"Ojutai",
                "imageName":"void squall"
            },
            {
                "layout":"normal",
                "type":"Instant",
                "types":[
                    "Instant"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394741,
                "name":"Volcanic Rush",
                "cmc":5,
                "rarity":"Common",
                "artist":"Ryan Barger",
                "manaCost":"{4}{R}",
                "text":"Attacking creatures get +2/+0 and gain trample until end of turn.",
                "flavor":"\"The bravest warriors take the shortest path to victory, whatever that path may be.\"\n—Sakta, Atarka hunter",
                "number":"166",
                "imageName":"volcanic rush"
            },
            {
                "layout":"normal",
                "type":"Sorcery",
                "types":[
                    "Sorcery"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394742,
                "name":"Volcanic Vision",
                "cmc":7,
                "rarity":"Rare",
                "artist":"Noah Bradley",
                "manaCost":"{5}{R}{R}",
                "text":"Return target instant or sorcery card from your graveyard to your hand. Volcanic Vision deals damage equal to that card's converted mana cost to each creature your opponents control. Exile Volcanic Vision.",
                "number":"167",
                "imageName":"volcanic vision"
            },
            {
                "layout":"normal",
                "type":"Creature — Bird Shaman",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394743,
                "name":"Vulturous Aven",
                "subtypes":[
                    "Bird",
                    "Shaman"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Kev Walker",
                "power":"2",
                "toughness":"3",
                "manaCost":"{3}{B}",
                "text":"Flying\nExploit (When this creature enters the battlefield, you may sacrifice a creature.)\nWhen Vulturous Aven exploits a creature, you draw two cards and you lose 2 life.",
                "number":"126",
                "watermark":"Silumgar",
                "imageName":"vulturous aven"
            },
            {
                "layout":"normal",
                "type":"Creature — Zombie Turtle",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Black"
                ],
                "multiverseid":394744,
                "name":"Wandering Tombshell",
                "subtypes":[
                    "Zombie",
                    "Turtle"
                ],
                "cmc":4,
                "rarity":"Common",
                "artist":"Yeong-Hao Han",
                "power":"1",
                "toughness":"6",
                "manaCost":"{3}{B}",
                "flavor":"The crumbling temples on the tortoise's back are monuments to the decadence of the ancient Sultai. Though it harkens back to the era of the khans, Silumgar allows it to walk his territory as a warning to those who would oppose him.",
                "number":"127",
                "watermark":"Silumgar",
                "imageName":"wandering tombshell"
            },
            {
                "layout":"normal",
                "type":"Creature — Orc Berserker",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394745,
                "name":"Warbringer",
                "subtypes":[
                    "Orc",
                    "Berserker"
                ],
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Raymond Swanland",
                "power":"3",
                "toughness":"3",
                "manaCost":"{3}{R}",
                "text":"Dash costs you pay cost {2} less (as long as this creature is on the battlefield).\nDash {2}{R} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"168",
                "watermark":"Kolaghan",
                "imageName":"warbringer"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Wizard",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394746,
                "name":"Youthful Scholar",
                "subtypes":[
                    "Human",
                    "Wizard"
                ],
                "cmc":4,
                "rarity":"Uncommon",
                "artist":"Cynthia Sheppard",
                "power":"2",
                "toughness":"2",
                "manaCost":"{3}{U}",
                "text":"When Youthful Scholar dies, draw two cards.",
                "flavor":"\"Too dumb, and you end up a sibsig. Too smart, and you end up a meal. Mediocrity is the key to a long life.\"\n—Mogai, Silumgar noble",
                "number":"84",
                "watermark":"Silumgar",
                "imageName":"youthful scholar"
            },
            {
                "layout":"normal",
                "type":"Creature — Human Monk",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Blue"
                ],
                "multiverseid":394747,
                "name":"Zephyr Scribe",
                "subtypes":[
                    "Human",
                    "Monk"
                ],
                "cmc":3,
                "rarity":"Common",
                "artist":"Lius Lasahido",
                "power":"2",
                "toughness":"1",
                "manaCost":"{2}{U}",
                "text":"{U}, {T}: Draw a card, then discard a card.\nWhenever you cast a noncreature spell, untap Zephyr Scribe.",
                "flavor":"\"Ojutai's rule has allowed Tarkir's monks to learn from the truly enlightened.\"\n—Sarkhan Vol",
                "number":"85",
                "watermark":"Ojutai",
                "imageName":"zephyr scribe"
            },
            {
                "layout":"normal",
                "supertypes":[
                    "Legendary"
                ],
                "type":"Legendary Creature — Orc Warrior",
                "types":[
                    "Creature"
                ],
                "colors":[
                    "Red"
                ],
                "multiverseid":394748,
                "name":"Zurgo Bellstriker",
                "subtypes":[
                    "Orc",
                    "Warrior"
                ],
                "cmc":1,
                "rarity":"Rare",
                "artist":"Jason Rainville",
                "power":"2",
                "toughness":"2",
                "manaCost":"{R}",
                "text":"Zurgo Bellstriker can't block creatures with power 2 or greater.\nDash {1}{R} (You may cast this spell for its dash cost. If you do, it gains haste, and it's returned from the battlefield to its owner's hand at the beginning of the next end step.)",
                "number":"169",
                "watermark":"Kolaghan",
                "imageName":"zurgo bellstriker"
            }
        ]
    };*/
}]);