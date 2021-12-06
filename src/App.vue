<template>
  <v-app id="inspire">
    <v-main>
      <router-view/>
    </v-main>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>QUEM SOMOS</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>HISTORIA</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>PESQUISA</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 

      <v-toolbar-title>Site Web AF-Parte 2</v-toolbar-title>
    </v-app-bar>
    
    <v-main>
      <!--  -->
    </v-main>
    <footer-componet/>
    <footer-componet-botton-nav/>
    
  </v-app>
</template>


<script>
import FooterComponet from "@/components/FooterCoponets.vue"
import FooterComponetBottonNav from "@/components/FootercoponentsBottonNav.vue"
export default {
  components: {FooterComponet, FooterComponetBottonNav},
  name: 'App',

  data: () => ({
      drawer: false,
      group: null,
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
