<template>
    <Navbar/>
   <div class="container-fluid">
        <h3>
            Items
        </h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Image</th>
                    <th>User ID</th>
                    <th>Product</th>
                    <th>Description</th>
                 
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>SuppID</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody v-if="items">
         
                <tr v-for="item in items" :key="item.prodID">
                    <td>{{ item.prodID }}</td>
                    <td>{{ item.SKU }}</td>
                    <td><img :src="item.prodURL" :alt="item.prodName" class="img-thumbnail"></td>
                    <td>{{ item.prodName }}</td>
                    <td>{{ item.prodDescription }}</td>
                    
                    <td>{{ item.prodQuantity }}</td>
                    <td>{{ item.Category }}</td>
                    <td>{{ item.SuppID }}</td>
                    <td>
                        <button @click="updateItem(item)">Update</button>
                        <button @click="deleteItem(item.prodID)">Delete</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="9">
                        <Spinner />
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="addItem()">Add Item</button>
    </div>
    <!-- <Footer/> -->
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Spinner from '@/components/Spinner.vue';

export default {
    components: {
        Spinner,
    
        Navbar
    },
    data() {
        return {
          
            itemPayload: {
                prodID: '',
                prodName: '',
                prodDescription: '',
                price: '',
                quantity: '',
                category: '',
                suppID: '',
                prodURL: ''
            }
        }
    },
    computed: {
        items(){
            return this.$store.state.items
        }
    },
    mounted() {
  
        this.$store.dispatch('fetchItems');
    },
    methods: {
        addItem() {
            this.$store.dispatch('addItem', this.item)
            .then(() => {
               
                this.item = {
                    prodID: '',
                    prodName: '',
                    prodDescription: '',
                    price: '',
                    quantity: '',
                    category: '',
                    suppID: '',
                    prodURL: ''
                }
            })
            .catch(error => {
                console.error(error);

            })
        },
        deleteItem(id) {
            this.$store.dispatch('deleteItem', id)
            .catch(error => {
                console.error(error);
            })
        },
        updateItem(item) {
            this.item = item;
            this.$store.dispatch('updateItem', this.item)
            .catch(error => {
                console.error(error);
            });
        }
    }
}


</script>

<style scoped>
h3{
    text-align: center;
    color: bisque;
}
.section {
    margin-bottom: 40px;
}
.table {
    width: 100%;
    margin-bottom: 20px;
}
.table-bordered {
    border: 1px solid #DEE2E6;
}
.table-bordered th,
.table-bordered td {
    border: 1px solid #DEE2E6;
    padding: 8px;
}
.btn-sm {
    padding: 5px 10px;
    font-size: 0.875rem;
}
.img-thumbnail {
    max-width: 100px;
    max-height: 100px;
}
.user{
    margin-top: 5%;
}
th{
    color: grey
}
</style>