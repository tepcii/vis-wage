<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <a href="https://github.com/tepcii/vis-wage">
        <v-icon>mdi-github</v-icon>
      </a>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Tenma Endou. All Rights Reserved!!!!!!!!!!!!!!!!!!!!!!!!!!!!</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      fixed: false,
      title: 'Vis Wage'
    }
  }
}
</script>
