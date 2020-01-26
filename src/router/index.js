import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Nodes from '@/pages/Nodes';
import NodeShow from '@/pages/NodeShow';

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
        {
          path: '/node/new',
          name: 'node-create',
          component: NodeShow
        },
        {
          path: '/node/:id',
          name: 'node',
          component: NodeShow
        },
    ]
})
