<template>
  <div>
    <ShopHeader></ShopHeader>
    <router-view
      v-bind:catalog="catalog"
      v-bind:cart="cart"
      v-on:buyed="addToCart"
      v-on:removed="removeFromCart"
    />
    <ShopFooter></ShopFooter>
  </div>
</template>

<script>
import ShopHeader from "./components/ShopHeader.vue";
import ShopFooter from "./components/ShopFooter.vue";

export default {
  components: {
    ShopHeader,
    ShopFooter,
  },
  data() {
    return {
      catalog: [],
      cart: [],
    };
  },
  mounted() {
    this.catalog = [
      {
        id: 1,
        title: "ELLERY X M'O CAPSULE 1",
        price: 52.0,
        image: "product1.png",
        color: "red",
        size: "L",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 2,
        title: "ELLERY X M'O CAPSULE 2",
        price: 53.0,
        image: "product6.png",
        color: "white",
        size: "M",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 3,
        title: "ELLERY X M'O CAPSULE 3",
        price: 54.0,
        image: "product8.png",
        color: "red",
        size: "XL",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 4,
        title: "ELLERY X M'O CAPSULE 4",
        price: 55.0,
        image: "product9.png",
        color: "green",
        size: "XS",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 5,
        title: "ELLERY X M'O CAPSULE 5",
        price: 56.0,
        image: "product10.png",
        color: "red",
        size: "L",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 6,
        title: "ELLERY X M'O CAPSULE 6",
        price: 57.0,
        image: "product11.png",
        color: "red",
        size: "S",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 7,
        title: "ELLERY X M'O CAPSULE 7",
        price: 58.0,
        image: "product12.png",
        color: "gold",
        size: "M",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 8,
        title: "ELLERY X M'O CAPSULE 8",
        price: 59.0,
        image: "product13.png",
        color: "bluе",
        size: "XL",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
      {
        id: 9,
        title: "ELLERY X M'O CAPSULE 9",
        price: 60.0,
        image: "product14.png",
        color: "yellow",
        size: "M",
        description:
          "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        count: 1,
      },
    ];
    this.cart = JSON.parse(window.localStorage.getItem("cart-list")) || [];
  },

  methods: {
    addToCart(id) {
      const product = this.catalog.find((item) => item.id == id);
      this.cart.push(product);
      window.localStorage.setItem("cart-list", JSON.stringify(this.cart));
    },
    removeFromCart(id) {
      const indx = this.cart.findIndex((item) => item.id == id);
      this.cart.splice(indx, 1);
      window.localStorage.setItem("cart-list", JSON.stringify(this.cart));
    },
  },
};
</script>

<style lang="scss">
@import "./css/style.scss";
</style>
