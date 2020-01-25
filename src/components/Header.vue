<template>
    <div class="header">
        <nav class="main-menu">
            <ul>
                <li><router-link exact-active-class="is-active" :to="{ name: 'index' }">Главная</router-link></li>
                <li><router-link exact-active-class="is-active" :to="{ name: 'nodes' }">Каталог статей</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
.header{
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 60px;
    color: rgba(255,255,255,.9);
    background: var(--header-bg);
    border: 1px solid var(--header-border-color);
}

.main-menu{

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 1em;
        padding: 0;
    }

    a{
        display: block;
        text-decoration: none;
        color: var(--menu-text-color);
        margin-bottom: -2px;
        border-bottom: 2px solid transparent;
        transition: var(--transition-fast); 

        &.is-active,
        &:hover{
            border-bottom: 2px solid var(--color-primary);
        }
    }
}
</style>
