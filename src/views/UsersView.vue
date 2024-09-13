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
                          <router-link href="#submenu3" to="/about" class="nav-link px-0 align-middle" >
                              <i class="fs-4 bi-blockquote-left"></i><span class="ms-1 d-none d-sm-inline">About</span> </router-link>
                             
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
                  <th>User Details</th>
                  <th>User Profile</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody v-if="filteredAndSortedUsers.length">
                <tr v-for="user in filteredAndSortedUsers" :key="user.userID">
                  <td>{{ user.userID }}</td>
                  <td> <router-link :to="{ name: 'userProfile', params: { id: user.userID } }">
 <button>Details</button>
</router-link></td>
                  <td>
                    <img :src="user.userUrl" :alt="user.userName" class="img-thumbnail img-fluid" />
                  </td>
                  <td>{{ user.userName }}</td>
                  <td>{{ user.userSurname }}</td>
                  <td>{{ user.userRole }}</td>
                  <td>{{ user.userEmailAdd }}</td>
                  <td>
                    <button @click="updateUser(user.userID)" class="btn " data-bs-toggle="modal" :data-bs-target="`#editUserModal${user.userID}`">
                                <p class="fa-solid fa-user-pen"></p> Edit
                            </button>
                            <!-- Edit User Modal -->
                            <div class="modal fade" :id="`editUserModal${user.userID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                 <div class="mb-3">
                                   <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="firstName" v-model="user.userName">
                                 </div>
                                <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" v-model="user.userSurname">
                                  </div>
                                  <div class="mb-3">
                                    <label for="userPass" class="form-label">Password</label>
                                   <input type="password" class="form-control" id="userPass" v-model="user.userPass">
                                  </div>
                               
                                
                              <div class="mb-3">
                            <label for="userRole" class="form-label">Role</label>
                                   <select class="form-select" id="userRole" v-model="user.userRole">
                                      <option value="Admin">Admin</option>
                                     <option value="User">User</option>
                                   </select>
                                  </div>
                                 <div class="mb-3">
                                    <label for="emailAdd" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="emailAdd" v-model="user.userEmailAdd">
                                  </div>
                                  <div class="mb-3">
                                    <label for="userProfile" class="form-label">Profile</label>
                                    <input type="img" class="form-control" id="userProfile" v-model="user.userUrl">
                                  </div>
                            </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary" @click="updateUser()">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    
                    <button @click="deleteUser(user.userID)" class="btn">
                      <p class="fa-solid fa-user-minus"></p> Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <Spinner />
              </tbody>
            </table>
            <button class="btn bg-secondary">Generate Report</button>
          <button class="btn bg-black" @click="addUser()">Add User</button>
        
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
input{
    border: solid black;
}
h2{
    text-align: center;
    font-family: "Michroma", sans-serif;
}
.btn{
    border: 1px black;
}
th{
    font-family: "Michroma", "sans-serif";
}
img{
 height: 60px
}
td{
  font-weight: bold;
}
</style>