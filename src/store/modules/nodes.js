import db from '@/db';

export default {
    state: {
        nodes: db.nodes
    },
    getters: {
        nodes: (state) => state.nodes,

        nodeById: (state) => id => {
            return state.nodes.find(node => node.id === id);
        }
    },
    mutations: {
        createNode (state, payload) {
            state.nodes.push(payload);
        },
        updateNode (state, payload) {
            state.nodes.forEach((item) => {
                if (item.id == payload.id) { item = payload; }
            });
        },
        removeNode (state, payload) {
            state.nodes = state.nodes.filter(item => item.id !== payload);
        }
    },
    actions: {
    //     async getProjectList ({ commit }) {
    //         const resp = await APIProject.getList()
    //         if (resp.isSuccessfull()) {
    //             commit('setProjectList', resp.data)
    //         }
    //     }
    }
}
