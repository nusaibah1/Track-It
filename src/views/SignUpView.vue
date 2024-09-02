<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Sign Up</h2>
        </div>
        <div class="row">
            <form class="form" @submit.prevent="register()">
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="text" placeholder="First name" v-model="payload.userName"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="text" placeholder="Last name" v-model="payload.userSurname"
                            required />
                    </span>
                    <span>
                        <input class="form-control" type="text" placeholder="Role" v-model="payload.userRole"
                            required />
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
                        <input class="form-control" type="url" placeholder="Profile Picture" v-model="payload.userUrl"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                    <button type="submit" class="btn btn-success" @click="register()">Submit</button>
                    <button type="reset" class="btn btn-dark">Reset</button>
                </div>
            </form>
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
    userRole: '',
    userEmailAdd:'',
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
    font-family: "Michroma", sans-serif; 
}
button{
    font-family: "Michroma", sans-serif; 
    margin: 3px;
}

</style>