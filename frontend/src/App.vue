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
  methods: {
    createTitleDesc : function(routeInstance){
        //titleを設定する処理
      if(routeInstance.meta.title){
        var setTitle = routeInstance.meta.title + ' | Desk&Device sharing';
        document.title = setTitle;
      } else {
        document.title = 'Desk&Device sharing'
      }
    }
  },
  mounted : function(){
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  watch: {
    '$route' (routeInstance, from) {
      this.createTitleDesc(routeInstance);
    }
  },
  components: {
    Header,
    Footer,
    HelloWorld
  },
  computed: {
    isAuthenticated () { /*ログインしていたらtrueを返す*/ }
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
