<template>
  <v-text-field
    prepend-icon="mdi-email-outline"
    label="メールアドレス"
    v-model="setEmail"
    :rules="rules"
  />
</template>
<script>
  export default {
    // 追加
    props: {
      email: {
        type: String,
        default: ''
      },
      noValidation: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        rules: [
          v => !!v || '',
          v => /.+@.+\..+/.test(v) || ''
        ]
      }
    },
    computed: {
      setEmail: {
        get () { return this.email },
        set (newVal) { return this.$emit('update:email', newVal) }
      },
      form () {
        const placeholder = this.noValidation ? undefined : 'your@email.com'
        return { placeholder }
      }
    }
  }
</script>
