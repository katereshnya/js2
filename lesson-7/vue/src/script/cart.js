"use strict";

const Product = [];
let pname = '';
let pprice = 0;
let allcount = 0;
let content_text = '';
let links = document.querySelectorAll('.product__img a');
let counter = document.querySelector('.nav__cart_counter');
let content_total = document.querySelector('.cart__content_total');
let content_totalsum = document.querySelector('.cart__content_total span');


/*Счетчик корзины и построение контента корзины*/
links.forEach(link => {
    link.addEventListener('click', clickHandler);
});

/*Показать/скрыть контент корзины при наведении*/
counter.addEventListener('mouseover', showCartList);
counter.addEventListener('mouseout', showCartList);

/*Контент корзины*/
function clickHandler(event) {
    counter.innerHTML = Number(counter.innerHTML) + 1;
    pname = event.currentTarget.parentNode.parentNode.querySelector('h3 a').innerHTML;
    pprice = event.currentTarget.parentNode.parentNode.querySelector('p:last-child span').innerHTML;
    allcount = Product.length;
    console.log(pname, pprice, allcount);
    ProductList(allcount, pname, pprice);
    showProductList();
}

/*Информация по продукту*/
function getProduct(pname, pprice) {
    return {
        name: pname,
        price: pprice,
        count: 1
    }
}

function getProductList(pname, pprice) {
    Product.push(getProduct(pname, pprice));
    return Product
}

/*Массив продуктов*/
function ProductList(allcount, pname, pprice) {
    if (allcount == 0) {
        getProductList(pname, pprice);
    }
    else {
        let check = 0;
        for (let i = 0; i < allcount; i++) {
            if (Product[i].name == pname) {
                Product[i].count = Product[i].count + 1;
                check = ++check;
            };
        }
        if (check == 0) {
            getProductList(pname, pprice);
        }
    }
}

/*Построение контента корзины*/
function showProductList() {
    clearProductList();
    allcount = Product.length;
    let product_total = 0;
    let cart_total = 0;
    for (let i = 0; i < allcount; i++) {
        product_total = Product[i].count * Product[i].price;
        cart_total = cart_total + product_total;
        content_text = '<div class="cart__content_text"><div>' + Product[i].name + '</div><div>' + Product[i].count + '</div><div>$<span>' + Product[i].price + '</span></div><div>$<span>' + product_total + '</span></div></div>';
        content_total.insertAdjacentHTML('beforebegin', content_text);
    }
    content_totalsum.innerHTML = cart_total;
}

/*Очистить старый контент*/
function clearProductList() {
    let content_text = document.querySelectorAll('.cart__content_text');
    content_text.forEach(child => { child.remove() });
}

/*Скрыть/показать контент корзины*/
function showCartList() {
    document.querySelector(".nav__cart_content").classList.toggle("hidden");
}