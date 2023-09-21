<template>
    <div class="cards-d">
        <galerieProduct v-for="article of articles" :article="article" :key="article._id"></galerieProduct>
    </div> 
</template>
<script setup lang="ts">
import galerieProduct from './galerieProduct.vue';
import type { ArticlesInterface } from '@/interfaces/Articles.interfaces';
defineProps<{
    articles: ArticlesInterface[];
}>();
</script> 
<style scoped>
.cards-d{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>