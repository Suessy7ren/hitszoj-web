import Vue from 'vue'
import VueRouter from 'vue-router'
import StuTaskPage from "../views/stu/StuTaskPage";
import StuApp from '../views/stu/StuNav'
import StuHome from "../views/stu/StuHome";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/stu'
  },
  {
    path: '/stu',
    name: 'StuApp',
    component: StuApp,
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
