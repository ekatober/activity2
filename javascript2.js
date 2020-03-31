var vibe = [
	'80s style',
	'90s babe style',
	'playboy house style',
	'reverse situation style',
	'weirdo style',
	'glamour',
	'beach style',
	'with wigs',
	'swagalishious style',
	'victorian style',
	'italian',
	'french',
	'hippie',
	'japanese',
	'disco',
	'furcoats',
	'german/nazi',
	'miami style',
	'hawaii',
	'anime club',
	'scater style',
	'heroin chic style',
	'burning man style',
	'mad max style',
	'50s housewives'

]

function newVibe() {
		var randomNumber = Math.floor(Math.random() * (vibe.length));
		document.getElementById('vibeDisplay').innerHTML = vibe[randomNumber];
	}
	
var activity = [
	'yoga',
	'yin yoga',
	'dance',
	'arms workout',
	'bootie workout',
	'core workout',
	'aerobics',
	'massage',
	'cookies',
	'cake',
	'poetry reading',
	'fiction club',
	'figure drawing',
	'breathwork',
	'guided meditation',
	'self-forgiving meditation',
	'wumb meditation',
	'women circle',
	'men circle',
	'dynamic meditation',
	'singing',
	'board games',
	'beauty salon',
	'picnic',
	'book reading',
	'breakdance',
	'qigun',
	'ask questions',
	'sex',
	'movie night',
	'body scan meditation',
	'orgy',
	'cleaning',
	'jam',
	'costume',
	'bdsm',
	'ritual',
	'summon demon',
	'salt doe sculpting',
	'smile competition',
	'bar hopping',
	'call mom'
]
function newActivity() {
		var randomNumber = Math.floor(Math.random() * (activity.length));
		document.getElementById('activityDisplay').innerHTML = activity[randomNumber];
	}

var drugs = [
	'1',
	'mdma',
	'extasy',
	'k',
	'joint',
	'bong',
	'vodnik',
	'coffee',
	'ghb',
	'beer',
	'hard liquior',
	'high on life',
	'sugar',
	'lsd',
	'mushrooms',
	'shroom chocolate',
	'cacao',
	'dmt',
	'chamomile tea'

]

function newDrugs() {
		var randomNumber = Math.floor(Math.random() * (drugs.length));
		document.getElementById('drugsDisplay').innerHTML = drugs[randomNumber];
	}
