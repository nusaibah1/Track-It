<template>
  <Navbar/>
  <div class="container-fluid">
    <h1>Welcome to TrackIt</h1>
    <p class="lead">
      A tactful inventory management tool dedicated to making your life simpler.
    </p>
    <p class="lead">
      Track It is an Inventory System dedicated to ensuring effortless management! 
      Here, you can effortlessly track and manage your inventory, streamline your operations,
      and make informed decisions to optimize stock levels. Let us help you simplify your inventory management 
      and enhance your productivity.Enjoy seamless organization and efficient control at your fingertips
    </p>
  <div class="d-flex justify-content-center gap-3">
      <router-link to="signUp">
        <button class="btn" id="signUp">Get Started</button>
      </router-link>
      <router-link to="logIn">
        <button class="btn" id="logIn">Log In</button>
      </router-link>
    </div>
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
#signUp, #logIn{
  text-decoration: none;
}
#signUp{
 background-color:  #4b7f52;
}
#logIn{
 background-color:#db2b39 ; 
}
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

 router-link{
  text-decoration: none;
 }

button {
 
  width: 200px;
  height: 50px;
  display: inline-block;
  background-color: black;
  color: bisque;
  margin: 0.2%;
  font-weight: bold;
  
}
button:hover{
  background-color: green;
}
</style>
