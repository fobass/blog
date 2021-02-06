<template>
    <div class="content">
        <h1>Projects</h1>
        <waterfall  :line-gap="410" :min-line-gap="20" :single-max-width="50" :interval="50" :watch="getProjects">
          <waterfall-slot style="padding: 5px;"
              v-for="project in getProjects" :key="project.id"
              :width="200"
              :height="312"
              :order="project.id"
          >
              <div class="project-card-item1">
                    <section class="cards">
                                  
                                  <article class="card">
                                    <p>content for card one</p>
                                  </article><!-- /card-one -->
                  
                      <article class="card">
                                    <p>content for card two</p>
                              </article><!-- /card-two -->
                  
                  <article class="card">
                                    <p>content for card three</p>
                              </article><!-- /card-three -->
                  
                  <article class="card">
                                    <p>content for card four</p>
                              </article><!-- /card-four -->
                  
                      </section>



                  <img  :src="require(`../assets/${project.img}`)" class="responsive">
                <div class="title">
                  {{ project.title }}
                  </div>
                  <p class="description">
                    {{ project.description }}
                  </p>
                  <button class="learn-more" @click="routerHandle(project)"> Learn More </button>
                </div>
          </waterfall-slot>
        </waterfall>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  components: {
    Waterfall,
    WaterfallSlot
  },
  data () {
    return {
      line: 'v',
      align: 'center'
    }
  },
  methods: {
    routerHandle: function (project) {
      if (this.$route.path !== '/projects/' + project.title) {
        this.$router.push({ name: 'Project', params: { title: project.title, id: project.id } })
      }
    }
  },
  computed: mapState({
    getProjects: state => state.projects
  })
}
</script>

<style lang="scss">
.project-card-item1 {
  border: 1px solid #ddd;
  color: #333;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  font-size: 13px;
  transition: box-shadow .3s;
  height: 100%;
  line-height:1.1em;
  font-weight: 500;
  font-family: 'Fira Sans',sans-serif;
  text-align: center;
  // justify-content: space-between;
  justify-content: stretch;
  flex-direction: column;
  display: flex;
  padding: 10px;
}
.description{
  font-size: 13px;
  padding-left: 10px;
  padding-right: 10px;
  height: 25px;
  line-height:1.1em;
  font-weight: 500;
  font-family: 'Fira Sans',sans-serif;
  text-align: center;
}
.title {
  font-size: 15px;
  padding: 10px;
  line-height:1.1em;
  font-weight: 500;
  font-family: 'Fira Sans',sans-serif;
  text-align: center;
}
.responsive {
  width: 60%;
  height: 70%;
  align-self: center;
}
.project-card-item {
  border: 1px solid #ddd;
  color: #333;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  font-size: 13px;
  transition: box-shadow .3s;
  height: 100%;
  line-height:1.1em;
  font-weight: 500;
  font-family: 'Fira Sans',sans-serif;
  text-align: center;
  // justify-content: space-between;
  justify-content: stretch;
  flex-direction: column;
  display: flex;
  padding: 10px;
}
.project-card-item .learn-more {
  background-color: #358f38; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  // position: absolute;
  // margin-top: 20px;
  bottom: 15px;
  // margin-left:50%;
  // margin-right:50%;
  // align-items: center;
  // align-self: center;
  // align-content: center;
  // left:0;
  // justify-content: stretch;
  // display: flex;
}
.learn-more:hover{
  background-color: #4CAF50;
}
.learn-more:focus{
    outline:0;
}
</style>
