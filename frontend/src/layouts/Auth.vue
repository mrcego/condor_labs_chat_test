<template>
  <v-container class="fill-height" fluid>
    <router-view />
  </v-container>
</template>

<style scoped>
::v-deep.container {
  background: url('./../assets/wave.svg') 50% 35em no-repeat fixed;
}

@media screen and (max-width: 600px) {
  /* Specific to this particular image */
  ::v-deep.container {
    background: url('./../assets/wave.svg') bottom no-repeat fixed;
  }
}
</style>
