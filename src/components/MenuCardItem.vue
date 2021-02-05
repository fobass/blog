<template>
  <button class="menu-card-item" @click="routerHandle">{{caption}}
  </button>
</template>

<script>
export default {
  name: 'MenuCardItem',
  props: ['caption', 'route'],
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    routerHandle: function (event) {
      if (this.$route.path !== this.route) {
        this.$router.push(this.route)
      }
    }
  }
}
</script>

<style lang="scss">

.menu-card-item {
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
}
.menu-card-item:hover{
    background-color: #d2e4ee;
    box-shadow: 0 0 5px  #abdaf5;
}
.menu-card-item:focus{
    outline:0;
    background-color: #d2e4ee;
    box-shadow: 0 0 5px  #abdaf5;
}

</style>
