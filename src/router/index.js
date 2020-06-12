import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../layout/Home.vue';
import Inventory from '../layout/Inventory';
import Dashboard from '../layout/Dashboard';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Default',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
];

const router = new VueRouter({
    routes
});

export default router;
