<template>
  <v-app>
    <Header />
    <v-main>
      <nav>
        <router-link to="/">Top</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// Components
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),

}
</script>
