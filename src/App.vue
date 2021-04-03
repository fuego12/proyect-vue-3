<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/servicios">Servicios</router-link>
  </div> -->
  <!-- <HeaderComponent></HeaderComponent>
  <SidebarComponent></SidebarComponent>
  <div id="content" class="content">
    <router-view/>
  </div>-->
  
	<div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
    <HeaderComponent></HeaderComponent>
		<SidebarComponent></SidebarComponent>
		
    <div id="content" class="content">
      <router-view/>
    </div>
		
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
	</div>
	<!-- end page container -->

  
</template>

<script>

  import HeaderComponent from '@/components/Header.vue'
  import SidebarComponent from '@/components/Sidebar.vue'

  // $(document).ready(function() {
	// 		App.init();
	// 		TableManageResponsive.init();
	// });

  export default {
    name: 'Home',
    components: {
      HeaderComponent,
      SidebarComponent
    },
    data: () => ({
    }),
    mounted() {
    },
    methods: {
    }
  }
</script>


<style>

  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  } */
</style>
