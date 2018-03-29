function Basket(id) {
	this.id = id;
	this.count = 0;
	this.amount = 0;
	this.items = [];
}

Basket.prototype.update = function() {
	var basketContainer = document.getElementById('basket');
	var s = "";
	for (var i = 0; i < this.items.length; i++) {
		s += '<div class="basket_item"><img src="img/product/' + this.items[i].id_product + '.png" alt=""><div class="basket_content"><h3>' + this.items[i].name + '</h3><p>' + this.items[i].count + '  x   $' + this.items[i].price + '</p></div><div class="cart-list_action"><span></span></div></div><div class="basket_hr"></div>'
	}
	s += '<div id="basket_total"><span>Total</span><span>' + this.amount + '$</span></div><button id="basket_checkout">checkout</button><a href="shopping-cart.html" id="basket_go-to-cart">go to cart</a>';
	basketContainer.innerHTML = s;
	if (document.getElementById('cart-list_prods')) {
		basket.updateMainCart();
	}
	return 0;
}

Basket.prototype.updateMainCart = function() {
	s = '';
	for (var i = 0; i < this.items.length; i++) {
		s += '<div class="cart-list_item"><div class="cart-list_details"><div class="detail-img"><img src="img/product/' + this.items[i].id_product + '.png" alt=""></div><div><h4><a href="woman.html">' + this.items[i].name + '</a></h4><p><span>Color:</span> Red<br><span>red</span> XII</p></div></div><div class="cart-list_price"><span>' + this.items[i].price + '$</span></div><div class="cart-list_quantity"><span class="cart-item_count">' + this.items[i].count + '</span></div><div class="cart-list_shipping"><span>free</span></div><div class="cart-list_subtotal"><span>' + (this.items[i].price * this.items[i].count) + '$</span></div><div class="cart-list_action"><span></span></div></div><div class="hr"></div>';
	}
	document.getElementById('cart-list_prods').innerHTML = s;
	for (var i = 0; i < this.items.length; i++) {

	}
	return;
}

Basket.prototype.add = function(id, price) {
	for (var i = 0; i < this.items.length; i++) {
		if (this.items[i].id_product == id) {
			this.items[i].count++;
			return;
		}
	}
	this.items[this.items.length] = {id_product: id, price: price, count: 1};
	return;
}

Basket.prototype.get = function() {
	document.getElementById('my-cart').addEventListener('click', function() {
		document.getElementById('basket').classList.toggle('basket_hide');
	});
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '../data/basket.json');
	xhr.onreadystatechange = function() {
		
		if (this.readyState != 4) {
			return;
		}

		if (this.status != 200) {
			console.log(this.status);
			return;
		}

		var data = JSON.parse(this.responseText);

		if (data.result != 1) {
			console.log("server error");
		}

		for (var i = 0; i < data.basket.length; i++) {
			basket.items[i] = data.basket[i];
		}
		basket.amount = data.amount;
		basket.update();
	};

	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.send({id_user: 123});
	return 0;
}

Basket.prototype.removeItem = function(id) {
	for (var i = 0; i < this.basket.length; i++) {
		if (this.basket[i].id_product == id) {
			this.basket.splice(i, 1);
		}
	}
	this.update();
	return 0;
}

Basket.prototype.clear = function() {
	this.items = [];
	this.amount = 0;
	this.update();
	return 0;
}

var basket = new Basket(10);
basket.get();