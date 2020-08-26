<template>
  <v-layout>
    <the-base-dialog v-model="theBaseDialog">
      <component
        :is="dialogComponent"
        @close="theBaseDialog = false"
      ></component>
    </the-base-dialog>

    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-3">
          <v-toolbar color="#363636" dark flat dense class="elevation-3">
            <v-toolbar-title class="secondary--text"
              >Condorian Corporate - Login</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text class="pb-0">
            <v-form ref="loginForm" v-model="formValidity">
              <v-text-field
                color="#363636"
                v-model="user"
                label="E-mail"
                prepend-inner-icon="mdi-account"
                type="text"
                autocomplete="new-user"
                :rules="[formRules.required, formRules.email]"
                required
                @input="checkLowerCase"
                shaped
                filled
                dense
              ></v-text-field>

              <v-text-field
                color="#363636"
                v-model="password"
                id="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :type="visiblePassword ? 'text' : 'password'"
                :append-icon="visiblePassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="visiblePassword = !visiblePassword"
                autocomplete="new-password"
                :rules="[formRules.required, formRules.counter]"
                required
                shaped
                filled
                dense
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined @click="openDialog">Register</v-btn>
            <v-btn :disabled="!formValidity">Let's go!</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import RegisterDialog from '@/components/Dialogs/RegisterDialog'
export default {
  props: {
    source: String
  },
  data: () => ({
    theBaseDialog: false,
    user: '',
    password: '',
    formValidity: true,
    formRules: {
      required: v => !!v || 'Required.',
      counter: v => (v && v.length >= 8) || 'Min 8 characters',
      email: v => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'Invalid e-mail.'
      }
    },
    dialogComponent: null,
    visiblePassword: false
  }),
  components: {
    RegisterDialog
  },
  methods: {
    checkLowerCase: function() {
      if (this.user) this.user = this.user.toLowerCase()
    },
    openDialog: function() {
      this.dialogComponent = RegisterDialog
      this.$refs.loginForm.reset()
      this.theBaseDialog = true
    }
  }
}
</script>
