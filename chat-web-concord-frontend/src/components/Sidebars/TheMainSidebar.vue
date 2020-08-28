<template>
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
      <v-list-item
        v-for="(item, index) in actions"
        :key="index"
        @click.stop="$emit('messages-sidebar')"
      >
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
        <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
          <v-avatar size="40">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-avatar>
        </v-badge>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    actions: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Account', icon: 'mdi-account-circle' },
      { title: 'Admin', icon: 'mdi-gavel' }
    ]
  })
}
</script>
