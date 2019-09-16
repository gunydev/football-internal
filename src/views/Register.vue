<template>
  <v-row>
    <v-col class="pa-0" cols="12">
      <v-card class="mx-auto pa-0" color="transparent" dark elevation="0" min-width="200">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field
                class="py-2"
                hide-details
                label="First Name"
                outlined
                rounded
                v-model="formData.firstname"
              ></v-text-field>
              <v-text-field
                class="py-2"
                hide-details
                label="Last Name"
                outlined
                rounded
                v-model="formData.lastname"
              ></v-text-field>
              <v-text-field
                class="py-2"
                hide-details
                label="Team"
                outlined
                rounded
                v-model="formData.team"
              ></v-text-field>
              <v-text-field
                class="py-2"
                hide-details
                label="Country"
                outlined
                rounded
                v-model="formData.country"
              ></v-text-field>
              <v-text-field
                class="py-2"
                hide-details
                label="Email"
                outlined
                rounded
                v-model="formData.email"
              ></v-text-field>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
              <span class="caption grey--text">Thanks for signing up!</span>
            </div>
          </v-window-item>
        </v-window>

        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn @click="$router.push({name:'home'})" depressed :disabled="step === 2">กลับ</v-btn> -->
          <v-btn @click="doSubmit()" color="black" :disabled="step === 2" rounded>ลงทะเบียน</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      formData: []
    }
  },
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1:
          return 'Sign-up'
        case 2:
          return 'Create a password'
        default:
          return 'Account created'
      }
    }
  },
  methods: {
    doSubmit () {}
  }
}
</script>
