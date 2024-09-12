<template>
  <Navbar/>
  <div class="container">
       <div class="row">
          <h2 class="display-2">Register</h2>
      </div>
      <div class="row">
        <div class="form">
 <!-- From Uiverse.io by AmIt-DasIT  -->
 <form class="form" @submit.prevent="register">
  <span class="input-span">
    <label for="email" class="label">First Name:</label>
    <input class="form-control" type="text" placeholder="First name" v-model="payload.userName"
    required /></span>
  <span class="input-span">
    <label for="password" class="label">Last Name:</label>
    <input class="form-control" type="text" placeholder="last name" v-model="payload.userSurname"
    required />
</span>
 <span class="input-span">
  <label for="userRole" class="label"></label>
  <input class="form-control" type="text" placeholder="Employee Role" v-model="payload.userRole" required />
 </span>
 <span class="input-span">
    <label for="userEmailAdd" class="label">Email Address:</label>
    <input class="form-control" type="email" placeholder="Email address" v-model="payload.userEmailAdd"
    required />
 </span>
 <span class="input-span">
    <label>User Password:</label>
    <input class="form-control" type="password" placeholder="Password" v-model="payload.userPass"
    required />
 </span>


  <input class="submit" type="submit" value="Sign Up" />
  <router-link to="/login"><span class="span">Already have an account? Sign In</span>
  </router-link>
</form>
</div>
 
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
/* input{
  background-color: gray;
  
  border: solid 1px bisque;
} */
input:hover{
  background-color: black;
}
/* h1,h2, h5,p{
    color: blue;
    text-align: center;
    font-family: "Michroma", sans-serif; 
} */
button{
    font-family: "Michroma", sans-serif; 
    margin: 3px;
}

h3{
  text-align: center;
  font-family: "Michroma", sans-serif; 
}

label{
  font-family: "Michroma", sans-serif; 
}
/* From Uiverse.io by bociKond */ 
.form {
  --bg-light: #efefef;
  --bg-dark: #707070;
  --clr: black;
  --clr-alpha: #9c9c9c60;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

}

.form .input-span {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form input[type="email"],
.form input[type="password"],
.form input[type="url"]
.form input[type="text"] {
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--clr-alpha);
  outline: 2px solid var(--bg-dark);
}

.form input[type="email"]:focus,
.form input[type="password"]:focus {
  outline: 2px solid var(--clr);
}

.label {
  align-self: flex-start;
  color: var(--clr);
  font-weight: 600;
}

.form .submit {
  padding: 1rem 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3rem;
  background-color: var(--bg-dark);
  color: var(--bg-light);
  border: none;
  cursor: pointer;
  transition: all 300ms;
  font-weight: 600;
  font-size: 0.9rem;
}

.form .submit:hover {
  background-color: var(--clr);
  color: var(--bg-dark);
}

.span {
  text-decoration: none;
  color: var(--bg-dark);
}

.span a {
  color: var(--clr);
}




 
</style>

