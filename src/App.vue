<script setup lang="ts">
import { inject } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const mainAppUrl: string = inject('mainAppUrl') as string // 调用全局变量
console.log('mainAppUrl', mainAppUrl)
// 跳转到外部URL的方法  
const goToExternalUrl = () => {
    window.location.href = mainAppUrl
}  
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
        <div @click="goToExternalUrl" class="custom-router-link">  
          返回主应用  
        </div> 
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.custom-router-link {  
  cursor: pointer;  
  text-decoration: underline;  
  color: blue;
  padding-top: 1rem;
}  
  
.custom-router-link:hover {  
  color: darkblue;
} 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
