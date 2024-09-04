<template>
 <!-- Button to trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
    Login
</button>

<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="form" @submit.prevent="login">
                    <div class="form-control-wrapper">
                        <span>Email address
                            <input type="email" class="form-control" placeholder="Email" v-model="payload.userEmailAdd"
                                pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" />
                        </span>
                    </div>
                    <div class="form-control-wrapper">
                        <span>Password
                            <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass"
                                minlength="8" />
                        </span>
                    </div>
                    <div class="form-control-wrapper d-md-flex d-block justify-content-start">
                        <button type="submit" class="btn btn-success">Login</button>
                    </div>
                    <div class="form-control-wrapper">
                        <div class="account justify-content-between d-md-flex d-block">
                            <!-- <div class="item">
                                <button class="btn btn-success">Forgot Password</button>
                            </div> -->
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'

const store = useStore()

const payload = reactive({
    userEmailAdd: '',
    userPass: ''
})
function login() {
    store.dispatch('login', payload)
}
</script>


<style scoped>
h1,h2, h5,p{
    text-align: center;
    font-family: "Michroma", sans-serif; 
}
button{
    font-family: "Michroma", sans-serif; 
    margin: 3px;
}
span{
    font-family: "Michroma", sans-serif;
}


</style>
