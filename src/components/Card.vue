<template>
       <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
    
</template>

<script>

    export default {
  name: 'CardComp'
    

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.card{
    width: 10rem;

}

.card-header{
    background-color: black;
    color: white;
    font-family: "Michroma", sans-serif;
}
.card-body{
    background-color: white;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    color: black;
}


 

</style>