<template>
  <v-navigation-drawer
    :style="`left: ${$vuetify.breakpoint.mobile ? 'inherit' : '56px'} `"
    v-model="openSidebar"
    clipped
    width="320"
    class="blue-grey lighten-5"
    :permanent="!$vuetify.breakpoint.mobile"
    app
  >
    <v-container>
      <v-list class="grow pb-0">
        <div class="text-center pb-2">
          <v-btn medium color="white"
            ><v-icon color="secondary">mdi-plus</v-icon
            ><v-divider dark class="mx-3 button__divider" vertical></v-divider>
            New conversation</v-btn
          >
        </div>
        <div class="mx-2">
          <strong class="headline font-weight-bold">Chats</strong>
        </div>
        <v-col>
          <v-text-field
            hide-details
            color="black"
            filled
            label="Search here..."
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-list>
      <v-list two-line class="pt-0" max-height="500">
        <v-list-item-group active-class="secondary--text">
          <template v-for="(item, index) in items">
            <v-list-item :key="index" @click="openSidebar = !openSidebar">
              <v-badge
                v-if="item.status"
                class="mr-2"
                bordered
                bottom
                :color="item.status"
                dot
                offset-x="15"
                offset-y="10"
              >
                <v-avatar size="60">
                  <v-img :src="item.avatar"></v-img>
                </v-avatar>
              </v-badge>
              <v-list-item-avatar class="mr-2" size="60" v-else>
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
              <v-list-item-icon v-if="item.notifications > 0">
                <v-avatar
                  color="secondary"
                  class="white--text"
                  size="24"
                  rounded
                >
                  <span style="font-size: 12px">{{ item.notifications }}</span>
                </v-avatar>
                <!-- <v-chip color="yellow darken-2" class="black--text" small>
                    
                  </v-chip> -->
              </v-list-item-icon>
            </v-list-item>

            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  data: () => ({
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        status: 'green',
        action: '15 min ago',
        headline: 'Brunch this weekend?',
        title: 'Ali Connors',
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        notifications: 10
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        action: '2 hr ago',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
        notifications: 3
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        action: '6 hr ago',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        notifications: 0
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        status: 'secondary',
        action: '12 hr ago',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?',
        notifications: 2
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        action: '18hr ago',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        status: 'green',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        notifications: 0
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        action: '12 hr ago',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        status: 'secondary',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?',
        notifications: 0
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        status: 'green',
        action: '18hr ago',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        notifications: 5
      }
    ]
  }),
  computed: {
    openSidebar: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
