<template>
    <div>
        <!-- Button to Open the Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
   Register
</button>

<!-- The Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h5 class="modal-title" id="registerModalLabel">Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <form class="form" @submit.prevent="register">
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="text" placeholder="First name" v-model="payload.userName" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="text" placeholder="Last name" v-model="payload.userSurname" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="text" placeholder="Employee Role" v-model="payload.userRole" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="email" placeholder="Email address" v-model="payload.userEmailAdd" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass" required />
            </span>
          </div>
          <div class="form-control-wrapper">
            <span>
              <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userUrl" required />
            </span>
          </div>
          <div class="form-control-wrapper d-md-flex d-block justify-content-between">
            <button type="submit" class="btn btn-success">Submit</button>
            <button type="reset" class="btn btn-dark">Reset</button>
          </div>
        </form>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



    </div>
</template>

<script setup>
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
input, h5, button{
    font-family: "Michroma", sans-serif;
}
</style>