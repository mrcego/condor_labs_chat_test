<template>
  <v-app>
    <v-navigation-drawer dark permanent app mini-variant>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://pbs.twimg.com/profile_images/918463611164651520/FlTvE2m__400x400.jpg"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="(item, index) in actions" :key="index">
          <v-list-item-action @click="drawer = !drawer">
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

    <v-navigation-drawer
      v-model="drawer"
      clipped
      width="320"
      class="blue-grey lighten-5"
      :permanent="!$vuetify.breakpoint.mobile"
    >
      <v-container>
        <v-list class="grow pb-0">
          <div class="text-center pb-2">
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
              hide-details
              color="secondary"
              filled
              label="Search here..."
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-list>
        <v-list two-line class="pt-0" max-height="200">
          <v-list-item-group active-class="secondary--text">
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title" @click="drawer = !drawer">
                <template>
                  <v-list-item-avatar size="64">
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.action"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    actions: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Account', icon: 'mdi-account-circle' },
      { title: 'Admin', icon: 'mdi-gavel' }
    ],
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        action: '15 min ago',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        action: '2 hr ago',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        action: '6 hr ago',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        action: '12 hr ago',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        action: '18hr ago',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        action: '12 hr ago',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        action: '18hr ago',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
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
