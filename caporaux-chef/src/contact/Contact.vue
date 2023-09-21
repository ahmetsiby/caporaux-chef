<template>
    <form>
    <h1>Nous contacter !!!</h1>
        <div>
            <label for="nom">Nom</label>
            <input type="text">
        </div>
        <div>
            <label for="prenom">Prenom</label>
            <input type="text">
        </div>
        <div>
            <label for="email">Emal</label>
            <input type="email" name="email" id="email">
        </div>
        <button class="btn ">Envoyer</button>
    </form>
</template>
<script setup lang="ts">
</script>
<style scoped>
    form{
        margin: auto;
        text-align: center;
    }
    h1{
        margin-bottom: 15px;
    }
    div{
        margin: 10px 0;
        display: flex;
        flex-direction: column;
    }
    label{
        margin: 10px 0;
    }
    input{
        height: 25px;
    }
    button{
        margin-top: 15px;
    }
</style>