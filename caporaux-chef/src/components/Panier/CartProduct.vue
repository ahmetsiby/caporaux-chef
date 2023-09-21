<template>
    <div class="card-d">
        <div class="image">
            <img :src="article.image" alt="Un chien">
        </div>
        <div class="body">
            <div class="title"><h4>{{ article.title }}</h4></div>
            <hr>
            <div class="texte">
                <p>{{ article.text.substring(0, 200)+ "..." }}</p>
            </div>
            <hr>
            <div class="footer">
                <button class="btn">Lire le texte</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { ArticlesInterface } from '../../interfaces/Articles.interfaces';
defineProps<{
    article: ArticlesInterface;
}>();

</script>
<style scoped>

</style>