<template>
    <Navbar/>
    <div class="container-fluid">
        <h3>Suppliers</h3>
        
        <table class="table table-bordered">
          <thead>
         
                           <tr>
                              <th>SupplierID</th>
                              <th>Company</th>
                              <th>Product</th>
                              <th>Cost Price</th>
                              <th>Agent</th>
                              <th>Email Address</th>
                              <th>Phone Number</th>
                              
                              
                          </tr>
                      </thead>
                      <tbody v-if="suppliers">
                       
                          <tr v-for="supplier in suppliers" :key="supplier.SuppID">
                              <td>{{ supplier.SuppID }}</td>
                              <td><img :src="supplier.userUrl" :alt="supplier.suppAgent" class="img-thumbnail"></td>
                            
                             <td>{{ supplier.suppCompany}}</td>
                             <td>{{ supplier.suppProduct }}</td>
                             <td>{{ supplier.suppCostPrice }}</td>
                             <td>{{ supplier.suppAgent }}</td>
                              <td>{{ supplier.suppemailAdd }}</td>
                              <td>{{ supplier.suppPhoneNum}}</td>
                              
                          </tr>
                      </tbody>
                      <tbody v-else>
                          <Spinner />
                      </tbody>
                  </table>  
    </div>
    <Footer/>
</template> 

<script>
import Navbar from '@/components/Navbar.vue';
import Spinner from '@/components/Spinner.vue';
import Footer from '@/components/Footer.vue';
export default {
components: {
    Spinner,
    Footer,
    Navbar
    
},
data() {
    return {
        supplier: {
          
            SuppID: "",
            suppCompany: "",
            suppProduct: "",
            suppCostPrice: "",
            suppAgent: "",
            suppemailAdd: ""    , 
            suppPhoneNum: ""
        },
        methods: {
            addSupplier() {
             this.$store.dispatch('addSupplier', this.supplier)
            },
            updateSupplier() {
                this.$store.dispatch('updateSupplier', this.supplier)
            }, 
            deleteSupplier(id) {
                this.$store.dispatch('deleteSupplier', id)
            },
        },
        computed: {
            suppliers() {
         return this.$store.state.suppliers
            }
        },
        mounted() {
            this.$store.dispatch('fetchSuppliers')
            
        },
    }
}
}


</script>

<style>
h3{
    color: bisque;
    text-align: center;
}
th{
    color: grey !important;
}
</style>