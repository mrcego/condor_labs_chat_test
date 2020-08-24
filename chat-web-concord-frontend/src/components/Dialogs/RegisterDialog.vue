<template>
  <div>
    <v-toolbar color="primary" dark flat dense class="elevation-3">
      <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="registerForm" v-model="formValidity">
        <v-text-field
          v-model="username"
          label="Username"
          prepend-inner-icon="mdi-account"
          type="text"
          autocomplete="new-username"
          :rules="[formRules.required]"
          required
          @input="checkLowerCase"
          shaped
          filled
          dense
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="E-mail"
          prepend-inner-icon="mdi-email"
          type="text"
          autocomplete="new-email"
          :rules="[formRules.required, formRules.email]"
          required
          @input="checkLowerCase"
          shaped
          filled
          dense
        ></v-text-field>
        <v-text-field
          v-model="password"
          id="password"
          label="Password"
          prepend-inner-icon="mdi-lock"
          :type="visiblePassword ? 'text' : 'password'"
          autocomplete="new-password"
          :rules="[formRules.required, formRules.counter]"
          required
          :append-icon="visiblePassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="visiblePassword = !visiblePassword"
          shaped
          filled
          dense
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirmation"
          id="passwordConfirmation"
          label="Confirm password"
          prepend-inner-icon="mdi-lock"
          :type="visiblePasswordConfirmation ? 'text' : 'password'"
          autocomplete="new-confirm-password"
          :rules="[
            formRules.required,
            formRules.counter,
            passwordConfirmationRule
          ]"
          required
          :append-icon="visiblePasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="
            visiblePasswordConfirmation = !visiblePasswordConfirmation
          "
          shaped
          filled
          dense
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn outlined color="primary" @click="closeDialog">Cancel</v-btn>
      <v-btn :disabled="!formValidity" color="primary">Register</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    theBaseDialog: false,
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    formValidity: true,
    formRules: {
      required: v => !!v || 'Required.',
      counter: v => (v && v.length >= 8) || 'Min 8 characters',
      email: v => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'Invalid e-mail.'
      }
    },
    visiblePassword: false,
    visiblePasswordConfirmation: false
  }),
  computed: {
    passwordConfirmationRule() {
      return this.password == this.passwordConfirmation || 'Password must match'
    }
  },

  methods: {
    checkLowerCase: function() {
      if (this.email) this.email = this.email.toLowerCase()
    },
    closeDialog: function() {
      this.$refs.registerForm.reset()
      this.$refs.registerForm.resetValidation()
      this.$emit('close')
    }
  }
}
</script>
