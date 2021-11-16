import HomePage from './pages/HomePage.vue'
import ApartmentPage from './pages/ApartmentPage.vue'
import ErrorPage from './pages/ErrorPage.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: HomePage,
        name:'homepage'
    },
    {
        path: '/apartments/:id',
        component: ApartmentPage,
        name:'apartment'
    },
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage,
        name:'erroe-page'
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory(process.env.BASE_URL)
})
export default router