<template>
  <v-text-field
    prepend-icon="mdi-lock"
    append-icon="mdi-eye-off"
    placeholder="8文字以上"
    type="password"
    label="パスワード"
    v-model="password"
  />
</template>

<script>
  export default {
    // 追加
    props: {
      password: {
        type: String,
        default: ''
      }
    }
  }
</script>


