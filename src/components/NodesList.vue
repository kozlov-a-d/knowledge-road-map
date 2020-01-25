<template>
    <div class="nodes-list">
        <ul class="nodes-list__list">
            <li class="nodes-list__item" v-for="node in nodes" v-bind:key="node.id">
                <NodesListItem v-bind:node="node"/>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import NodesListItem from '@/components/NodeListItem';

export default {
    name: 'NodesList',
    components: {
        NodesListItem
    },
    computed: {
        ...mapGetters(['nodes']),
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
