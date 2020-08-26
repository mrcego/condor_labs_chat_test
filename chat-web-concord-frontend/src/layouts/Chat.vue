<template>
  <v-app>
    <v-navigation-drawer app permanent width="320" class="blue-grey lighten-5">
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer
          dark
          mini-variant
          mini-variant-width="56"
          permanent
        >
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://pbs.twimg.com/profile_images/918463611164651520/FlTvE2m__400x400.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <template v-slot:append>
            <v-list-item class="px-2">
              <v-badge
                bordered
                bottom
                color="green"
                dot
                offset-x="10"
                offset-y="10"
              >
                <v-avatar size="40">
                  <v-img
                    src="https://randomuser.me/api/portraits/women/75.jpg"
                  ></v-img>
                </v-avatar>
              </v-badge>
            </v-list-item>
          </template>
        </v-navigation-drawer>

        <v-list class="grow">
          <div class="mx-2 py-2">
            <v-btn medium color="white"
              ><v-icon color="secondary">mdi-plus</v-icon
              ><v-divider
                dark
                class="mx-3 button__divider"
                vertical
              ></v-divider>
              New conversation</v-btn
            >
          </div>
          <div class="mx-2">
            <strong class="headline font-weight-bold">Chats</strong>
          </div>
          <v-col>
            <v-text-field
              color="secondary"
              filled
              label="Search here..."
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-list>
      </v-row>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Account', icon: 'mdi-account-circle' },
      { title: 'Admin', icon: 'mdi-gavel' }
    ],
    links: ['Home', 'Contacts', 'Settings']
  })
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
