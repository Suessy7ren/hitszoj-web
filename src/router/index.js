import Vue from 'vue'
import VueRouter from 'vue-router'
import StuTaskPage from "../views/stu/StuTaskPage";
import StuApp from '../views/stu/StuNav'
import StuHome from "../views/stu/StuHome";
import Login from '../views/common/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/stu'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/stu',
    name: 'StuApp',
    component: StuApp,
    redirect: '/stu/home',
    children: [
      {
        path: 'home',
        name: 'StuHome',
        components: {
          main: StuHome
        }
      },
      {
        path: 'homework',
        name: 'StuHomework',
        components: {
          main: StuTaskPage
        }
      },
      {
        path: 'experiment',
        name: 'StuExperiment',
        components: {
          main: () => import('../views/stu/StuExpPage')
        }
      },
      {
        path: 'problems',
        name: 'StuProblems',
        components: {
          main: () => import('../views/stu/StuProblemsPage')
        }
      },
      {
        path: 'wiki',
        name: 'StuWiki',
        components: {
          main: () => import('../views/stu/StuWikiPage')
        }
      },
      {
        path: 'articles',
        name: 'StuArticles',
        components: {
          main: () => import('../views/stu/StuArticles')
        }
      },
      {
        path: 'article',
        name: 'ArticleContent',
        components: {
          main: () => import('../views/common/Ariticle')
        }
      },
      {
        path: 'test',
        name: 'Test',
        components: {
          main: () => import('../views/common/Test')
        }
      },
      {
        path: 'profile',
        name: 'StuProfile',
        redirect: '/stu/profile/info',
        components: {
          main: () => import('../views/stu/StuProfile')
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
