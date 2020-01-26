<template>
    <div class="page-content">
        <p>Index</p>
        {{notes}}
        <button v-on:click="add">test</button>
    </div>
</template>

<script>
// import {db, Timestamp} from '@/db';
import API from '@/api/';
import Node from '@/models/node';
// import { db } from '@/db';

export default {
    name: 'Index',
    data: () => ({ 
        notes: []
    }),
    methods: {
        add: function () {
            const node = (new Node()).toObject();
            node.title = 'Test node';
            node.annotation = Math.round(Math.random()*99999999).toString();
            node.content = Math.round(Math.random()*99999999).toString();

            // eslint-disable-next-line no-console
            console.log("node:", node);

            API.getNodes().then((nodes) => {
                // eslint-disable-next-line no-console
                console.log("API.getNodes:", nodes);
            })

            API.createNode(node).then((success) => {
                // eslint-disable-next-line no-console
                console.log("API.createNode: status is ", success); 

                node.title = 'Test node with changes';
                API.updateNode(node).then((success) => {
                    // eslint-disable-next-line no-console
                    console.log("API.updateNode: status is ", success); 

                    API.getNodeById(node.id).then((node) => {
                    // eslint-disable-next-line no-console
                    console.log("API.getNodeById: ", node); 

                        API.removeNode(node).then((success) => {
                            // eslint-disable-next-line no-console
                            console.log("API.removeNode: status is ", success); 

                            API.getNodeById(node).then((node) => {
                                // eslint-disable-next-line no-console
                                console.log("API.getNodeById: ", node); 
                            })
                        })
                    })
                })
 
            })

           

        }
    }
}
</script>

<style lang="scss">

</style>
