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
    width: 18rem;
    margin: 3px 3px;

}

.card-header{
    background-color: beige;
    color: #b6400e;
    font-family: "Michroma", sans-serif;
    border: solid black 1px;

}
.card-body{
    background-color: white;
    border-radius: 3px;
    font-family: "Michroma", sans-serif;
    color: black;
    border: solid black 1px;
}


 

</style>