<template>
    <div class="content">
        <router-link to="/projects">
        <span class="material-icons">
            west
        </span>
        </router-link>
        <h1>{{ title }}</h1>
        <h2>{{ project.description }}</h2>
    </div>
</template>
<script>
export default {
  data () {
    return {
      project: this.$store.getters.getProjetById(this.$route.params.id)
    }
  },
  computed: {
    title () {
      return this.$route.params.title
    }
  }
}
</script>
