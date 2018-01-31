<template>
    <div id="editor">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'editor'
}
</script>

<style scoped>
#editor {
  text-align: left;
  font-size: 17px;
  color: #ffffff;
  border-bottom: none;
}

</style>
