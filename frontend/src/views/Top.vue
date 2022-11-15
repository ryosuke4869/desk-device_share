<template>
  <p class="page-title">{{ message }}</p>
  <div>
    <button
      type="button"
      name="button"
      @click="getMsg"
    >
      RailsからAPIを取得する
    </button>
    <div
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Top',
  data: function () {
    return {
      message: "あなたのPC環境、共有しませんか？",
      msgs: []
    }
  },
  methods: {
    getMsg () {
      this.$axios.$get('/api/v1/hello')
        .then(res => this.msgs.push(res))
    }
  }
});
</script>
