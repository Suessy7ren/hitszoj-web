<template>
  <div>
    <v-app-bar
        app
        color="white"
        id="navbar"
        light
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />
      </div>

            <v-row class="mx-2" >
              <v-menu
                  v-for="(navMenu, index) in navMenus"
                  v-bind:key="index"
                  offset-y
                  content-class="elevation-1"
                  open-on-hover
              >
                <template v-slot:activator="{ attrs, on }">
                  <v-btn
                      v-bind="attrs"
                      v-on="on"
                      text
                      :to="navMenu.hasSubMenu ? '' : navMenu.route"
                      class="mx-1"
                      color="rgb(50, 50, 50)"
                      active-class="customNavBtn"
                  >
                    {{ navMenu.name }}
                    <v-icon v-if="navMenu.hasSubMenu" dense right>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list v-if="navMenu.hasSubMenu">
                  <v-list-item
                      v-for="(item, index) in navMenu.subMenu"
                      v-bind:key="index"
                      link
                      :to="item.route"
                  >
                    <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>



      <v-spacer></v-spacer>

      <v-btn icon @click="() => {}">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="() => {}">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon @click="() => {}">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {},
  components: {
  },
  data() {
    return {
      currentMenuIndex: 0,
      current: ['mail'],
      navMenus: [
        {
          name: '首页',
          route: {name: 'StuHome'},
          hasSubMenu: false
        },
        {
          name: '学生业务',
          hasSubMenu: true,
          subMenu: [
            {name: '实验提交', route: {name: 'StuExperiment'}},
            {name: '作业提交', route: {name: 'StuHomework'}}
          ]
        },
        {
          name: '题库',
          hasSubMenu: false,
          route: {name: 'StuProblems'}
        },
        {
          name: 'Wiki',
          hasSubMenu: false,
          route: {name: 'StuWiki'}
        },
        {
          name: '题解',
          hasSubMenu: false,
          route: {name: 'StuArticles'}
        },
        {
          name: '文章详情',
          hasSubMenu: false,
          route: {name: 'ArticleContent'}
        }
      ]
    }
  },
}
</script>

<style scoped>

.theme--light.v-btn--active::before {
  opacity: 0;
}

.customNavBtn {
  background-color: rgba(33,150,243, 0.1);
  color: rgb(33,150,243) !important;
  font-weight: bold;
}
</style>

<style>
#navbar {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 3px;
  box-shadow: 0 2px 10px rgb(230, 230, 230);
}
</style>

