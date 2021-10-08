<template>
  <v-container class="mt-4 px-4 main-wrapper">
    <div>
      <v-row class="my-4" justify="center">

        <!--左侧选项栏-->
        <v-col cols="2">
          <div class="mx-auto px-1">

            <!--基本信息-->
            <section class="d-flex flex-column align-center">
              <v-btn
                  large
                  text
                  class="mx-2 my-1"
                  active-class="customNavBtn"
                  :to="{name: 'StuProfileInfo'}"
              >
                <v-icon class="text--secondary">mdi-account-circle-outline</v-icon>
                <span class="text--secondary mx-2">基本信息</span>
              </v-btn>
              <v-btn
                  text
                  class="mx-2 my-1"
                  large
                  active-class="customNavBtn"
                  :to="{name: 'StuProfileSafety'}"
              >
                <v-icon class="text--secondary" >mdi-lock</v-icon>
                <span class="text--secondary mx-2">账号安全</span>
              </v-btn>

            </section>
          </div>



        </v-col>

        <!--个人信息面板-->
        <v-col cols="9">
          <v-alert text type="warning">
            未绑定邮箱
          </v-alert>
          <router-view name="profileSettingView"/>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>


export default {
  name: "StuProfile",

  data() {
    return {
      dialog: false,

    }

  },
  methods: {

  }
}
</script>

<style scoped>
.main-wrapper {
  max-width: 1000px;
}
.theme--light.v-btn--active::before {
  opacity: 0.08;
}

.customNavBtn {
  /*background-color: rgba(33, 150, 243, 0.1);*/
  /*color: rgb(33, 150, 243) !important;*/
  font-weight: bold;
}

.customNavBtn span{
  color: rgb(33, 150, 243) !important;
  font-weight: bold;
}


</style>