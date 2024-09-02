<template>
<div id="navbar">
<Navbar/>
<div>
 <router-view/>


</div>
<Footer/>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


export default{
components: {
Navbar,
Footer
}
}

</script>




<style>

</style>
