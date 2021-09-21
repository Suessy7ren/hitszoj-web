<template>
  <div>
    <v-card
        class="mx-auto px-2 py-3"
        elevation="1"
    >

      <section class="py-2 px-2">
        <!--头像-->
        <div class="text-h6 mb-2">头像</div>
        <v-divider/>
        <section class="d-flex align-end mx-2 my-6">
          <v-avatar size="100" rounded>
            <img
                src="../../assets/avatar.jpg"
                alt="Coiggahou"
            >
          </v-avatar>
          <v-btn class="mx-4" depressed>
            上传 / 修改
          </v-btn>
        </section>

      </section>


      <!--基本信息-->
      <section class="py-2 px-2">
        <div class="text-h6 mb-2">个人信息</div>
        <v-divider/>
        <section>
          <div class="ma-4">
            <span class="text-body-1 mr-2">昵称</span>
            <span class="text--secondary mx-2">CJH</span>
            <v-btn text plain icon small>
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <div class="ma-4">
            <span class="text-body-1 mr-2">学号</span>
            <span class="text--secondary mx-2">200110617</span>
          </div>
          <div class="ma-4">
            <span class="text-body-1 mr-2">班别</span>
            <span class="text--secondary mx-2">计算机学院 6 班</span>
          </div>
          <div class="ma-4">
            <span class="text-body-1 mr-2">邮箱</span>
            <span class="text--secondary mx-2">coiggahou@foxmail.com</span>
          </div>
        </section>
      </section>

    </v-card>
  </div>
</template>

<script>
export default {
  name: "StuProfileInfo"
}
</script>

<style scoped>

</style>