<template>
  <v-card
  height="350px"
  >
    <v-app-bar color="deep-purple" dark>
      <v-toolbar-title class="ma-5">D&D.Sharing</v-toolbar-title>
      <v-btn class="ma-2">
        新規登録
      </v-btn>
      <v-btn class="ma-2">
        ログイン
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    })
  }
</script>
