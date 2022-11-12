<template>
  <v-text-field
    v-model="name"
    prepend-icon="mdi-account-circle"
    label="ユーザ名"
  />
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>
