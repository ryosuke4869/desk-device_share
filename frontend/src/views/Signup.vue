<template>
  <div class="signup">
    <h1>新規登録</h1>
    <div>
      <div>{{ this.message }}</div>
      <input type="text" v-model="email" placeholder="ユーザー名" /><br />
      <input type="password" v-model="password" placeholder="パスワード" /><br />
      <button v-on:click="signup()">新規登録する</button>
    </div>
  </div>
</template>
