//     получение json продуктов

var list = document.getElementById('featured-items-list');
var i, xhr = new XMLHttpRequest;
xhr.open('GET', 'data/products.json', true);
xhr.onload = function() {
    showElements(JSON.parse(xhr.responseText));
}
xhr.send();

var featuredId = [15,16,3,17,18,6,14,8];

//     контент 1-ой страницы

function showElements(data) {

    var i;
    for (i = 0; i < featuredId.length; i++){
        list.innerHTML += '<div class="item"><div style="background-image: url(' + data[featuredId[i]].icon + ');"><a href="woman.html"></a><a href="#" name="' + data[featuredId[i]].id + '" class="link-offer" style="width: 123px; height: 39px;"><img src="img/add-to-card.png" alt="">Add to cart</a></div><h4>' + data[featuredId[i]].name + '</h4><span>' + data[featuredId[i]].price + '</span></div></div';
    }
    list.innerHTML += '<button id="featured-items_browse-all" style="margin-top: 36px">Browse All Product<i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>';
    document.getElementById('featured-items_browse-all').addEventListener('click', function() {
        location.href = "/products";
    });
}
