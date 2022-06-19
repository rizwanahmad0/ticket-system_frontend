import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUP from '../components/SignUP.vue'
import login from '../components/login.vue'
import TicketListing from '../components/ticket.vue'
import TicketView from '../components/TicketLanding.vue'
import OpenTicket from '../components/OpenTicket.vue'
import CheckStatus from '../components/CheckStatus.vue'
import Comment from '../components/comment.vue'
import logout from '../components/logout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUP
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketListing
  },
  {
    path: '/view-ticket',
    name: 'view-ticket',
    component: TicketView
  },
  {
    path: '/open-ticket',
    name: 'open ticket',
    component: OpenTicket
  },
  {
    path: '/status',
    name: 'status',
    component: CheckStatus
  },
  {
    path: '/comment',
    name: 'comment',
    component: Comment
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
