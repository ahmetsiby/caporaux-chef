<template>
     <CartProducList :articles="articles"></CartProducList>
</template>
<script setup lang="ts">
import CartProducList from "./CartProductList.vue"
import type { ArticlesInterface } from '../../interfaces/Articles.interfaces';
defineProps<{
    articles: ArticlesInterface[];
}>();
</script>
<style scoped>

</style>