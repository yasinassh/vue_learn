<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!--Implementasi komponen lokal yang sudah diimport dengan-->
    <tags-input></tags-input>
    <!-- <tags-input/>
    <TagsInput/> -->

    <!-- <div>{{ tags }}</div>
    <div>{{ tags.length }}</div> -->
  </div>
  <div v-for="tag in tags" v-bind:key="tag" v-bind:tag="tag">{{ tag }}</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//register komponen secara lokal dari file TagsInput.vue
// import TagsInput from "@/components/TagsInput.vue";
export default {
  //pemanggilan component lokal
  // components: { TagsInput }
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // },
  // data: () => ({
  //   tags: ["Vue", "React", "Angular"],
  //   newTag: "vue.js"
  // }),
};

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
