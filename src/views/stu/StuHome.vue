<template>
  <div>
    <div class="ma-4">
      <v-btn @click="errorMsg" color="error">测试全局消息提示</v-btn>
    </div>
    <div class="ma-4">
      <v-btn @click="warnMsg" color="warning">测试全局消息提示</v-btn>
    </div>
    <div class="ma-4">
      <v-btn @click="infoMsg" color="info">测试全局消息提示</v-btn>
    </div>
    <div class="ma-4">
      <v-btn @click="successMsg" color="success">测试全局消息提示</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "StuHome",
  methods: {
    errorMsg() {
      this.$message.error('This is a error message');
    },
    warnMsg() {
      this.$message.warning('This is a error message');
    },
    infoMsg() {
      this.$message.info('This is a error message');
    },
    successMsg() {
      this.$message.success('This is a error message');
    }
  }
}
</script>

<style scoped>

</style>