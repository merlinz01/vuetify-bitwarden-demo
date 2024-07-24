<template>
  <h1>This login page uses Vuetify v-text-field's with the opacity overridden.</h1>
  <v-card class="ma-5 opaqueinputs" elevation="20">
    <v-form>
      <v-card-title class="text-center"> Log in to the Widget </v-card-title>
      <v-card-text class="d-flex flex-column ga-2 ma-2">
        <v-text-field type="email" prepend-inner-icon="mdi-account" label="Email" hide-details />
        <v-text-field type="password" prepend-inner-icon="mdi-lock" label="Password" hide-details />
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" text="Log in" color="primary" variant="elevated" class="mx-auto" />
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style>
.opaqueinputs .v-text-field input {
  opacity: 1;
  transition: none;
}
</style>
