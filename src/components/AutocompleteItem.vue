<script>
export default {
    props: {
        data: [String, Object]
    },
    mounted() {
        console.log(typeof this.data)
    }
}
</script>

<template>
    <div class="autocomplete-item">
        <p v-if="typeof data === 'string'">{{data}}</p>
        <p v-else-if="typeof data === 'object'">
            {{ Object.values(data).join(', ') }}
        </p>
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