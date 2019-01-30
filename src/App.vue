<template>
  <v-app>
    <v-toolbar
      app
      color="primary"
    >
      <v-toolbar-title class="white--text">
        Project Hereuy
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    
    <v-content>
      <router-view/>
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      title: 'Practice',
      color: 'primary',
      e2: null
    }
  }
}
</script>

<style>
  body{
    background-color: #047dd3;
    background-position: center;
    background-size: cover;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  #app{
    position: relative;
    width: 100%;
    max-width: 579px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.36);
  }

  .footer-card {
    height:56px;
    width:100%;
    z-index:99;
  }

  .v-bottom-nav{
    max-width: 579px;
    position: relative;
  }

  .v-toolbar__title img{
    vertical-align: middle;
  }

</style>
