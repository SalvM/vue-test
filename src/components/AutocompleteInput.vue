<script>
import AutocompleteItem from "./AutocompleteItem.vue";

export default {
    components: {AutocompleteItem},
    props: {
        entity: String,
    },
    data() {
        return {
            searchText: ''
        };
    },
    computed: {
        getData() {
            return this.$store.getters?.[`${this.entity}/getData`]
        },
    },
    methods: {
        query(searchText) {
            this.$store.commit(`${this.entity}/changeQuery`, searchText);
        }
    },
    watch: {
        entity() {
            this.searchText = '';
        },
        searchText(newText) {
            this.query(newText);
        },
    },
    mounted() {
        this.$refs.searchInput.focus();
    },
    unmounted() {
        this.searchText = '';
        this.query('')
    }
}
</script>

<template>
    <div class="search-container">
            <input
                ref="searchInput"
                type="text"
                autocomplete="off"
                v-model="searchText"
                placeholder="Insert text to search..."
            />
    </div>
    <div class="search-results-container">
        <div class="list" v-if="getData.length">
            <AutocompleteItem v-for="(item, index) in getData" :key="index" :word="item" />
        </div>
        <div v-else class="autocomplete-item">
            <p>No results found</p>
        </div>
    </div>
</template>

<style>
    .search-container input {
        margin: 8px;
        padding: 8px;
    }
    .list {
        overflow-y: auto;
    }
</style>