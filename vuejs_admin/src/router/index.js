import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import Register from "../views/Register.vue";
import ResetPassword from "../views/ResetPassword.vue";
import AppLayout from "../components/AppLayout.vue";
import Products from "../views/Products.vue";
import Users from "../views/Users.vue";
import store from "../store";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },
            {
                path: 'users',
                name: 'app.users',
                component: Users
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresGuest: true
        }

    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     if (!store.state.user.token){
//         console.log(!store.state.user.token)
//         next({ name: 'login' })
//         // return {name: 'login'}
//         next()
//     } else {
//         next()
//     }
// })

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) next({ name: 'login' })
  else if (to.meta.requiresGuest && store.state.user.token) next({ name: 'app.dashboard' })
  else next()
})

export default router;
