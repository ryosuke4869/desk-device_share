<template>
  <div class="top">
    <v-app-bar color="deep-purple" dark>
      <v-toolbar-title class="ma-5">D&D.Sharing</v-toolbar-title>
      <v-btn class="ma-2">
        <router-link class="routerLink" to="/signup">
          新規登録
        </router-link>
      </v-btn>
      <v-btn class="ma-2">
        <router-link class="routerLink" to="/login">
          ログイン
        </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    })
  }
</script>

<style>
  .routerLink {
    color: white;
    text-decoration: none;
    font-size: large;
  }
</style>
