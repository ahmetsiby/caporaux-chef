<template>
    <div class="footer">
        <div class="gauche">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque ad similique. Dicta aliquam consectetur laboriosam officia eveniet est, accusantium exercitationem qui, dolorum quas, praesentium suscipit ab deleniti expedita illo accusamus. Laboriosam molestiae accusantium distinctio quis inventore repellat sunt vero dolores fugit reprehenderit, nulla earum dignissimos, ab similique aut. Deserunt.</p>
        </div>
        <div class="lien">
            <ul class="footer-list">
                <li class="btn" @click="emit('navigate', 'Home')"> <a :class="{active: page ==='Home'}">Home</a></li>
                <li class="btn" @click="emit('navigate', 'Admin')"> <a :class="{active: page==='Admin'}">Admin</a></li>
                <li class="btn" @click="emit('navigate' , 'Galerie')">Galerie Images</li>
                <li class="btn" @click="emit('navigate', 'Contact')">Nous contacter</li>
            </ul>
        </div>
        <div class="droite">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, velit molestias iste quaerat architecto eum, eveniet vitae, odio deleniti quo magni quas quisquam obcaecati modi. Architecto ea nemo dolorum quaerat atque, vel dolores, sed quos, eligendi saepe eos quidem consectetur iusto mollitia magnam dicta repudiandae laboriosam quas necessitatibus nostrum quod?</p>
        </div>
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
.footer{
    color: aliceblue;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: rgb(0, 0, 0);
    padding: 50px 0;

}
.gauche{
    width: 30%;
    margin-top: 20px;
}
.footer-list{
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.footer-list li{
    display:block;
    text-align: center;
    margin:  1em auto;
    background-color: rgba(133, 133, 133, 0.411);
    width: 100%;
}
a.active {
    color: rgba(238, 176, 176, 0.525);
}

.droite{
    width: 30%;
    margin-top: 20px;
}
@media (max-width: 730px){
    .footer{
        flex-direction: column;
        align-items: center;
    }
    .gauche{
        width: 80%;
    }
    .footer-list{
        width: 100%;
        margin: 20px 0;
        text-align: center;
    }
    .footer-list li{
        width: 90vw;

    }
    .droite{
        width: 80%;

    }
}
</style>