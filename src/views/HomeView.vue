<template>
  <Navbar/>
  <div class="container">
    <h1>Welcome to TrackIt</h1>
    <p>A tactful inventory management tool dedicated to making your life simpler.</p>
    <LogIn/>
    <SignUp/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import LogIn from '@/views/LogInView.vue'
import SignUp from './SignUpView.vue';
  export default {
components: {
  LogIn,
  SignUp,
  Navbar
}
  

}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
h1,h2, h5,p{
    text-align: center;
    font-family: "Michroma", sans-serif; 
}
</style>
