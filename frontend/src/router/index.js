import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookSingle from '../views/BookSingle.vue'
import BookAll from '../views/BookAll.vue'
import MemberSingle from '../views/MemberSingle.vue'
import MemberAll from '../views/MemberAll.vue'
import Dashboard from '../views/Dashboard.vue'
import SignupForm from '../components/forms/signup-form.vue'
import SigninForm from '../components/forms/signin-form.vue'
import BookForm from '../components/forms/book-form.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/book/:id',
    name: 'book',
    component: BookSingle
  },
  {
    path: '/book/all',
    name: 'books',
    component: BookAll
  },
  {
    path: '/member/:id',
    name: 'member',
    component: MemberSingle
  },
  {
    path: '/member/all',
    name: 'members',
    component: MemberAll
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupForm
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninForm
  },
  {
    path: '/member/:id/addbook',
    name: 'bookform',
    props: true,
    component: BookForm
  }
 
  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
