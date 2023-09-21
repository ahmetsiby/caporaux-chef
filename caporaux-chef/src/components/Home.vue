<template>
  <Cart :articles="articles"></Cart>
</template>
<script setup lang="ts">
import Cart from "./Panier/Cart.vue";
import { reactive } from "vue";
import type { ArticlesInterface } from "@/interfaces/Articles.interfaces";
defineProps<{
    articles: ArticlesInterface[];
}>();
</script>
<style scoped>
</style>