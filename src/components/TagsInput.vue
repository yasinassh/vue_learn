<template>
    <div v-for="(tag, index) in tags" v-bind:key="tag">
        {{ tag }}
        <a href="#" @click.prevent="removeTag(index)">&times;</a>
    </div>
    <hr/>
    <input type="text" v-model.trim="newTag" @keydown.enter="addNewTag"/>
    <button v-on:click="addNewTag">OK</button>
</template>

<script>
export default {
  data: () => ({
    tags: ["Vue", "React", "Angular"],
    newTag: "vue.js"
  }),
  methods: {
    addNewTag() {
        if (this.newTag) {
            this.tags.push(this.newTag);
            this.newTag = '';
        }
    },
    removeTag(index) {
        this.tags.splice(index, 1);
    }
  }
};</script>