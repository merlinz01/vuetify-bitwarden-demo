<template>
  <form class="d-flex flex-column ga-2 ma-2">
    <h1>This login page uses raw HTML elements for comparison.</h1>
    <label for="username">Username</label>
    <input id="username" type="text" autocomplete="username">
    <label for="password">Password</label>
    <input id="password" type="password" autocomplete="current-password">
  </form>
</template>

<style scoped>
input {
  border: 1px solid #ccc;
}
</style>