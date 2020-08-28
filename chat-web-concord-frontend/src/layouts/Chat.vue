<template>
  <v-app>
    <the-main-sidebar
      @messages-sidebar="openMessagesSidebar = !openMessagesSidebar"
    />

    <the-messages-sidebar v-model="openMessagesSidebar" />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheMainSidebar from '@/components/Sidebars/TheMainSidebar'
import TheMessagesSidebar from '@/components/Sidebars/TheMessagesSidebar'

import lockScroll from '@/utils/lockScroll'

export default {
  data: () => ({
    openMessagesSidebar: true
  }),
  components: {
    TheMainSidebar,
    TheMessagesSidebar
  },
  created() {
    /*iPhone hack for avoid insane body scrolling*/
    lockScroll()
  }
}
</script>

<style scoped>
::v-deep .v-main {
  padding: 0px !important;
}

::v-deep .button__divider {
  height: 36px;
}
</style>
