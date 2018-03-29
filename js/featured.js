var xhrf = new XMLHttpRequest();
xhrf.open('GET', '../data/featured.json');
xhrf.onreadystatechange = function() {
	if (this.readyState != 4) return;
	if (this.status != 200) return;

	var data = JSON.parse(this.responseText);
	console.log(data);
	var s = '';
	for (var i = 0; i < data.length; i++) {
		s += '<div class="item"><div style="background-image: url(img/product/' + data[i].id + '.png);"><a href="woman.html"></a><a href="#" name="' + data[i].id + '" class="link-offer" style="width: 123px; height: 39px;"><img src="img/add-to-card.png" alt="">Add to cart</a></div><h4>' + data[i].name + '</h4><span>' + data[i].price + '</span></div>';
	}
	document.getElementById('featured-items-list').innerHTML = s;
}
xhrf.send();