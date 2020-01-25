import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Nodes from '@/pages/Nodes';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },{
            path: '/nodes',
            name: 'nodes',
            component: Nodes
        },
        // {
        //   path: '/pages/create',
        //   name: 'PageCreate',
        //   component: PagesShow
        // },{
        //   path: '/pages/update/:id',
        //   name: 'PageUpdate',
        //   component: PagesShow
        // },
        // {
        //   path: '/coins/:id',
        //   name: 'Coins',
        //   component: Coins
        // }
    ]
})
