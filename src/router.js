import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () => import('./views/Dashboard.vue')
    },
    {
        path: "/problema-1",
        name: "Problema-1",
        component: () => import('./views/Padel.vue')
    },
    {
        path: "/problema-2",
        name: "Problema-2",
        component: () => import('./views/Chess.vue')
    },
    {
        path: "/problema-3",
        name: "Problema-3",
        component: () => import('./views/StringValues.vue')
    }
];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes
});

export default router;