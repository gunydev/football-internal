<template>
  <v-container id="register">
    <v-row justify="center">
      <v-col cols="12">
        <div
          class="text-center subtitle-1 font-weight-bold"
        >Tipco Asphalt ColasAsia-Oceania Cup 2019</div>
      </v-col>
      <v-col cols="12">
        <!-- name -->
        <v-row align="center" justify="center">
          <v-col cols="4">
            <div class="body-1 text-right">Name</div>
          </v-col>
          <v-col class="py-1" cols="7">
            <v-text-field hide-details outlined single-line v-model="formData.name"></v-text-field>
          </v-col>
        </v-row>
        <!-- team name -->
        <v-row align="center" justify="center">
          <v-col cols="4">
            <div class="body-1 text-right">Team Name</div>
          </v-col>
          <v-col class="py-1" cols="7">
            <v-autocomplete
              hide-details
              :items="teams"
              outlined
              single-line
              v-model="formData.teamName"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <!-- country -->
        <v-row align="center" justify="center">
          <v-col cols="4">
            <div class="body-1 text-right">Country</div>
          </v-col>
          <v-col class="py-1" cols="7">
            <v-autocomplete
              hide-details
              :items="countrys"
              outlined
              single-line
              v-model="formData.country"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <!-- number -->
        <v-row align="center" justify="center">
          <v-col cols="4">
            <div class="body-1 text-right">Number</div>
          </v-col>
          <v-col cols="7">
            <v-autocomplete
              hide-details
              :items="numbers"
              outlined
              single-line
              v-model="formData.number"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <div class="text-justify rules-box">{{rules}}</div>
      </v-col>
      <v-col cols="4">
        <v-checkbox color="green" label="CONFIRM" v-model="formData.confirmCheck"></v-checkbox>
        <v-btn
          class="title font-weight-bold btn-confirm"
          @click="doSubmit()"
          depressed
          min-height="20"
          width="100"
        >confirm</v-btn>
      </v-col>
      <div style="height:200px"></div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      step: 1,
      formData: [],
      teams: ['asd', 'asd2'],
      countrys: ['asd', 'asd2'],
      numbers: ['asd', 'asd2'],
      rules: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`
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
    async doSubmit () {
      if (!this.formData.confirmCheck) {
        alert('Please confirm register rules')
        return 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#register {
  padding-bottom: 150px;
  .btn-confirm {
    color: #fff402;
    background-color: #1b7008;
  }
  .rules-box {
    width: 100%;
    height: 150px;
    overflow-x: auto;
  }
}
</style>
