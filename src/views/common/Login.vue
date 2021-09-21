<template>
  <div class="fullScreenHeight">
    <div class="fullScreenHeight" id="loginBackground">
      <v-card class="loginCard pa-6 mx-auto rounded-lg" max-width="600" elevation="4">
        <v-container id="loginFormContainer">
          <v-form v-model="valid" ref="customerForm" lazy-validation class="loginFormContainer">

            <div class="text-h3 my-2">登录</div>
            <p class="text-subtitle-1 grey--text">使用您的账户名和密码来登录系统</p>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="user.usernameOrEmailOrPhone"
                    :rules="rules.basicRules"
                    label="用户名"
                    class="rounded-lg"
                    hide-details
                    rounded
                    filled
                    single-line
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                    v-model="user.password"
                    :rules="rules.basicRules"
                    label="密码"
                    class="rounded-lg"
                    hide-details
                    rounded
                    filled
                    single-line
                    type="password"
                ></v-text-field>
              </v-col>
            </v-row>

            <!--记住我-->
            <v-row dense align="center">
              <v-col cols="auto">
                <v-checkbox
                    v-model="user.rememberMe"
                    label="记住我"
                ></v-checkbox>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="auto">
                <div>
                  <a>忘记密码？</a>
                </div>
              </v-col>
            </v-row>

            <!--登录/重置 按钮-->
            <v-row justify-md="end">
              <v-col cols="12" md="3">
                <v-btn block
                       color="primary"
                       depressed
                       class="rounded-lg"
                       height="50px"
                       @click="submit"
                >
                  <v-icon>mdi-login-variant</v-icon>
                  <span class="mx-2">登录</span>
                </v-btn>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn block
                       outlined
                       depressed
                       class="rounded-lg"
                       height="50px"
                       @click="resetForm"
                >
                  <v-icon>mdi-reload</v-icon>
                  <span class="mx-2">重置</span>
                </v-btn>
              </v-col>
            </v-row>

          </v-form>
        </v-container>
      </v-card>
    </div>


  </div>
</template>

<script>
import {passwordDigest} from "../../api/cryp";

export default {
  name: "Login",
  components: {},
  data: () => ({
    valid: false,
    user: {
      usernameOrEmailOrPhone: '',
      password: '',
      rememberMe: false,
    },
    rules: {
      basicRules: [
        v => !!v || 'Required'
      ],
    },
    isAlertSeen: false,
    alertMessage: '',
    alertDialog: false
  }),
  methods: {
    submit() {
      console.log(passwordDigest(this.user.password));
      //this.$router.push('/stu');
    },
    resetForm() {
      this.$refs.customerForm.reset();
      this.isAlertSeen = false;
    }
  }
}
</script>

<style scoped>
.loginCard {
  position: relative;
  top: 50%;
  transform: translateY(-60%);
  background-color: rgb(255, 255, 255) !important;
}

.fullScreenHeight {
  height: 100%;
}

#loginBackground {
  /*background-image: url('../../assets/bg3.jpg');*/
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>