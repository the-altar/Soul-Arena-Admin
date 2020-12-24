import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [ 
  {
    path:"/character",
    component: ()=>import("../views/Home"), 
    name:"roster"
  },
  {
    path:"/character/:id",
    component:()=>import("../views/Profile"),
    name:"profile" 
  },
  {
    path:"/skills",
    component:()=>import("../views/Skills"),
    name:"skills" 
  },
  {
    path:"/skills/:id",
    component:()=>import("../views/Skill"),
    name:"skill" 
  },
  {
    path:"/skills/:effect/:id",
    component:()=>import("../views/Effect"),
    name:"effect"
  },
  {
    path:"/license",
    component:()=>import("../views/License"),
    name:"license"
  },
  {
    path:"/license/:id",
    component:()=>import("../views/Licenses"),
    name:"licenses"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
