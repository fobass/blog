<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-toggle" id="js-navbar-toggle">
        <div class="closebtn" @click="openNav">
          <i class="fa fa-bars"></i>
        </div>
      </div>

      <div alt="" class="logo" style="width: 50px; height: 30px" />
      <ul class="main-nav" id="js-menu">
        <router-link class="nav-links" to="/">Home</router-link>
        <router-link class="nav-links" to="/about">About</router-link>
        <router-link class="nav-links" to="/projects">Projects</router-link>
        <router-link class="nav-links" to="/github">GitHub</router-link>
        <router-link class="nav-links" to="/resume">Resume</router-link>
        <router-link class="nav-links" to="/stackoverflow">Stackoverflow</router-link>
        <router-link class="nav-links" to="/linkedIn">LinkedIn</router-link>
      </ul>
    </nav>
    <div id="wrapper">
      <div class="left-view" >
        <div class="flex-container">
          <div class="flex-item"><MenuCardItem caption="About" route="/about"/></div>
          <div class="flex-item"><MenuCardItem caption="Projects" route="/projects"/></div>
          <div class="flex-item"><MenuCardItem caption="GitHub" route="/github"/></div>
        </div>
        <div class="flex-container">
          <div class="flex-item"><MenuCardItem caption="Resume" route="/resume"/></div>
          <div class="flex-item"><MenuCardItem caption="Stackoverflow" route="/stackoverflow"/></div>
          <div class="flex-item"><MenuCardItem caption="LinkedIn" route="/linkedIn"/></div>
        </div>
         <div class="flex-container">
           <div class="info">Ernist Isabekov is an enthusiastic and passionate iOS developer</div>
          </div>
      </div>
      <div class="main-view">
        <router-view/>
      </div>
      <div class="footer">
        Кийгеним көк темир, ишенгеним бир теңир.
        <GoTop :right='goTopBtnLeft' bg-color='#2196F3' :has-outline='false'/>
      </div>
    </div>
      <div
      id="myNav"
      class="overlay"
      :style="{ height: height + '%' }"
    >
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">
        <i class="fa fa-times"></i>
      </a>
      <div class="overlay-content">
        <router-link class="nav-links" to="/">Home</router-link> |
        <router-link class="nav-links" to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuCardItem from '@/components/MenuCardItem.vue'
import GoTop from '@inotom/vue-go-top'

export default {
  components: {
    MenuCardItem,
    GoTop
  },
  data () {
    return {
      isActive: false,
      height: 0,
      scrollpx: 0,
      goTopBtnLeft: 70,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    closeNav: function () {
      this.height = 0
    },
    openNav: function () {
      this.height = 100
    },
    handleResize: function () {
      this.window.width = window.innerWidth
      // var width1 = window.innerWidth - window.innerWidth
      this.goTopBtnLeft = this.window.width - 120
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">

#wrapper {
  min-height: 100%;
  position: relative;
  padding-top: 30px
}
.info{
  color: rgb(190, 185, 185);
  // font-family: "-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;// margin: 40px auto;
  // left: 10px;
  padding: 25px;
  font-family: "Fira Sans",sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 2px;
  width: 100%;
  // background-color: #42b983;
  font-family: "Fira Sans",'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 7px;
  color: rgb(131, 142, 148);
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
.flex-item {
  // width: 100%;
  height: 90px;
  // background-color: blue;
  margin-bottom: 10px;
  // margin-left: 10px;
  cursor: pointer;
}
* {
  box-sizing:border-box;
}

.left-view {
  // background-color:#2196F3;
  padding:5px;
  float:left;
  width:30%; /* The width is 20%, by default */
}
.main-view {
  // background-color:#f1f1f1;
  padding:5px;
  float:left;
  width:69%; /* The width is 60%, by default */
}

.content {
  // text-align: top;
  color: #222;
  font-family: "-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;// margin: 40px auto;
  background: rgba(241, 241, 241, 0.945);
  padding: 15px;
  // width: 100%;
  // height: 80vh;
  // max-width: 960px;
  border-radius: 5px;
  // padding-bottom: 32px;

}
html{
  // background: linear-gradient(
  //         rgba(0, 0, 0, 0.4),
  //         rgba(0, 0, 0, 0.4)
  //       ),
  //       url('assets/bakground.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: #091a29;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   // color: #2c3e50;
//   margin: 0;
//   padding: 0;
//   overflow: visible;
//   // height:100%;
// }
body {
  margin: 0 !important;
  padding: 0 !important;
  overflow-y: scroll; /* Show scrollbars */
  height:100%;
  width:100%
}
.navbar {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  // background-color: #333;
  height: 50px;
}

.nav-links,
.logo {
  text-decoration: none;
   color: rgba(255, 255, 255, 1);
}

.main-nav li {
  text-align: center;
  margin: 15px auto;
}

.logo {
  display: inline-block;
  font-size: 22px;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 99;
  }

  .main-nav li {
    margin: 0;
  }

  .nav-links {
    margin-left: 40px;
  }
  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
}

.navbar {
  overflow: hidden;
  // background-color: #333;
  height: 50px;
}

.main-nav {
  list-style-type: none;
  display: none;
}

.nav-links,
.logo {
  text-decoration: none;
  color: rgb(230, 227, 227);
  // color: #c9c8c8;
  font-weight: 500;
  font-size: 14px;
  font-family: "-apple-system",BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
}

.main-nav li {
  text-align: center;
  margin: 15px auto;
}

.logo {
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
  // margin-right: 20px;
}

.navbar-toggle {
  position: absolute;
  /* top: 10px; */
  right: 0px;
  padding: 12px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  /* width: 35px; */
  display: flex;
  justify-content: center;
}
.overlay {
  height: 0%;
}
@media screen and (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }

  .main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 99;
  }

  .main-nav li {
    margin: 0;
  }

  .nav-links {
    margin-left: 40px;
  }

  .logo {
    margin-top: 0;
    margin-left: 10px;
  }

  .navbar-toggle {
    display: none;
  }

  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }

  .navbar {
    overflow-y: auto;
  }
  .navbar a {
    font-size: 15px;
  }
  .navbar .closebtn {
    font-size: 20px;
    top: 5px;
    right: 5px;
  }
}

.overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  // background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  z-index: 100;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 0px;
  right: 5px;
  font-size: 30px;
}

@media screen and (max-width: 600px) {
  /* .overlay {
    overflow-y: auto;
  } */
  .overlay .closebtn {
    top: 0px;
    right: 5px;
    font-size: 30px;
  }
}

@media screen and (max-width:800px) {
  .left-view, .main-view {
    width:100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .main-view{
    padding: 25px;
  }
  .navbar a {
    font-size: 12px;
  }
}
@media (min-width: 400px) {
  .flex-item {
    width: 25%;
  }
}

@media (min-width: 300px) {
  .flex-item {
    width: 30%;
  }
}

@media (min-width: 270px) {
  .flex-item {
    width: 30%;
  }
  // .flex-item .card-item{
  //   font-size: 19px;
  // }
}
</style>
