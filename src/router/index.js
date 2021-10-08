import Vue from 'vue'
import VueRouter from 'vue-router'
import StuTaskPage from "../views/stu/StuTaskPage";
import Nav from '../views/common/Nav'
import StuHome from "../views/stu/StuHome";
import Login from '../views/common/Login'
import PageNotFound from '../views/common/PageNotFound'

Vue.use(VueRouter)

export const defaultRoutes = [
  {
    path: '/',
    component: Nav
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: PageNotFound
  }
]

export const asyncRoutes = [
  {
    path: '/',
    name: 'App',
    component: Nav,
    meta: {
      roles: [1, 2, 3]
    },
    children: [
      {
        path: 'home',
        name: 'StuHome',
        components: {
          main: StuHome
        },
        meta: {
          nav: {
            name: '首页'
          },
          roles: [1]
        },
      },
      {
        path: 'homework',
        name: 'StuHomework',
        components: {
          main: StuTaskPage
        },
        meta: {
          nav: {
            name: '作业提交'
          },
          roles: [1]
        },
      },
      {
        path: 'experiment',
        name: 'StuExperiment',
        components: {
          main: () => import('../views/stu/StuExpPage')
        },
        meta: {
          nav: {
            name: '实验提交'
          },
          roles: [1]
        },
      },
      {
        path: 'problems',
        name: 'StuProblems',
        components: {
          main: () => import('../views/stu/StuProblemsPage')
        },
        meta: {
          nav: {
            name: '题库'
          },
          roles: [1]
        },
      },
      {
        path: 'wiki',
        name: 'StuWiki',
        components: {
          main: () => import('../views/stu/StuWikiPage')
        },
        meta: {
          nav: {
            name: 'Wiki'
          },
          roles: [1]
        },
      },
      {
        path: 'articles',
        name: 'StuArticles',
        components: {
          main: () => import('../views/stu/StuArticles')
        },
        meta: {
          nav: {
            name: '文章'
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: 'article',
        name: 'ArticleContent',
        components: {
          main: () => import('../views/common/Article')
        },
        meta: {
          nav: {
            name: '文章详情'
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: 'test',
        name: 'Test',
        components: {
          main: () => import('../views/common/Test')
        },
        meta: {
          nav: {
            name: '测试页面'
          },
          roles: [3],
        },
      },
      {
        path: 'profile',
        name: 'StuProfile',
        redirect: '/profile/info',
        components: {
          main: () => import('../views/stu/StuProfile')
        },
        meta: {
          roles: [1],
        },
        children: [
          {
            path: 'info',
            name: 'StuProfileInfo',
            components: {
              profileSettingView: () => import('../views/stu/StuProfileInfo')
            }
          },
          {
            path: 'safety',
            name: 'StuProfileSafety',
            components: {
              profileSettingView: () => import('../views/stu/StuProfileSafety')
            }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: defaultRoutes
})

export default router
