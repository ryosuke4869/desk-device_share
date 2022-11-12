<template>
  <v-text-field
    prepend-icon="mdi-email-outline"
    label="メールアドレス"
    v-model="email"
  />
</template>
<script>
  export default {
    // 追加
    props: {
      email: {
        type: String,
        default: ''
      }
    }
  }
</script>
