<template>
  <article class="cart__flex cart__product">
    <div class="cart__product_flex">
      <img :src="require(`../assets/img/${data.image}`)" alt="product" />
      <div>
        <h2>{{ data.title }}</h2>
        <ul>
          <li>
            Price: <span>${{ data.price }}</span>
          </li>
          <li>Color: {{ data.color }}</li>
          <li>Size: {{ data.size }}</li>
          <li>
            Quantity:
            <input
              type="number"
              step="1"
              min="1"
              max="20"
              v-model="data.count"
            />
          </li>
        </ul>
      </div>
    </div>
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "CartProductCard",
  props: ["data"],
};
</script>

<style>
</style>