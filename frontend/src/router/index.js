import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import RegisterForm from '../components/forms/RegisterForm'
import LoginForm from '../components/forms/LoginForm'
import Profile from '../views/Profile'
import Dashboard from '../views/Dashboard'
import BookSingle from '../views/BookSingle'
import BookAll from '../views/BookAll'
import MemberSingle from '../views/MemberSingle'
import MemberAll from '../views/MemberAll'
import BookForm from '../components/forms/BookForm'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/api/signup',
    name: 'register',
    component: RegisterForm,
    meta: { requiresGuest: true }
  },
  {
    path: '/api/signin',
    name: 'login',
    component: LoginForm,
    meta: { requiresGuest: true }
  },
  {
    path: '/api/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/book/all',
    name: 'books',
    component: BookAll
  },
  {
    path: '/book/:id',
    name: 'book',
    component: BookSingle
  },
  {
    path: '/member/all',
    name: 'members',
    component: MemberAll
  },
  {
    path: '/member/:id',
    name: 'member',
    component: MemberSingle
  },

  {
    path: '/member/:id/addbook',
    name: 'bookform',
    props: true,
    component: BookForm,
    meta: { requiresAuth: true }
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // const isLoggedIn = localStorage.getItem('isLoggedIn')
  const isLoggedIn = store.getters.isLoggedIn
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      //redirect to the login page
      // next({
      //   path: '/',
      //   query: { redirect: to.fullPath }
      // })
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isLoggedIn) {
      next('/profile')
    } else {
      next()
    }

  } else {
    next()
  }
})

export default router
