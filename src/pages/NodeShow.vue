<template>
    <div class="page-content">
        <h1>{{ node.title }}</h1>
        <NodeEdit v-bind:node="node" />
        <div class="form-btns">
            <button v-if="isNew" class="btn btn--success" v-on:click="create">Create</button>
            <button v-if="!isNew" class="btn btn--success" v-on:click="update">Save</button>
            <button class="btn btn--danger" v-on:click="remove">Remove</button>
        </div>
    </div>
</template>

<script>
import Node from '@/models/node';
import NodeEdit from '@/components/NodeEdit.vue';

export default {
    name: 'NodeShow',
    components: {
        NodeEdit
    },
    computed: {
        isNew () {
            return (this.$route.params.id == null);
        },
        node () { 
            const node = this.$store.getters.nodeById(this.$route.params.id);
            if (node) { return node } 
            else { return new Node; }
        },
    },
    methods: {
        create: function () {
            const id = this.node.id;
            this.$store.commit('createNode', this.node);
            this.$router.push('/node/' + id);
        },
        update: function () {
            this.$store.commit('updateNode', this.node);
        },
        remove: function () {
            this.$store.commit('removeNode', this.node.id);
            this.$router.push('/nodes');
        }
    }
}
</script>

<style lang="scss">

</style>
