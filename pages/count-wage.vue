<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-3 py-3">
        <v-card-title class="headline center">
          <h1>稼いだ金額</h1>
        </v-card-title>
        <v-card-text class="mt-10">
          <v-row justify="center" align="center">
          <p>{{ currentWage }}</p>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :color="btnColor"
            fab
            nuxt
            @click="onClick"
          >
            <v-icon>{{ btnIcon }}</v-icon>
          </v-btn>
          <v-spacer />
        </v-card-actions>
        <a href="/">back</a>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import {TweenMax, Expo, Elastic} from 'gsap'

export default Vue.extend({
  data: () => ({
    inPlaying: true,
    btnIcon: "mdi-stop",
    btnColor: "#ff4136",
    currentWage: 0
  }),
  computed: {
    wage () {
      return this.$accessor.wage.wage
    }
  },
  watch: {
    inPlaying: {
      handler: function () {

        this.btnIcon = this.inPlaying ? "mdi-stop" : "mdi-play"
        this.btnColor = this.inPlaying ? "#ff4136" : "#2ecc40"
          // if (this.isPlaying) {
            TweenMax.to(this, 0.5, {
              currentWage: this.$accessor.wage.wage
            })
          // } else {

          // }
      }
    }
  },
  methods: {
    onClick () {
      this.inPlaying = !this.inPlaying
    }
  }
})
</script>
