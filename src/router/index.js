import { createRouter, createWebHistory } from 'vue-router';
import AddCar from '../components/AddCar.vue';
import CarList from '../components/CarList.vue';
import FuelLog from '../components/FuelLog.vue';

const routes = [
    {
        path: '/',
        redirect: '/cars'
    },
    {
        path: '/add-car',
        name: 'AddCar',
        component: AddCar
    },
    {
        path: '/cars',
        name: 'CarList',
        component: CarList
    },
    {
        path: '/cars/:id/fuel-logs',
        name: 'FuelLog',
        component: FuelLog,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
