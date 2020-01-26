<template>
    <div class="nodes-list">
        <button class="btn btn--success" v-on:click="add">Add</button>
        <ul class="nodes-list__list">
            <li class="nodes-list__item" v-for="node in nodes" v-bind:key="node.id">
                <NodesListItem v-bind:node="node"/>
            </li>
        </ul>
    </div>
</template>

<script>
import NodesListItem from '@/components/NodesListItem';

export default {
    name: 'NodesList',
    components: {
        NodesListItem
    },
    computed: {
        nodes () { 
            return this.$store.getters.nodes;
        },
    },
    methods: {
        add: function () {
            this.$router.push('/node/new');
        }
    }
}
</script>

<style lang="scss"> 
.nodes-list{

    &__list{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    &__item{
        margin: 30px 0;
        padding: 0;
    }
}
</style>
