var img = 1
var timer = setInterval(function() {
	img++
	$('img').attr('src', 'img/' + img + '.png');
	if (img === 5) {
		img = 0
	}
}, 1000);