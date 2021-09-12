<template>
  <v-app>
    <v-main>
      <router-view />
      <GlobalMsgbar></GlobalMsgbar>
    </v-main>
  </v-app>
</template>

<script>
import GlobalMsgbar from "./components/GlobalMsgbar/index.vue";
export default {
  name: 'App',
  components: {
    GlobalMsgbar
  }
};
</script>

<style scoped>
/* 全局淡灰色背景样式，勿删 */
#app {
  background-color: rgb(250,250,250);
}
</style>
