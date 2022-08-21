<script>
export default {
    props: {
        word: String
    },
}
</script>

<template>
    <div class="autocomplete-item">
        <p>{{word}}</p>
    </div>
</template>

<style>
.autocomplete-item {
    padding: 8px 16px;
    margin: 8px;
    border: 1px solid grey;
}
</style>