 <template>
   <nav class="navbar navbar-expand-md navbar-expand-lg ">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="https://nusaibah1.github.io/inventoryImages/images/rmlogo.png" alt="logo"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about" >About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/report">Report</router-link>
        </li> 
        <li class="nav-item">
          <router-link class="nav-link" to="/signUp">Sign Up</router-link>
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Sign In</router-link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
</template> 



<style>
nav-link{
  color: beige;
}
.nav-item{
  
  margin-top: 5%;
  font-size: 23px;

}
.nav-link:hover{
  color: white !important;
}
.nav-link:active{
  color: beige;
  text-decoration: none;
}
.nav-link{
  color: bisque !important;
  font-family: "Michroma", system-ui;
}
    
img[alt='logo'] {
    width: 5rem;
}
.navbar{
    background-color:  rgb(33, 33, 33);
    overflow: hidden;
}

</style>


<script>

    export default {
   name: 'NvabarComp'
    

}
</script> 