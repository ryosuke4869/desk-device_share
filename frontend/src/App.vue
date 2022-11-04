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
  </v-app>
</template>

<script>
// Components
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),

}
</script>
