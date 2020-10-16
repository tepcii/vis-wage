<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-3 py-3">
        <v-card-title class="headline center">
          <h1>稼いだ金額</h1>
        </v-card-title>
        <v-card-text class="mt-10">
          <v-row justify="start" align="center">
            <p>
              時給：{{ wage }}円
            </p>
          </v-row>
          <v-row justify="start" align="center" class="mb-6">
            <p
              class="text-right"
            >
              {{ currentTime }}秒経過
            </p>
          </v-row>
          <v-row justify="end" align="center">
            <p
              id="wageNum"
              class="text-right"
            >
              {{ currentWage }}円
            </p>
          </v-row>
          <v-row>
            <v-slider
              min="0"
              :max="maxTime"
              :value="currentTime"
              :disabled="isFirstClick"
              @input="onSliderMovin"
              @change="onSliderChange"
            />
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
            <v-icon v-if="inPlaying">
              mdi-stop
            </v-icon>
            <v-icon v-else>
              mdi-play
            </v-icon>
          </v-btn>
          <v-spacer />
        </v-card-actions>
        <a href="/">戻る</a>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import { TweenMax, Linear } from 'gsap'

export default Vue.extend({
  data: () => ({
    inPlaying: false,
    btnColor: '#2ecc40',
    currentWage: 0,
    currentTime: 0,
    tween: null,
    maxTime: 3600,
    isFirstClick: true
  }),
  computed: {
    wage () {
      return this.$accessor.wage.wage
    }
  },
  watch: {
    inPlaying: {
      handler (value) {
        this.btnColor = value ? '#ff4136' : '#2ecc40'
        value ? this.tween.resume() : this.tween.pause()
      }
    },
    currentWage: {
      handler () {
        if (this.wage === Number(this.currentWage)) {
          this.finished()
        }
      }
    }
  },
  methods: {
    onClick () {
      if (this.wage === Number(this.currentWage)) {
        this.currentWage = 0
      }
      if (this.isFirstClick) {
        this.tween = TweenMax.to(this, this.maxTime, {
          currentWage: this.$accessor.wage.wage,
          currentTime: this.maxTime,
          paused: true,
          ease: Linear.easeNone,
          onUpdate: () => {
            const parts = this.currentWage.toString().split('.')
            this.currentWage = parts[0]
          }
        })
        this.isFirstClick = false
      }
      this.inPlaying = !this.inPlaying
    },
    onSliderMovin (e) {
      this.currentTime = e
    },
    onSliderChange (e) {
      this.tween.time(e)
    },
    finished () {
      this.inPlaying = false
    }
  }
})
</script>

<style>

#wageNum {
  font-size: 50px;
}

@media (min-width: 768px) {
  #wageNum {
    font-size: calc(1.875rem + ((1vw - 7.68px) * 1.7361));
  }
}

@media (max-width: 480px) {
  #wageNum {
    font-size: 20px;
  }
}

@media (min-width: 480px) {
  #wageNum {
    font-size: calc(1.875rem + ((1vw - 4.8px) * 1.3889));
  }
}

@media (min-width: 1920px) {
  #wageNum {
    font-size: 50px;
  }
}

</style>
