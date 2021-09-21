<template>
  <div>
    <v-card
        class="mx-auto px-2 py-3"
        elevation="1"
    >

      <!--基本信息-->
      <section class="py-2 px-2">
        <div class="text-h6 mb-2">账号安全</div>
        <v-divider/>
        <div class="mt-4 mx-4">
          <span class="text-body-1 mr-2">邮箱</span>
          <span class="text--secondary mx-2">coiggahou@foxmail.com</span>
        </div>
        <div class="mt-4 mx-4 d-flex align-center">
          <span class="text-body-1 mr-2">密码</span>
          <span class="text--secondary mx-2">********</span>
          <v-btn text plain color="error">
            修改密码
          </v-btn>
        </div>
      </section>

    </v-card>
  </div>
</template>

<script>
export default {
  name: "StuProfileSafety"
}
</script>

<style scoped>

</style>