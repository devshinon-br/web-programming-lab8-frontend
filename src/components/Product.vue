<template>
  <div>
    <table style="width: 100%">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Due Date</th>
      </tr>
      <tr v-for="product in products" v-bind:key="product.id">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.dueDate}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default { 
  name: "ProductTeste",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("/api/product")
      .then((response) => response.text())
      .then((data) => {
        this.products = JSON.parse(data);
      });
  },
};
</script>

<style scoped>
</style>
