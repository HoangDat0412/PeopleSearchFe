import { createRouter, createWebHistory } from 'vue-router'
import HomeLayoutView from '../layouts/HomeLayout/HomeLayoutView.vue'
import LoginView from '@/views/LoginView/LoginView.vue'
import RegisterView from '@/views/RegisterView/RegisterView.vue'
import HomeView from '@/views/HomeView/HomeView.vue'
import SearchView from '@/views/SearchView/SearchView.vue'
import ChatView from '@/views/ChatView/ChatView.vue'
import AccountView from '@/views/Account/AccountView.vue'
import ForgotPassword from '@/views/ForgotPassword/ForgotPasswordView.vue'
import GuideView from '@/views/Guide/GuideView.vue'
import ExportChatView from '@/views/ExportChat/ExportChatView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homelayout',
      component: HomeLayoutView,
      children:[
        {
          path: '/newsearch',
          name: 'search2',
          component: SearchView,
        },
        {
          path: '/',
          name: 'search',
          component: SearchView,
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: HomeView,
        },
        {
          path: '/chat/:id',
          name: 'chat',
          component: ChatView,
        },
        {
          path: '/account',
          name: 'account',
          component: AccountView,
        },
        {
          path: '/guide',
          name: 'guide',
          component: GuideView,
        },
        {
          path: '/exportchat/:id',
          name: 'exportchat',
          component: ExportChatView,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword,
    }
  ]
})

export default router
