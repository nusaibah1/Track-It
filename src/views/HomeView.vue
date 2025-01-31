<template>
  <Navbar/>
  <div class="container-fluid">
    <h1>Welcome to TrackIt</h1>
    
    <p class="lead">
      Track It is an Inventory System dedicated to ensuring effortless management! 
      Here, you can effortlessly track and manage your inventory, streamline your operations, 
      and make informed decisions to optimize stock levels. Let us help you simplify your inventory management and enhance your productivity. 

    </p>
 
 <router-link to="signUp"><button class="btn mx-auto d-flex justify-content-center">Get Started</button></router-link>
 <router-link to="logIn"><button class="btn mx-auto d-flex justify-content-center">Log In</button></router-link>
      
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
  position: fixed; 
  width: 100vw;  
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
 
}
h1{
  margin: 130px 0;
  color: black;
  font-weight: bold;
}
.lead{
  font-weight: bold;

 
}
h1,h2, h5,p{
    text-align: center;
    font-family:  'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
}



/* .container-fluid{
  background-image: url("../assets/blob-scene-haikei.png") ;
  background-size: 100% 100%;
} */
button:hover{
  background-color: ghostwhite;
}
</style>
