<template>
    <div class="node-show">
        <div class="form">
            <div class="form-item">
                <label class="form-item__title">Title</label>
                <div class="form-item__field">
                    <input type="text" v-model="node.title">
                </div>
            </div>
            <div class="form-item">
                <label class="form-item__title">Annotation</label>
                <div class="form-item__field">
                    <textarea v-model="node.annotation"></textarea>
                </div>
            </div>
            <div class="form-item">
                <label class="form-item__title">content</label>
                <div class="form-item__field">
                    <textarea v-model="node.content"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NodeEdit',
    props: {
        node: Object
    }
}
</script>

<style lang="scss">

</style>
