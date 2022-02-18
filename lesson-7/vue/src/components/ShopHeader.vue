<template>
  <header>
    <section class="header__top">
      <div class="container header__flex">
        <nav class="header__left">
          <router-link to="/"
            ><img src="../assets/img/logo.png" alt="logo"
          /></router-link>
          <a href="main.html">
            <img src="../assets/img/search.svg" alt="search" />
          </a>
        </nav>
        <nav class="header__right">
          <div class="nav__checked">
            <input type="checkbox" id="menu" />
            <label for="menu">
              <img src="../assets/img/menu.svg" alt="close" />
            </label>
            <nav class="header__nav">
              <div class="nav__checked">
                <input type="checkbox" id="menu" />
                <label for="menu">
                  <img src="../assets/img/checked.svg" alt="close" />
                </label>
              </div>
              <h2>MENU</h2>
              <ul>
                <li>
                  MAN
                  <ul>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Denim</a></li>
                    <li><a href="#">T-Shirts</a></li>
                  </ul>
                </li>
                <li>
                  WOMAN
                  <ul>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Jackets & Coats</a></li>
                    <li><a href="#">Polos</a></li>
                    <li><a href="#">T-Shirts</a></li>
                    <li><a href="#">Shirts</a></li>
                  </ul>
                </li>
                <li>
                  KIDS
                  <ul>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Jackets & Coats</a></li>
                    <li><a href="#">Polos</a></li>
                    <li><a href="#">T-Shirts</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Bags</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <a href="registration.html">
            <img src="../assets/img/sign.svg" alt="sign" />
          </a>
          <div class="nav__cart">
            <router-link to="/cart"
              ><img src="../assets/img/basket.svg" alt="basket"
            /></router-link>
            <div class="nav__cart_counter">0</div>
            <div class="nav__cart_content hidden">
              <div class="cart__content_header">
                <div>Product</div>
                <div>Count</div>
                <div>Price</div>
                <div>Total</div>
              </div>
              <div class="cart__content_total">
                Total price: $<span>0</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>

    <section class="header__navigation">
      <div class="container header__flex">
        <h1>NEW ARRIVALS</h1>
        <nav>
          <ul class="header__menu">
            <li><a href="index.html">HOME</a></li>
            <li><a href="#">MEN</a></li>
            <li><a href="#">NEW ARRIVALS</a></li>
          </ul>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "ShopHeader",
};
</script>

<style>
</style>