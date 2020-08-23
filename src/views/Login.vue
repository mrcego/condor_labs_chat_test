<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-3">
        <v-toolbar color="primary" dark flat dense class="elevation-3">
          <v-toolbar-title>Condorian Corporate - Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="loginForm" v-model="formValidity">
            <v-text-field
              v-model="user"
              label="E-mail"
              prepend-icon="mdi-account"
              type="text"
              autocomplete="new-user"
              :rules="formRules.email"
              required
              @input="checkLowerCase"
            ></v-text-field>

            <v-text-field
              v-model="password"
              id="password"
              label="Password"
              prepend-icon="mdi-lock"
              type="password"
              autocomplete="new-password"
              :rules="formRules.password"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!formValidity" color="primary">Let's go!</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    user: '',
    password: '',
    formValidity: true,
    formRules: {
      email: [
        v => !!v || 'E-mail is required.',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid, please check again.'
      ],
      password: [v => !!v || 'Password is required.']
    }
  }),
  methods: {
    checkLowerCase: function() {
      this.user = this.user.toLowerCase()
    }
  }
}
</script>
