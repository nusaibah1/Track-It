<template>
    <div class="container-fluid">
      <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                  <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                      <span class="fs-5 d-none d-sm-inline">  <router-link class="navbar-brand" to="/"></router-link></span>
                  </a>
                  <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                      <li class="nav-item">
                          <router-link to="/" class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                          </router-link>
                      </li>
                      <li>
                          <router-link to="/report" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Report</span> </router-link>
                          <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            
                              
                          </ul>
                      </li>
                      <li>
                          <router-link to="/orders" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></router-link>
                      </li>
                      
          <li>
                          <router-link to="/items" class="nav-link px-0 align-middle ">
                              <i class="fs-4 bi-shop"></i><span class="ms-1 d-none d-sm-inline">Items</span></router-link>
                          
                      </li>
                      <li>
                          <router-link to="/users" class="nav-link px-0 align-middle ">
                              <i class="fs-4 bi-people"></i><span class="ms-1 d-none d-sm-inline">Users</span></router-link>
                          
                      </li>
                  
                      <li>
                          <router-link to="/suppliers" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-truck"></i> <span class="ms-1 d-none d-sm-inline">Suppliers</span> </router-link>
                      </li>
                  </ul>
                  <hr>
                  <div class="dropdown pb-4">
                      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="https://nusaibah1.github.io/inventoryImages/images/admin.jpg" alt="hugenerd" width="30" height="30" class="rounded-circle">
                          <span class="d-none d-sm-inline mx-1">Admin</span>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                          <li><a class="dropdown-item" href="#">New project...</a></li>
                          <li><a class="dropdown-item" href="#">Settings</a></li>
                          <li><a class="dropdown-item" href="#">Profile</a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="#">Sign out</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="col py-3">
          
            <h3>
            Items
        </h3>
           <!-- Search and Sort Controls -->
<div class="row mb-3">
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="searchQuery"
                  class="form-control"
                  placeholder="Search Items..."
                />
              </div>
              <div class="col-md-6">
                <select v-model="sortOrder" class="form-select">
                  <option value="asc">Sort Alphabetically Ascending</option>
                  <option value="desc">Sort Alphabetically Descending</option>
                </select>
              </div>
            </div>
              <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>SKU</th>
                    <th>Image</th>
               
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>SuppID</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody v-if="filteredAndSortedItems.length">
             
                <tr v-for="item in filteredAndSortedItems" :key="item.prodID">
                    <td>{{ item.prodID }}</td>
                    <td>{{ item.prodSKU }}</td>
                    <td><img :src="item.prodURL" :alt="item.prodName" class="img-thumbnail"></td>
                    
                    <td>{{ item.prodName }}</td>
                    <td>{{ item.prodDescription }}</td>
                    
                    <td>{{ item.prodQuantity }}</td>
                    <td>{{ item.prodCategory }}</td>
                    <td>{{ item.SuppID }}</td>
                    <td>
                       


<button class="btn btn-secondary" data-bs-toggle="modal" :data-bs-target="`#editProductModal${item.itemID}`">
                               Edit
                            </button>
                            <div class="modal fade" :id="`editProductModal${item.itemID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form >
                                            <div class="mb-3">
                                   <label for="firstName" class="form-label">Product SKU</label>
                                  <input type="text" class="form-control" id="prodName" v-model="item.prodSKU">
                                  </div>
                                  <div class="mb-3">
                                   <label for="firstName" class="form-label">Product  URL</label>
                                  <input type="text" class="form-control" id="prodName" v-model="item.prodURL">
                                  </div>
                                 <div class="mb-3">
                                   <label for="firstName" class="form-label">Product Name</label>
                                  <input type="text" class="form-control" id="prodName" v-model="item.prodName">
                                  </div>
                                  <div class="mb-3">
                                    <label for="lastName" class="form-label">Product Description</label>
                                    <input type="text" class="form-control" id="prodDescription" v-model="item.prodDescription">
                                  </div>
                                     <div class="mb-3">
                                  <label for="lastName" class="form-label">Product Catergory</label>
                                <input type="text" class="form-control" id="Category" v-model="item.prodCategory">
                                 </div>
                                 
                                 
                                    <!-- prodID, prodSKU, prodURL, prodName, prodDescription,prodQuantity, sellingPrice,prodCategory, SuppID  -->
                                    <div class="mb-3">
                                    <label for="lastName" class="form-label">Product Price</label>
                                    <input type="text" class="form-control" id="amount" v-model="item.sellingPrice">
                                 </div>
                                    <div class="mb-3">
                                   <label for="lastName" class="form-label">Product Quantity</label>
                                   <input type="text" class="form-control" id="quantity" v-model="item.prodQuantity">
                              </div>
                                 
                                 <div class="mb-3">
                                    <button type="submit" class="btn btn-primary" @click.prevent="updateItem(JSON.stringify(item))">Save changes</button>
                                 </div>
                                </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            <button @click="deleteItem(item.prodID)" class="btn ">
                                Delete
                            </button>

                        <!-- <button @click="deleteItem(item.prodID)" class="btn bg-danger">Delete</button> -->
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
          </div>
              <!-- <button class="btn bg-secondary">Generate Report</button>
              <button @click="addItem()" class="btn bg-black">Add Item</button> -->
              <!-- <router-link :to="{ name: 'itemDetails', params: { id: item.prodID }}">
              <button class="btn">View</button>
            </router-link> -->
         </div>
      </div>

  </template>













<script>

import Spinner from '@/components/Spinner.vue';

export default {
    components: {
        Spinner,
    
     
    },
    data() {
        return {
          searchQuery: '',
          sortOrder: '',
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
            return this.$store.state.items || []
        },
        filteredAndSortedItems() {
      const filtered = this.items.filter(item =>
        item.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.prodSKU.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.prodDescription.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      return filtered.sort((a, b) => {
        const comparison = a.prodName.localeCompare(b.prodName);
        return this.sortOrder === 'asc' ? comparison : -comparison;
      });
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
    font-family: "Michroma", sans-serif;
    color: black;
    font-weight: bold;
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
    color: grey;
    font-weight: bold;
    font-family: "Michroma", sans-serif;
}
.btn{
    color: bisque;

float: right;

    font-family: "Michroma", sans-serif;
}
td{
   
    font-weight: bold;
    
}
</style>