import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage'

import CreateLink from '../components/CreateLink'
import LinkList from '../components/LinkList'
import AppLogin from '../components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomePage },
    { path: '/links', component: LinkList },
    { path: '/create', component: CreateLink },
    { path: '/login', component: AppLogin }
  ],
  mode: 'history'
})
