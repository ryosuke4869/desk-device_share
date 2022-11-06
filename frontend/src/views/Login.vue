<template>
  <div class="login">
    <h1>ログイン</h1>
    <div>
      <div>{{ this.message }}</div>
      <input type="text" v-model="email" placeholder="NAME" /><br />
      <input type="password" v-model="password" placeholder="PASSWORD" /><br />
      <button v-on:click="login()">LOGIN</button>
    </div>
  </div>
</template>
