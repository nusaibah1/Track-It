<template>
<div>
<!-- <Navbar/> -->
<div>
 <router-view/>


</div>
<Footer/>
</div>
</template>
<script>

import Footer from './components/Footer.vue';



export default{
components: {
// Navbar,
Footer,


}
}

</script>




<style>

</style>
