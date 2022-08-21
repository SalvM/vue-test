<script>
import AutocompleteItem from "./AutocompleteItem.vue";

export default {
    components: {AutocompleteItem},
    props: {
        list: Array,
    },
    data() {
        return {
            searchText: "",
            searchResults: []
        }
    },
    methods: {
        async autocomplete() {
            this.searchResults = [];
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].includes(this.searchText.toLowerCase())) {
                    this.searchResults.push(this.list[i]);
                }
            }
        },
    },
    watch: {
        searchText(newText) {
            if (newText.length >= 3) {
                this.autocomplete();
            } else {
                this.searchResults = [];
            }
        },
    },
    mounted() {
        this.$refs.searchInput.focus();
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
        <div class="list" v-if="searchResults.length">
            <AutocompleteItem v-for="(item, index) in searchResults" :key="index" :word="item" />
        </div>
        <div v-else>
            <p>No results found</p>
        </div>
    </div>
</template>

<style>

</style>