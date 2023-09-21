<template>
    <div class="header">
        <img src="https://www.legion-etrangere.com/mdl_media/photo/1/Camerone-2022-Legion-etrangere-1.jpg" alt="image de contenue">
        <ul  class="navbar">
            <li class="btn" @click="emit('navigate', 'Home')"><a :class="{active: page=== 'Home'}">Home</a></li>
            <li class="btn"  @click="emit('navigate', 'Admin')"><a :class="{active: page=== 'Admin'}">Admin</a></li>
            <li class="btn" @click="emit('navigate', 'Galerie')"><a :class="{active: page=== 'Galerie'}">Galerie Images</a></li>
            <li class="btn" @click="emit('navigate', 'Contact')"><a :class="{active: page=== 'Contact'}">Contact</a></li>
        </ul>
        <h1>Caporaux-chef</h1>
    </div>
</template>
<script setup lang="ts">
import type { Page } from '@/interfaces/type';


    defineProps<{
        page: Page
    }>();
    const emit = defineEmits<{
        (e: 'navigate', page: Page): void
    }>();

</script>
<style scoped>
.header{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 1200px;
}
.header img{
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    padding: 0;
    margin: 0;
    border: 0;
    z-index: 0;
}
.header h1{
    background-color: #f3ec78;
    background-image: linear-gradient(45deg, #026b10, #8a042a);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    transition: all 1s ease-in-out;
}
.header .navbar{
    position: absolute;
    top: 2%;
}

.header .navbar li{
    transition: all 1s ease-in-out;
    display: inline;
    margin: 0px 30px;
    padding: 10px 0px;
    background-color: rgba(6, 6, 6, 0.597);
    
}

.header .navbar li a{
    background-color: rgba(6, 6, 6, 0.116);
    padding: 10px 20px;
    border: 1px solid #63636320;
    border-radius: 2px;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;

}
.header h1{
    font-size: 12vw;
    color: rgba(198, 198, 198, 0.786);
    font-weight: 500;
    font-style: italic;
    transition: all 1s ease-in-out;
    position: absolute;
    top: 10%;
}
a.active {
    box-shadow: 3px 3px 5px  rgba(247, 7, 7, 0.972);
}

@media (max-width: 730px){
    .header h1{
        font-size: 10vw;
        top: 2em;
    }
    .header .navbar {
        position: relative;
        width: 100%;
    }
    .header .navbar li{
        display:block;
        text-align: center;
        margin:  2.5em auto;
        width: 80%;
        background-color: rgba(6, 6, 6, 0.808);
        padding:10px 20px ;
    }
}
</style>