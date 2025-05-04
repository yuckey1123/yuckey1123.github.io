<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  text-align: center;
  background-color: #e7f1f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>