
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
                        <router-link to="/report"  class="nav-link px-0 align-middle">
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
                        <router-link to="/users"  class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-people"></i><span class="ms-1 d-none d-sm-inline">Users</span></router-link>
                        
                    </li>
                    <li>
                        <router-link href="#submenu3" to="/about" class="nav-link px-0 align-middle" >
                            <i class="fs-4 bi-blockquote-left"></i><span class="ms-1 d-none d-sm-inline">About</span> </router-link>
                           
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
            <button class="btn bg-secondary">Generate Report</button>
            <router-link :to="{ name: 'orderView', params: { id: order.orderID } }">
 <button>Order Details</button>
</router-link>
            <h3>Orders</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th>OrderID</th>
                    <th>Image</th>
                    <th>User ID</th>
                    <th>Product</th>
                    <th>Status</th>
                    <th>Quantity</th>
                    <th>Total</th>
                       
                    </tr>
                </thead>
                <tbody v-if="orders">
                    <tr v-for="order in orders" :key="order.orderID">
                        <td>{{ order.orderID }}</td>

                        <td></td>
                        <td>{{ payload.userID }}</td>
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


export default {
  components: {
    Spinner,
  
  },
  data() {  
    return {
       order: {
        orderID: '',
        userID: '',
        prodName: '',
        State: '',
        orderQuantity: '',
        Total: ''
      }
    };
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    }
  },
  mounted() {
  
  this.$store.dispatch('fetchOrders');
},
    
  
}


</script> 

<style scoped>
h3{
    text-align: center;
}

h3, th, td{
font-family: "Michroma", "sans-serif";
}
</style>