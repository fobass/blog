<template>
    <div class="content">
        <h1>My Projects</h1>
        <waterfall :line="line" :align="align" :line-gap="400" :min-line-gap="220" :max-line-gap='200' :single-max-width="100" :interval="10" :watch="getProjects">
        <waterfall-slot style="padding: 5px"
            v-for="project in getProjects" :key="project.id"
            :width="300"
            :height='200 + Math.random() * 100 + 200'
            :order="project.id"
        >
            <ProjectCardItem :project="project"/>
        </waterfall-slot>
</waterfall>
    </div>
</template>
<script>
import ProjectCardItem from '@/components/ProjectCardItem.vue'
import { mapState } from 'vuex'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  components: {
    Waterfall,
    WaterfallSlot,
    ProjectCardItem
  },
  data () {
    return {
      line: 'v',
      align: 'center'
    }
  },
  computed: mapState({
    getProjects: state => state.projects
  })
}
</script>
