<template>
  <v-app>
    <Header />
    <v-main>
      <nav>
        <router-link to="/">Top</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/>
      <HelloWorld />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// Components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    HelloWorld
  },
  computed: {
    isAuthenticated () { /*ログインしていたらtrueを返す*/ }
  },
  methods: {
    logOut () {}
  }
}
</script>

<style>
  .info{
    background-color: cornflowerblue;
    font-size: large;
  }

  .routerLink {
    color: white;
    text-decoration: none;
    font-size: large;
  }
</style>
