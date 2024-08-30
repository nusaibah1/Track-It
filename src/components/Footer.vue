<template>
    <footer class="container-fluid">
        <div class="row">
            <footer class="lead">Track It &copy; <span>
                {{ currentYear }} 
                </span>
         </footer>
        </div>
    </footer>
</template>

<script>


export default {
name: 'FooterComp',
data() {
    return{
        currentYear: new Date().getUTCFullYear()
    }
},

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Michroma&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.footer{
    text-align: center;
    font-weight: bold;
    
}
.lead{
    font-family: "Michroma", system-ui;
}
</style>