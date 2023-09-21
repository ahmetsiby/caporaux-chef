<template>
    <div class="card-d">
        <div class="image">
            <img :src="article.image" alt="Un chien">
        </div>
    </div>
</template>
<script setup lang="ts">
import type { ArticlesInterface } from '@/interfaces/Articles.interfaces';
defineProps<{
    article: ArticlesInterface;
}>();
</script> 
<style scoped>
</style>