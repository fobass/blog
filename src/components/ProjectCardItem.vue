<template>
  <div class="project-card-item">
    <img src="../assets/mock.png" style="width: 200px"/>
    <h2>
      {{ project.title }}
    </h2>
    <h3>
      {{ project.description }}
    </h3>
    <button class="learn-more" @click="routerHandle"> Learn More </button>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardItem',
  props: ['project', 'route'],
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    routerHandle: function (event) {
      if (this.$route.path !== '/projects/' + this.project.title) {
        this.$router.push({ name: 'Projects', params: { title: this.project.title, id: this.project.id } })
      }
    }
  }
}
</script>

<style lang="scss">

.project-card-item {
  // padding: 50px;
  border: 1px solid #ddd;
  color: #333;
  background-color: rgb(231, 236, 238);
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: box-shadow .3s;
  width: 100%;
  height: 100%;
  line-height:1.1em;
  font-weight: 500;
  font-family: 'Fira Sans',sans-serif;
  text-align: center;
}
// .project-card-item:hover{
//     background-color: #d2e4ee;
//     box-shadow: 0 0 5px  #abdaf5;
// }
.project-card-item:focus{
    outline:0;
    background-color: #d2e4ee;
    box-shadow: 0 0 5px  #abdaf5;
}
.learn-more {
  background-color: #358f38; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.learn-more:hover{
  background-color: #4CAF50;
}
.learn-more:focus{
    outline:0;
}
</style>
