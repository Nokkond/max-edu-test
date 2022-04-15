import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from '@/components/Form.vue';
import SubmitSuccess from "../components/SubmitSuccess";

Vue.use(VueRouter);

const routes = [
    { name: 'main', component: Form, path: '/' },
    { name: 'submit', component: SubmitSuccess, path: '/success' },
];

const router = new VueRouter({
    routes,
});

export default router;
