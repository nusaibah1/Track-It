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
                          <router-link to="/report" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Report</span> </router-link>
                          <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            
                              
                          </ul>
                      </li>
                      <li>
                          <router-link to="/orders" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></router-link>
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
       
              <div class="container-fluid">
        <div class="row display-2">
            <h2>Users</h2></div>
        <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>User Profile</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        
                        <th>Role</th>
                        <th>Email</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                
                <!-- userID int AI PK 
userName varchar(100) 
userSurname varchar(100) 
userRole varchar(6) 
userEmailAdd varchar(130) 
userPass text 
userUrl text -->
                <tbody v-if="users">
                    <tr v-for="user in users" :key="user.userID">
                        <td>{{ user.userID }}</td>
                        <td><img :src="user.userUrl" :alt="user.userName" class="img-thumbnail"></td>
                        <td>{{ user.userName }}</td>
                        <td>{{ user.userSurname  }}</td>
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.userEmailAdd }}</td>
                        <td>
                            <button @click="editUser(user.userID)" class="btn " data-bs-toggle="modal" :data-bs-target="`#editUserModal${user.userID}`">
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
                                    <input type="text" class="form-control" id="firstName" v-model="user.firstName">
                                 </div>
                                <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" v-model="user.lastName">
                                  </div>
                                  <div class="mb-3">
                                    <label for="userPass" class="form-label">Password</label>
                                   <input type="password" class="form-control" id="userPass" v-model="user.userPass">
                                  </div>
                                  <div class="mb-3">
                                   <label for="userAge" class="form-label">Age</label>
                                   <input type="number" class="form-control" id="userAge" v-model="user.userAge">
                                 </div>
                                 <div class="mb-3">
                                  <label for="userGender" class="form-label">Gender</label>
                                   <select class="form-select" id="userGender" v-model="user.Gender">
                                   <option value="Male">Male</option>
                                     <option value="Female">Female</option>
                               </select>
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
                                    <input type="email" class="form-control" id="emailAdd" v-model="user.emailAdd">
                                  </div>
                                  <div class="mb-3">
                                    <label for="userProfile" class="form-label">Profile</label>
                                    <input type="img" class="form-control" id="userProfile" v-model="user.userProfile">
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
                            <button @click="deleteUser(user.userID)" class="btn ">
                                <p class="fa-solid fa-user-minus"></p> Delete
                            </button>
                        </td>
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
  <!-- <Footer/> -->
  </template>


<script>
import Spinner from '@/components/Spinner.vue';
export default {
    components: {
        Spinner
    },
    data() {
        return {
         
            user: {
                /* 
                userID int AI PK 
userName varchar(100) 
userSurname varchar(100) 
userRole varchar(6) 
userEmailAdd varchar(130) 
userPass text 
userUrl text*/
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
     editUser(id) {
            this.users.forEach((user) => {
                if (user.userID == +id) {
                    this.firstName = user.firstName
                    this.lastName = user.lastName
                    this.userAge = user.userAge
                    this.gender = user.Gender
                    this.userRole = user.userRole
                    this.emailAdd = user.emailAdd
                    this.userProfile = user.userProfile
                    this.userPayload = {
                        userID: user.userID,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userAge: this.userAge,
                        gender: this.Gender,
                        userRole: this.userRole,
                        emailAdd: this.emailAdd,
                        userProfile: this.userProfile
                    }
                }
            })
        },
        updateUser() {
    this.$store.dispatch('updateUser', this.users)
  },
        deleteUser(id){
            this.$store.dispatch('deleteUser', id);
        },
        addUser() {
  this.$store.dispatch('register', this.user);
},
    },
    computed: {
    
        users() {
            return this.$store.state.users
        }
    },
    mounted() {

        this.$store.dispatch('fetchUsers')
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    font-family: "Michroma", sans-serif;
}
</style>