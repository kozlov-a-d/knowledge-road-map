<template>
    <div class="node-card">
        <div class="node-card__header">
            <a class="node-card__title" href="">{{ node.title }}</a>
            <div class="node-card__updated">
                last updated <span class="node-card__date">{{ node.update.toLocaleString("ru") }}</span>
                by <span class="node-card__author">{{ node.author }}</span>
            </div>
        </div>
        <div class="node-card__content">
            <div class="node-card__annotation">{{ node.annotation }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NodesListItem',
    props: {
        node: Object
    }
}
</script>

<style lang="scss"> 
.node-card{
    padding: var(--blocks-padding);
    border: 1px solid var(--color-border-default);
    border-radius: var(--blocks-border-radius);
    font-size: 1rem;
    color: var(--color-text);

    &__header{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px 0 15px;
        border-bottom: 1px solid var(--color-border-default);
    }
        
    &__title{
        font-size: 1.5em;
        font-weight: 600;
        text-decoration: none;
        color: var(--color-secondary);
        transition: var(--transition-fast); 

        &:hover{
            color: var(--color-primary);
        }
    }    

    &__updated{
        font-size: 0.8em;
        color: var(--color-text-note);
    }
        
    &__date{
        font-weight: 500;
    }

    &__author{
        font-weight: 500;
    }

    &__content{
        padding: 15px 0;
    }
        
    &__annotation{
        
    }
}
</style>
