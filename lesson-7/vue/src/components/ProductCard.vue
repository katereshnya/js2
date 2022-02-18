<template>
  <article class="product__item">
    <div class="product__img">
      <img :src="require(`../assets/img/${data.image}`)" alt="product" />
      <img
        class="product__shadow"
        src="../assets/img/productshadow.png"
        alt="shadow"
      />
      <slot></slot>
    </div>
    <h3>
      <a href="product.html">{{ data.title }}</a>
    </h3>
    <p>
      {{ data.description }}
    </p>
    <p>
      $<span>{{ data.price }}</span>
    </p>
  </article>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["data"],
};
</script>

<style>
</style>