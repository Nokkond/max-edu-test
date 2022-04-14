import Vue from 'vue'
import Router from 'vue-router'

import adminRoutes from './modules/admin'

Vue.use(Router)

const routes = [{
    path: '*',
    redirect: {
        name: 'News'
    }
}].concat(submitRoutes)
export default new Router({
    routes,
    mode: 'history'
})
