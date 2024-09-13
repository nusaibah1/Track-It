<template>
  <router-link to="/report"><button><i class="bi bi-arrow-left-circle-fill"></i></button></router-link>
    <div class="container">
        <div class="row">
            <h3>Item Details</h3>
        </div>
       <div class="row justify-content-center" v-if="item">
            <Card  class="card-column card-margin">
                <template #cardHeader>
                    <img :src="item.prodURL" loading="lazy" class="img-fluid" :alt="item.prodName">
                </template>
                <template #cardBody>
                    <h3>Product:</h3>
                    <h5 class="card-title bold">{{ item.prodName }}</h5>
                    <p class="words">{{ item.prodDescription }} </p>
                  <p class="words"><span class="text-success fw-bold">Item SKU:</span>
                    <br>
                    <small>{{ item.prodSKU }}</small>
                  </p>
                  <p class="words"><span class="text-success fw-bold">Stock Quantity:</span>
                        <br>
                        <small>{{ item.prodQuantity }}</small>
                </p>
                   
                    <p class="words"><span class="text-success fw-bold">Selling Price</span>: R{{ item.sellingPrice }}</p>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>
<script setup>

import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const item = computed( () => store.state.item)

onMounted(() => {
    store.dispatch('fetchItem', route.params.id)
})

</script>
<style scoped>

.card-column {
    margin: 20px;
    padding: 20px;
    border:  solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 5%;
}

.card-margin {
    margin-bottom: 20px;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
}

.words {
    font-size: 16px;
    margin-bottom: 20px;
    color: gray;
}

.text-success {
    color: black!important;
}

.bold {
    font-weight: bold;
}
h3,p, small, h5{
    font-family: "Michroma", "sans-serif";
}
h3{
    text-align: center;
    font-weight: bold;
    color: bisque;
}

</style>