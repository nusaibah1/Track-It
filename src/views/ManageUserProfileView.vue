<template>
    <Navbar/>
    <div class="container">
        <div class="row">
            <h3>User Details</h3>
        </div>
       <div class="row justify-content-center" v-if="user">
            <Card  class="card-column card-margin">
                <template #cardHeader>
                    <img :src="user.userUrl" loading="lazy" class="img-fluid" :alt="user.userName">
                </template>
                <template #cardBody>
                    <h3>User:</h3>
                    <h5 class="card-title bold">{{ user.userName}}</h5>
                    <!-- <p class="words">{{ user. }} </p> -->
                  <p class="words"><span class="text-success fw-bold">Item SKU:</span>
                    <br>
                    <!-- <small>{{ item.prodSKU }}</small> -->
                  </p>
                  <p class="words"><span class="text-success fw-bold">Stock Quantity:</span>
                        <br>
                        <small>{{ user.userEmailAdd }}</small>
                </p>
                   
                    <!-- <p class="words"><span class="text-success fw-bold">Selling Price</span>{{ user.userPass }}</p> -->
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
const user = computed( () => store.state.user)

onMounted(() => {
    store.dispatch('fetchUser', route.params.id)
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