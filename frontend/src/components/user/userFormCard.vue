<template>
  <v-container fluid>
    <v-row
      justify="center"
    >

      <v-card-title>
        <h1 class="display-1">{{ appName }}に{{ pageTitle }}</h1>
      </v-card-title>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data ({ $route, $config: { appName } }) {
      return {
        appName,
        pageTitle: this.$t(`pages.${$route.name}`)
      }
    }
}
</script>
