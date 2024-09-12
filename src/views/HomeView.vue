<template>
  <Navbar/>
  <div class="container-fluid">
    <h1>Welcome to TrackIt</h1>
    <p class="lead">A tactful inventory management tool dedicated to making your life simpler.</p>
    <p class="lead">Welcome to Track It, an Inventory System dedicated to ensuring effortless management! Here, you can effortlessly track and manage your inventory, streamline your operations, and make informed decisions to optimize stock levels. Let us help you simplify your inventory management and enhance your productivity. 
      Enjoy seamless organization and efficient control at your fingertips</p>
 
 <router-link to="signUp"><button>Get Started</button></router-link>
 <router-link to="logIn"><button>Log In</button></router-link>
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
h1{
  color: black;
  font-weight: bold;
}
.lead{
  font-weight: bold;
}
h1,h2, h5,p{
    text-align: center;
    font-family: "Michroma", sans-serif; 
}
button{
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  background-color: black;
  color: bisque;
}
</style>
