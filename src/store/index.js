import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';

// modules
import nodesModule from '@/store/modules/nodes';
// import domainsModule from './modules/domains.module';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        nodesModule,
        // domainsModule
    }
});

export default store;
