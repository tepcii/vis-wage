<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-3 py-3">
        <v-card-title class="headline center">
          <h1>時給を入力</h1>
        </v-card-title>
        <v-card-text class="mt-10">
          <p>入力した時給を元に、稼いでいるお金をリアルタイムで確認できます。</p>
          <p class="warn">
            Nuxt.jsの勉強がてら適当に作っただけです！バグとかソースの汚さは気にしないで！バックグラウンドでは動きません！
          </p>
          <v-form
            ref="form"
          >
            <v-text-field
              :value="wage"
              type="number"
              label="時給"
              :rules="rules"
              hide-details="auto"
              hint="円"
              persistent-hint
              @input="inputWage($event)"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/count-wage"
            :disabled="isValid"
          >
            決定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
  },
  data: () => ({
    rules: [
      value => !!value || '必須項目です。',
      value => (!Number.isNaN(Number(value)) && Number.isInteger(Number(value))) || '全て半角数字で整数を入力して下さい。',
      value => value >= 792 || '最低賃金は792円です。',
      value => value <= Number.MAX_SAFE_INTEGER || '時給高すぎません？羨ましい'
    ],
    isValid: true
  }),
  computed: {
    wage () {
      return this.$accessor.wage.wage
    }
  },
  methods: {
    inputWage (e) {
      if (this.$refs.form.validate()) {
        this.isValid = false
      } else {
        this.isValid = true
      }
      this.$accessor.wage.setWage(Number(e))
    }
  }
})
</script>

<style>
.warn {
  color: yellow;
}
</style>
