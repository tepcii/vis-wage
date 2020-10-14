<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-3 py-3">
        <v-card-title class="headline center">
          <h1>時給を入力</h1>
        </v-card-title>
        <v-card-text class="mt-10">
          <p>入力した時給を元に、稼いでいるお金をリアルタイムで確認できます。</p>
          <v-text-field
            label="時給"
            :rules="rules"
            hide-details="auto"
            hint="円"
            persistent-hint
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            決定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
    rules: [
      value => !!value || '必須項目です。',
      value => (!Number.isNaN(Number(value)) && Number.isInteger(Number(value))) || '全て半角数字で整数を入力して下さい。',
      value => value >= 792 || '最低賃金は792円です。',
      value => value <= Number.MAX_SAFE_INTEGER || '時給高すぎません？',
    ],
  }),
}
</script>
