<template>
  <p class="page-title">{{ message }}</p>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Top',
  data: function () {
    return {
      message: "あなたのPC環境、共有しませんか？",
    }
  }
});
</script>
