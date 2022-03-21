import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue' 

const routes = [
    {path: "/", name: 'Home', component: Home},
    {path: "/create", name: 'Create', component: ()=> import(/*webpackChunkName*/'@/views/Create.vue')},
    {path: "/edit", name: 'Edit', component: ()=> import(/*webpackChunckName*/'@/views/Edit.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-status'
})

export default router