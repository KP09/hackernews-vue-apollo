import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'tachyons'
import Vue from 'vue'
import VueApollo from 'vue-apollo'

import App from './App'
import router from './router'

import { GC_USER_ID } from './constants/settings'

Vue.config.productionTip = false

// 3
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://api.graph.cool/simple/v1/cjfa6m4xj6gt1014372wl7rtt'
})

// 4
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// 5
Vue.use(VueApollo)

// 6
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

let userId = localStorage.getItem(GC_USER_ID)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 7
  provide: apolloProvider.provide(),
  router,
  data: {
    userId
  },
  render: h => h(App)
})
