<template>
    <div class="cards-d">
        <CartProduct v-for="article of articles" :article="article" :key="article.id"></CartProduct>
    </div>  
</template>
<script setup lang="ts">
import CartProduct from './CartProduct.vue'
import type { ArticlesInterface } from '../../interfaces/Articles.interfaces';
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