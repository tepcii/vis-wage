<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-3 py-3">
        <v-card-title class="headline center">
          <h1>稼いだ金額</h1>
        </v-card-title>
        <v-card-text class="mt-10">
          <p>{{ $store.state.wage }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/"
          >
            中止
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
