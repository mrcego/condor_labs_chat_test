<template>
  <v-app id="app">
    <v-main>
      <component :is="addLayout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script>
const defaultLayout = 'AuthLayout'

export default {
  computed: {
    addLayout: function() {
      return this.$route.meta.layout || defaultLayout
    }
  }
}
</script>
