<template>

    <div class="container-fluid">
      <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
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
                      <li>
                      </li>
                  </ul>
                  

                 
              </div>
          </div>
        <div class="col py-3">
     
          <div class="container-fluid">
            <div class="row display-2">
              <h2>Employees</h2>
            </div>
  
            <!-- Search and Sort Controls -->
            <div class="row mb-3">
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="searchQuery"
                  class="form-control"
                  placeholder="Search Employees..."
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
                  <th>UserID</th>
                 
                  <th>User Profile</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Email</th>
                 
                </tr>
              </thead>
              <tbody v-if="filteredAndSortedUsers.length">
                <tr v-for="user in filteredAndSortedUsers" :key="user.userID">
                  <td>{{ user.userID }}</td>
                  <!-- <td> <router-link :to="{ name: 'userProfile', params: { id: user.userID } }">
 <button>Details</button>
</router-link></td> -->
                  <td>
                    <img :src="user.userUrl" :alt="user.userName" class="img-thumbnail img-fluid" />
                  </td>
                  <td>{{ user.userName }}</td>
                  <td>{{ user.userSurname }}</td>
                  <td>{{ user.userRole }}</td>
                  <td>{{ user.userEmailAdd }}</td>
                
                </tr>
              </tbody>
              <tbody v-else>
                <Spinner />
              </tbody>
            </table>
            
        
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      searchQuery: '',
      sortOrder: 'asc',
      user: {
        userID: null,
        userName: "",
        userSurname: "",
        userPass: "",
        userRole: "",
        userEmailAdd: "",
        userUrl: "",
      }
    }
  },
  methods: {
    updateUser() {
      this.$store.dispatch('updateUser', this.users)
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id);
    },
    addUser() {
      this.$store.dispatch('register', this.user);
    }
  },
  computed: {
    users() {
      return this.$store.state.users || [];  // Ensure users is an array
    },
    filteredAndSortedUsers() {
      const filtered = this.users.filter(user =>
        user.userName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.userSurname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.userEmailAdd.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      return filtered.sort((a, b) => {
        const comparison = a.userName.localeCompare(b.userName);
        return this.sortOrder === 'asc' ? comparison : -comparison;
      });
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
  }
}
</script>


<style scoped>
input, .form-select{


    border: solid saddlebrown 1px;
}
input:hover{
  border: solid beige 1px;
}
h2{
    text-align: center;
    font-family: "Michroma", sans-serif;
    color: beige;
    font-weight: bold;
}

th{
    font-family: "Michroma", "sans-serif";
    color: #b6400e !important;
}
img{
 height: 60px
}
td{
  color: black;
  font-family: "Michroma", "sans-serif";
}
table{
  border: solid saddlebrown 1px;
}

.btn{
    border:  solid black 2px;
    color: beige;
    font-family: "Michroma", sans-serif; 
}
.btn:hover{
    background-color: #c75608;
    border:  solid black 2px;
    color: aliceblue;
}
.col-auto{
    background-color: #b6400e;
}
</style>