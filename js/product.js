var nav = document.getElementById('prods-accordeon');
nav.children[0].addEventListener('click', function() {
    nav.children[0].classList.toggle('active-product-filter');
    nav.children[1].classList.toggle('active-product-filter-ul');
});
nav.children[2].addEventListener('click', function() {
    nav.children[2].classList.toggle('active-product-filter');
    nav.children[3].classList.toggle('active-product-filter-ul');
});
nav.children[4].addEventListener('click', function() {
    nav.children[4].classList.toggle('active-product-filter');
    nav.children[5].classList.toggle('active-product-filter-ul');
});


var i, labels = document.getElementById('top-side-bar').getElementsByTagName('label');

labels[0].addEventListener('click', function() {
    labels[0].classList.toggle('trend-form_label-checked');
});
labels[1].addEventListener('click', function() {
    labels[1].classList.toggle('trend-form_label-checked');
});
labels[2].addEventListener('click', function() {
    labels[2].classList.toggle('trend-form_label-checked');
});
labels[3].addEventListener('click', function() {
    labels[3].classList.toggle('trend-form_label-checked');
});
labels[4].addEventListener('click', function() {
    labels[4].classList.toggle('trend-form_label-checked');
});
labels[5].addEventListener('click', function() {
    labels[5].classList.toggle('trend-form_label-checked');
});

labels[6].addEventListener('click', function() {
    labels[6].classList.toggle('size-form_label-checked');
});
labels[7].addEventListener('click', function() {
    labels[7].classList.toggle('size-form_label-checked');
});
labels[8].addEventListener('click', function() {
    labels[8].classList.toggle('size-form_label-checked');
});
labels[9].addEventListener('click', function() {
    labels[9].classList.toggle('size-form_label-checked');
});
labels[10].addEventListener('click', function() {
    labels[10].classList.toggle('size-form_label-checked');
});
labels[11].addEventListener('click', function() {
    labels[11].classList.toggle('size-form_label-checked');
});
labels[12].addEventListener('click', function() {
    labels[12].classList.toggle('size-form_label-checked');
});

xhr.onreadystatechange = function(){

    if (xhr.readyState != 4) {
        return;
    }

    var prodNav = document.getElementById('product-navigation_pages');
    prodNav.innerHTML = '<div class="product-navigation_left-arrow"><i class="fa fa-angle-left"></i></div>';
    var numberPage = Math.ceil(JSON.parse(xhr.responseText).length/9);
    var j;
    prodNav.innerHTML += '<div id="page-1" class="product-navigation_page-number product-navigation_page-active">1</div>';
    for (j = 2; j <= numberPage; j++) {
        prodNav.innerHTML += '<div id="page-' + j + '" class="product-navigation_page-number">' + j + '</div>';

    }

    prodNav.innerHTML += '<div class="product-navigation_right-arrow product-navigation-arrow_avaliable"><i class="fa fa-angle-right"></i><div>';

}




//     контент 1-ой страницы

function showElements(data) {

    var j;
    for (j = 1; j < (document.getElementById('product-navigation_pages').childElementCount - 1); j++){
        document.getElementById('page-' + j).addEventListener('click', changeItems);
    }

    // location.hash = "#page-1";

    for (i = 0; i < Math.min(data.length, 9); i++){
        list.innerHTML += "<div class='item'><div style='background-image: " + 'url(../' + data[i].icon + ');' + "'><a href='woman.html'></a><a href='#' class='link-offer'  name='" + data[i].id + "'style='width: 137px;height: 39px;'><img src='../img/add-to-card.png'>Add to cart</a></div><h4>" + data[i].name + "</h4><span>" + data[i].price + "</span></div>";
    }

}


//    изменение контента

function changeItems(a) {

    list.innerHTML = "";
    var data = JSON.parse(xhr.responseText), count = a.srcElement.id.slice(5) - 1;
    location.hash = "#page-" + (count + 1);
    for (i = count * 9; i < Math.min(data.length, count*9 + 9); i++){
        list.innerHTML += "<div class='item'><div style='background-image: " + 'url(../' + data[i].icon + ');' + "'><a href='woman.html'></a><a href='#' class='link-offer' style='width: 137px;height: 39px;'><img src='../img/add-to-card.png'>Add to cart</a></div><h4>" + data[i].name + "</h4><span>" + data[i].price + "</span></div>";
    }


    for (i = 0; i < document.getElementById('product-navigation_pages').childElementCount - 1; i++) {
        document.getElementById('product-navigation_pages').children[i].classList.remove('product-navigation_page-active');
    }
    document.getElementById('product-navigation_pages').children[location.hash.slice(6) - 1 + 1].classList.add('product-navigation_page-active');

    if (location.hash.slice(6) != '5') {
        document.getElementById('product-navigation_pages').lastElementChild.classList.add('product-navigation-arrow_avaliable');
        console.log(document.getElementById('product-navigation_pages').lastElementChild.classList);
    }
    if (location.hash.slice(6) == '5') {
        document.getElementById('product-navigation_pages').lastElementChild.classList.remove('product-navigation-arrow_avaliable');
        console.log(document.getElementById('product-navigation_pages').lastElementChild.classList);
    }
    if (location.hash.slice(6) != '1') {
        document.getElementById('product-navigation_pages').firstElementChild.classList.add('product-navigation-arrow_avaliable');
        console.log(document.getElementById('product-navigation_pages').firstElementChild.classList);
    }
    if (location.hash.slice(6) == '1') {
        document.getElementById('product-navigation_pages').firstElementChild.classList.remove('product-navigation-arrow_avaliable');
        console.log(document.getElementById('product-navigation_pages').firstElementChild.classList);
    }

}
document.getElementById('product-navigation_view-all').addEventListener('click', function() {
    list.innerHTML = "";
    var data = JSON.parse(xhr.responseText);
    location.hash = "";
    for (i = 0; i < data.length; i++){
        list.innerHTML += "<div class='item'><div style='background-image: " + 'url(../' + data[i].icon + ');' + "'><a href='woman.html'></a><a href='#' class='link-offer' style='width: 137px;height: 39px;'><img src='../img/add-to-card.png'>Add to cart</a></div><h4>" + data[i].name + "</h4><span>" + data[i].price + "</span></div>";
    }
});
