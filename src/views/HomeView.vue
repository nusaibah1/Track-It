<template>
  <Navbar/>
  <div class="container-fluid" :style="heroStyle">
    <h1>Welcome to TrackIt</h1>
    
    <p class="lead">
      Track It is an Inventory System dedicated to ensuring effortless management! 
      Here, you can effortlessly track and manage your inventory, streamline your operations, 
      and make informed decisions to optimize stock levels. Let us help you simplify your inventory management and enhance your productivity. 
    </p>

    <div class="button-container">
      <router-link to="signUp"><button class="btn">Get Started</button></router-link>
      <router-link to="logIn"><button class="btn">Log In</button></router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      backgroundImage: require('@/assets/inventory.jpg') // Place your image in the assets folder
    };
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      };
    }
  }
}
</script>

<style scoped>
.container-fluid {
  position: fixed; 
  width: 100vw;  
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  margin-top: -300px;
 color: orange;
  font-weight: 800;
  font-family: "Michroma", system-ui;
}

.lead {
  margin: 30px 0;
  font-family: "Michroma", system-ui;
  font-weight: 300;
  color: whitesmoke;
}

h1, h2, h5, p {
  text-align: center;
}

button {
  color: #b6400e;
  background-color: whitesmoke;
  text-decoration: none !important;
  font-family: "Michroma", system-ui;
}

button:hover {
  background-color: ghostwhite;
  color: black;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* Adds space between the buttons */
}
</style>