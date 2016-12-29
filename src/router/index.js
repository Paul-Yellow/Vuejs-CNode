import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CnodeTopicList from '../components/CnodeTopicList'
import CnodeDetail from '../views/CnodeDetail'
import Cnode404 from '../views/Cnode404'
import CnodeUser from '../views/CnodeUser'
import CnodeMessages from '../views/CnodeMessages'
import CnodeLogin from '../views/CnodeLogin'
import CnodeSend from '../views/CnodeSend'


export default new VueRouter({
  mode: 'history',
  routes: [
      {   
          path: '/\/index.html)?',redirect: '/topics/all'
      },
      {
          path: '/topics/:tab',component: CnodeTopicList
      },
      { 
          path: '/topic/:topicId', component: CnodeDetail
      },
      {
          path: '/user/:loginname',component: CnodeUser
      },
      {
          path: '/login' , component: CnodeLogin
      },
      {
          path: '/message/:accesstoken',component:CnodeMessages
      },
      {
          path:'/send',component:CnodeSend
      },
      {
          path: '*',component:Cnode404
      }
  ]
})