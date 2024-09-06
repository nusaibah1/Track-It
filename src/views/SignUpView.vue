<template>
  <Navbar/>
  <div class="container">
      <div class="row">
          <h2 class="display-2">Register</h2>
      </div>
      <div class="row">
          <form class="form" @submit.prevent="register">
              <div class="form-control-wrapper">
                  <span>
                      <input class="form-control" type="text" placeholder="First name" v-model="payload.userName"
                          required />
                  </span>
              </div>
              <div class="form-control-wrapper">
                  <span>
                      <input class="form-control" type="text" placeholder="last name" v-model="payload.userSurname"
                          required />
                  </span>
              </div>
              <div class="form-control-wrapper">
                  <span>
                      <input class="form-control" type="text" placeholder="Employee Role" v-model="payload.userRole" required />
                  </span>
              </div>
              <div class="form-control-wrapper">
                  <span>
                      <input class="form-control" type="email" placeholder="Email address" v-model="payload.userEmailAdd"
                          required />
                  </span>
              </div>
              <div class="form-control-wrapper">
                  <span>
                      <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
                          required />
                  </span>
              </div>
              <div class="form-control-wrapper">
                  <span>
                      <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userUrl"
                          required />
                  </span>
              </div>
              <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                  <button type="submit" class="btn btn-success bg-secondary">Submit</button>
                  <button type="reset" class="btn btn-dark">Reset</button>
              </div>
          </form>
      </div>
  </div>

 
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const payload = reactive({ 
    userName: '',
    userSurname: '',
      userEmailAdd: '',
      userRole: '',
      userPass: '',
      userUrl: ''
})

function register() {
    store.dispatch('register', payload)
}

</script>

<style scoped>
h2{
  text-align: center;

}
input, h5, h2, button{
    font-family: "Michroma", sans-serif;
}
input{
  background-color: gray;
  
  border: solid 1px bisque;
}
input:hover{
  background-color: black;
}

 
</style>