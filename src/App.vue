<template>
<div>
<!-- <Navbar/> -->
<div>
  
 <router-view/>

 <!-- <LineChart /> -->
</div>

</div>
<Footer/>
</template>
<script>

import Footer from './components/Footer.vue';
// import LineChart from './components/LineChart.vue';


export default{
components: {
// Navbar,
Footer
// LineChart,

}
}

</script>




<style>

</style>
