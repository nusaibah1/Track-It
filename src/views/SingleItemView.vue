<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Item Details</h2>
        </div>
       <div class="row justify-content-center" v-if="item">
            <Card  class="card-column card-margin">
                <template #cardHeader>
                    <img :src="item.prodURL" loading="lazy" class="img-fluid" :alt="item.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title bold">{{ item.prodName }}</h5>
                    <p class="words">
                        {{ item.prodDescription }}
                    </p>
                    <small>{{ item.prodSKU }}</small>
                    <small>{{ item.prodQuantity }}</small>
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
    border:  solid bisque;
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
    color: bisque;
}

.words {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: bold;
}

.text-success {
    color: black!important;
}

.bold {
    font-weight: bold;
}
</style>