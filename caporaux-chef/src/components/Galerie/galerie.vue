<template>
    <galelieProductList :articles="articles"></galelieProductList>
</template>
<script setup lang="ts">
import galelieProductList from './galerieProductList.vue';
import type { ArticlesInterface } from '@/interfaces/Articles.interfaces';
defineProps<{
    articles: ArticlesInterface[];
}>();
</script>
<style scoped>
</style>