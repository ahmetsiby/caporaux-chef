<template>
  <div class="app-content">
    <Header @navigate="navigate" :page="state.page"></Header>
    <div v-show="state.page === 'Admin'" class="formulaire">
      <h3>Formulaire</h3>
      <form @submit="mySubmit" >
        <input v-model="titleValue" type="text" placeholder="title">
        <input v-model="imageValue" type="text" placeholder="image">
        <input v-model="textValue" type="text" placeholder="text">
        <button class="btn">Ajoutez</button>
      </form>
      <div class="list-articles">
        <h3>listes des articles</h3>
        <ul>
          <li v-for="article of ArticleState.articles">
            <p> {{ article.title }}</p>
            <button  @click="deleteArticle(article._id)" class="btn">Supprimer</button>
          </li>
        </ul>
      </div>
    </div>
    <component :is="pages[state.page]" :articles="ArticleState.articles"></component>
    <Footer @navigate="navigate" :page="state.page"></Footer>
  </div>
</template>
<script setup lang="ts">
import  Header  from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Admin from "./admin/Admin.vue";
import Contact from "./contact/Contact.vue";
import Galerie from "./components/Galerie/galerie.vue";
import { reactive } from "vue";
import type { Component as C } from "vue";
import type { ArticlesInterface } from "./interfaces/Articles.interfaces";
import type { Page } from "./interfaces/type";
import {useForm, useField} from 'vee-validate';

const state= reactive<{
  page: Page
}>({
  page: 'Home'
})

const pages : {[s:string]: C} = {
  Home,
  Admin,
  Contact,
  Galerie
}
function navigate(page: Page): void {
  state.page = page;
}

const ArticleState =reactive<{
  articles: ArticlesInterface[]
}>({
  articles: []
})

const {handleSubmit} = useForm();
const mySubmit = handleSubmit(async (values, {resetForm}) => {
  console.log(values);
  try{
    const response = await fetch('http://localhost:4000/articles',{
      method: 'Post',
      body: JSON.stringify(values),
      headers:{
        'content-type': 'application/json'
      }
    });
    const article = await response.json();
    console.log(article);
    ArticleState.articles.push(article);
    resetForm();

  }catch(e){
    console.log(e)
  }
})
const { value: titleValue} = useField('title');
const { value: imageValue} = useField('image');
const { value: textValue} = useField('text');


async function fetchArticles(){
  try{
    const response = await fetch("http://localhost:4000/articles");
    console.log('connection reussiie')
    const articles: ArticlesInterface | ArticlesInterface[] = await response.json();
    if(articles){
      if(Array.isArray(articles)){
        ArticleState.articles = articles;
      }else{
        ArticleState.articles = [articles]
      }
    }
    
  }catch(e){
    console.log(e)
  }
};
async function deleteArticle(articleId?: string){
  
  try{
    if(articleId){
     await fetch(`http://localhost:4000/articles/${articleId}`,{
        method: 'Delete'
      })
      ArticleState.articles = ArticleState.articles.filter(a => a._id !== articleId)
    }
  }catch(e){
    console.log(e)
    }
}
fetchArticles();
</script>
<style scoped>
.app-content{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.formulaire{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 600px;
  background-color: rgba(237, 235, 235, 0.265);
  border: 1px solid rgba(157, 155, 155, 0.184);
  border-radius: 15px;
}
.formulaire h3{
  font-size: 2em;
  margin-top: 50px;

}
form{
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input{
  margin: 10px 0;
  height: 3em;
  border: 1px solid rgba(180, 179, 179, 0.22);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 1em;
}
button{
  margin: 25px 0;
  padding: 10px 0;
  font-size: 1.5em;
  font-weight:lighter;
  margin-bottom: 0;
  border: 1px solid rgba(130, 130, 130, 0.25);
  background-color: rgba(237, 235, 235, 0.265);


}
.list-articles{
  display: flex;
  flex-direction: column;
  width: 90%;
}
.list-articles h3{
  margin: 10px 0;
  text-align: center;

}
.list-articles button{
  margin: 0;
  padding: 5px 2px;
  font-size: 1em;
  background-color: rgba(237, 235, 235, 0.265);

}
.list-articles ul{
  width: 100%;
}
.list-articles li{
  border: 1px solid rgba(179, 179, 179, 0.186);
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.list-articles li p{
  margin-left: 5px;
}

</style>