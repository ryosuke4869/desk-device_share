<template>
  <v-text-field
  v-model="setName"
  prepend-icon="mdi-account-circle"
  label="ユーザ名"
  :rules="rules"
  :counter="max"
  />

</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data(){
      const max =30
      return {
        max,
        rules: [
          v => !!v || '',
          v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
        ]
      }
    },
    computed: {
      setName: {
        get() { return this.name },
        set (newVal) { return this.$emit('update:name', newVal) }
      }
    },
  }
  </script>
