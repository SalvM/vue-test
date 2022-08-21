
<script>
import AutocompleteInput from '@/components/AutocompleteInput.vue';
export default {
  components: {AutocompleteInput},
  name: 'MainPage',
  props: {
    msg: String
  },
  data() {
    return {
      tabSelected: 'city'
    }
  },
  methods: {
    selectTab(tab) {
      this.tabSelected = tab;
    }
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="card">
    <div class="tabs-container">
      <div class="tab" :class="{ selected: tabSelected === 'city' }" @click.prevent="() => selectTab('city')">
        <span>Cities</span>
      </div>
      <div class="tab" :class="{ selected: tabSelected === 'book' }" @click.prevent="() => selectTab('book')">
        <span>Books</span>
      </div>
    </div>
    <div class="autocomplete-container">
      <AutocompleteInput :entity="tabSelected" />
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card {
  border: 1px solid #dadada;
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.autocomplete-container {
  margin: 8px;
  border-top-width: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  max-height: 600px;
}
.tabs-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.tab {
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 8px;
}
.tab:hover {
  background-color: #e6f2ed;
  cursor: pointer;
}
.tab.selected {
  background-color: #41b883;
  border-radius: 4px;
  color: white;
}
</style>
