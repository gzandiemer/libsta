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
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: false }
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
    meta: { requiresAuth: false }
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterForm,
    meta: { requiresGuest: false }
  },
  {
    path: '/auth/login',
    name: 'login',
    component: LoginForm,
    meta: { requiresGuest: false }
  },
  {
    path: '/api/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
