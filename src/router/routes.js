import template from '../containers/template'
import Shop from '../containers/Shop'
export default [
    {
        path: '/',
        redirect: '/shop'
    },
    {
        path: '/template',
        component: template
    },
    {
        path: '/shop',
        component: Shop
    }
]
