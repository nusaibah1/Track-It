<template>
    <Navbar/>
    <div class="container">
        <div class="row">
            <h3>Order Details</h3>
        </div>
       <div class="row justify-content-center" v-if="order">
            <Card  class="card-column card-margin">
            
                <!-- <template #cardHeader>
                   
                </template> -->
                <template #cardBody>
                    <h3>Product:</h3>
                    <h5 class="card-title bold">{{ order.prodName }}</h5>
                    <p class="words">{{order.State }} </p>
                  <p class="words"><span class="text-success fw-bold">Order Quantity:</span>
                    <br>
                    <small>{{ order.orderQuantity }}</small>
                  </p>
                
                   
                    <p class="words"><span class="text-success fw-bold">Order Total</span>: R{{ order.Total }}</p>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const order = computed( () => store.state.order)

onMounted(() => {
    store.dispatch('fetchOrder', route.params.id)
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
}
</style>