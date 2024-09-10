<template>
  <Navbar/>
  <div class="container-fluid">
    <h1>Welcome to TrackIt</h1>
    <p>A tactful inventory management tool dedicated to making your life simpler.</p>
    <!-- <LoginView/> -->
    <!-- <SignUp/> -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

// import SignUp from './SignUpView.vue';
// import LoginView from './LogInView.vue';
export default {
components: {
  
  // SignUp,
  // LoginView,
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
