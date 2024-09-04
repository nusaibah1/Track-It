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
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                          
                            
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">People</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">HR</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Suppliers</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
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
        <h3>Suppliers</h3>
  <table class="table table-bordered">
    <thead>
   
                     <tr>
                        <th>SupplierID</th>
                        <th>Company</th>
                        <th>Agent</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        
                        
                    </tr>
                </thead>
                <tbody v-if="suppliers">
                    <tr v-for="supplier in suppliers" :key="supplier.SuppID">
                        <td>{{ supplier.SuppID }}</td>
                        <td><img :src="supplier.userUrl" :alt="supplier.suppAgent" class="img-thumbnail"></td>
                        <td>{{ supplier.suppAgent }}</td>
                       <td>{{ supplier.suppCompany}}</td>
                        <td>{{ supplier.emailAdd }}</td>
                        <td>{{ supplier.phoneNum}}</td>
                        
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>     
            <h3>Orders</h3>
            <table class="table table-bordered">
                <thead>
        <tr>
                       <th>OrderID</th>
                        <th>UserID</th>
                        <th>Product</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Total</th>
                       
                    </tr>
                </thead>
                <tbody v-if="orders">
                    <tr v-for="order in orders" :key="order.orderID">
                        <td>{{ order.orderID }}</td>
                        <td><img :src="payload.prodURL" :alt="payload.prodName" class="img-thumbnail"></td>
                        <td>{{ order. userID }}</td>
                        <td>{{ order.prodName }}</td>
                        <td>{{ order.State}}</td>
                        <td>{{ order.orderQuantity }}</td>
                        <td>{{ order.Total }}</td>
                        
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
            <h3>
                Items
            </h3>
            <table class="table table-bordered">
    <thead>

                    
                    <tr>
                        <th>Item ID</th>
                        <th>SKU</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Catergory</th>
                        <th>Supplier ID</th>
                      
                    </tr>
                </thead>
                <tbody v-if="items">
                    <tr v-for="item in items" :key="item.prodID">
                        <td>{{ item.prodID }}</td>
                        <td><img :src="item.user" :alt="item.prodName" class="img-thumbnail"></td>
                        <td>{{ item.prodName }}</td>
                        <td>{{ item.prodDescription  }}</td>
                        <td>{{ item.Price}}</td>
                        <td>{{ item.Quantity }}</td>
                        <td>{{ item.Catergory }}</td>
                        <td>{{ item.SuppID }}</td>
                        
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
            <h3>Orders</h3>
            <table class="table table-bordered">
                <thead>
        <tr>
                       <th>OrderID</th>
                        <th>UserID</th>
                        <th>Product</th>
                        <th>Status</th>
                        <th>Quantity</th>
                        <th>Total</th>
                       
                    </tr>
                </thead>
                <tbody v-if="orders">
                    <tr v-for="order in orders" :key="order.orderID">
                        <td>{{ order.orderID }}</td>
                        <td><img :src="payload.prodURL" :alt="payload.prodName" class="img-thumbnail"></td>
                        <td>{{ order. userID }}</td>
                        <td>{{ order.prodName }}</td>
                        <td>{{ order.State}}</td>
                        <td>{{ order.orderQuantity }}</td>
                        <td>{{ order.Total }}</td>
                        
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
       </div>
    </div>
</div>
</template>

<script>


import Spinner from '@/components/Spinner.vue';
//import Card from '../components/Card.vue';




    export default {
components: {
    Spinner
    //Card
}

}
</script>

<style  scoped>
h3{
    text-align: center;
    font-family: "Michroma", sans-serif; 
}

table{
    font-family: "Michroma", sans-serif;   
}
</style>