import Home from '../containers/home'
import Login from '../containers/user/Login'
import Error_404 from '../containers/error/404'

import Welcome from '@/containers/home/Welcome'
import AddQuestions from '@/containers/home/questions/AddQuestions'
export default [
    {
        path: '/',
        redirect: '/home/welcome'
    },
    {
        path: '/home',
        component: Home,
        authToken: true,
        children: [
            {
                path: '/home/welcome',
                component: Welcome
            },
            {
                path: '/home/addQuestions',
                component: AddQuestions
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: Error_404
    }
]
