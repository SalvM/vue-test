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
    border-radius: 4px;
    padding: 4px;
    margin: 8px;
    background-color: #f4f4f4;
}
</style>