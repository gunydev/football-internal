<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" sm="8">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-form lazy-validation ref="form" v-model="valid">
              <v-text-field autofocus label="E-mail" required :rules="emailRules" v-model="email"></v-text-field>
              <v-text-field
                clearable
                id="password"
                @keyup.enter="onSubmit()"
                label="Password"
                name="password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
            <div class="caption red--text" v-if="error">{{error}}</div>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="onSubmit()" color="primary" :loading="isLoading">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firebase-auth'

export default {
  props: {
    source: String
  },
  data () {
    return {
      valid: true,
      drawer: null,
      email: null,
      password: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      error: null,
      isLoading: false
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        this.error = null
        this.isLoading = !this.isLoading
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(result => {
            this.isLoading = !this.isLoading
            this.$router.replace('admin')
            // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
          })
          .catch(error => {
            this.isLoading = !this.isLoading
            this.error = 'The email address or password is incorrect. Please retry...'
            // Handle error.
            throw new Error(error)
          })
      }
    }
  }
}
</script>
