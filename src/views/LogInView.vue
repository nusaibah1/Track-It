<template>
 
    <Navbar/>
    <div class="row display-2">
      <h3 class="">Log In</h3>
    </div>
    <div class="form">
 <!-- From Uiverse.io by AmIt-DasIT  -->
 <form class="form" @submit.prevent="login">
  <span class="input-span">
    <label for="email" class="label">Email</label>
    <input type="email" name="email" id="email"
  /></span>
  <span class="input-span">
    <label for="password" class="label">Password</label>
    <input type="password" name="password" id="password"
  /></span>
 
  <input class="submit" type="submit" value="Log in" />
  <a href="/signUp"><span class="span">Don't have an account? Sign up</span>
  </a>
</form>
</div>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'
import Navbar from '@/components/Navbar.vue';

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
.form input[type="password"] {
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
