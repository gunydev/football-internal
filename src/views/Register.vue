<template>
  <v-container id="register">
    <DialogConfirm :name="name" :showDialog.sync="isConfirm" />
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <div class="title font-weight-bold">Tipco Asphalt-Colas</div>
        <div class="title font-weight-bold">Asia-Oceania Cup 2019</div>
      </v-col>
      <v-col cols="12">
        <v-form lazy-validation ref="form" v-model="valid">
          <!-- country -->
          <v-row align="center" justify="center">
            <v-col cols="4">
              <div class="body-1 text-right">Country</div>
            </v-col>
            <v-col class="py-1" cols="7">
              <v-autocomplete
                @change="clearData('country', $event) "
                hide-details
                :items="countrys"
                outlined
                :rules="isRequired"
                single-line
                v-model="country"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <!-- team name -->
          <v-row align="center" justify="center">
            <v-col cols="4">
              <div class="body-1 text-right">Team Name</div>
            </v-col>
            <v-col class="py-1" cols="7">
              <v-autocomplete
                @change="clearData('team', $event) "
                hide-details
                :items="filterTeam"
                item-text="name"
                item-value="name"
                outlined
                :readonly="country ? false : true"
                :rules="isRequired"
                single-line
                v-model="teamName"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <!-- name -->
          <v-row align="center" justify="center">
            <v-col cols="4">
              <div class="body-1 text-right">Name</div>
            </v-col>
            <v-col class="py-1" cols="7">
              <v-autocomplete
                hide-details
                :items="filterTeamPlayers"
                item-text="playerName"
                item-value="playerName"
                outlined
                :readonly="teamName ? false : true"
                ref="nameSelect"
                :rules="isRequired"
                single-line
                v-if="!jounery"
                v-model="name"
              >
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.playerName"></v-list-item-title>
                    <v-list-item-subtitle
                      :class="[ data.item.type == 'Main' ? 'green--text caption' : 'grey--text caption']"
                      v-html="data.item.type"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
              <v-text-field
                hide-details
                outlined
                placeholder="Enter your name here.."
                ref="nameInput"
                :rules="isRequired"
                single-line
                v-else
                v-model="name"
              ></v-text-field>
            </v-col>
            <v-col class="py-0" cols="8" offset="3">
              <v-checkbox
                @change="checkCannotFindName($event)"
                color="green"
                label="Cannot find your name?"
                v-model="jounery"
              ></v-checkbox>
            </v-col>
          </v-row>
          <!-- number -->
          <v-row align="center" justify="center">
            <v-col cols="4">
              <div class="body-1 text-right">Jersey No.</div>
            </v-col>
            <v-col cols="7">
              <v-text-field
                :disabled="isRepesent === 'Representative' ? true: false"
                hide-details
                outlined
                single-line
                type="number"
                v-model="number"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>

      <v-col class="text-center" cols="12">
        <v-btn
          class="title font-weight-bold btn-confirm"
          @click="doSubmit()"
          depressed
          :loading="loading"
          min-height="20"
          width="100"
        >confirm</v-btn>
      </v-col>
      <v-col class="text-center" cols="3">
        <v-img aspect-ratio="1" contain height="50" :src="logoMain"></v-img>
      </v-col>
      <v-col class="text-center" cols="3">
        <v-img aspect-ratio="1" contain height="30" :src="logoColas"></v-img>
      </v-col>

      <v-col cols="8">
        <li :key="item.name" v-for="item in pdfs">
          <a class="caption" :href="item.link" target="blank">{{item.name}}</a>
        </li>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataFeed from '../assets/mixins/data'
const DialogConfirm = () => import('../components/DialogConfirm')
export default {
  components: {
    DialogConfirm
  },
  data () {
    return {
      isConfirm: false,
      valid: true,
      isRequired: [v => !!v || 'This Field  is Required'],
      jounery: false,
      loading: false,
      teams: dataFeed.teams,
      countrys: dataFeed.countrys,
      teamPlayers: dataFeed.teamPlayers,
      numbers: [1, 2, 3, 4, 5, 6, 7],
      // data
      name: null,
      teamName: null,
      country: null,
      number: null,
      logoMain: require('../assets/icon/logo.jpg'),
      logoColas: require('../assets/icon/colas.jpg'),
      pdfs: [
        {
          name: 'Tourist Information in Bangkok',
          link: 'https://www.tourismthailand.org/home'
        },
        {
          name: 'Rules & Regulations',
          link:
            'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/Rules-Regulations-Asia-Oceania-Cup.pdf?alt=media&token=4e2ef238-bafb-4a87-bcc6-243d06c5ef3f'
        },
        {
          name: 'Event Program',
          link:
            'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/Tipco-draw-2019.pdf?alt=media&token=7139c17f-f0e0-48aa-a2d5-4d211973f33a'
        },
        {
          name: 'Match schedule group A',
          link:
            'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/A.jpg?alt=media&token=35b9650a-cfa1-4f04-80f9-ead3560a73dc'
        },
        {
          name: 'Match schedule group B',
          link:
            'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/B.jpg?alt=media&token=10139b19-8c76-4861-ab59-fac46c37e3f3'
        },
        {
          name: 'Match schedule group C',
          link:
            'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/C.jpg?alt=media&token=00050cf2-cb6e-4af1-b759-49ae996c0c40'
        },
        {
          name: 'Match schedule group D',
          link:
            'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/D.jpg?alt=media&token=a679a8d0-079d-4f2d-ab8c-aed2221989a5'
        },
        {
          name: 'Schedule',
          link:
            'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/Schedule.jpg?alt=media&token=e0a756d7-ee6b-455f-b2f8-c595a419423a'
        },
        {
          name: 'Score',
          link: 'https://firebasestorage.googleapis.com/v0/b/football-internal.appspot.com/o/score.pdf?alt=media&token=419ec61f-0fe1-4512-a789-c7fd53b1a5dc'
        }
      ]
    }
  },
  watch: {
    isConfirm () {
      if (!this.isConfirm) {
        // console.log(this.isConfirm)
        // window.close()
      }
    }
  },
  computed: {
    isRepesent () {
      return this.teamPlayers
        .filter(item => item.playerName === this.name)
        .map(item => item.type)
        .toString()
    },
    currentTitle () {
      switch (this.step) {
        case 1:
          return 'Sign-up'
        case 2:
          return 'Create a password'
        default:
          return 'Account created'
      }
    },
    filterTeam () {
      return this.teams.filter(i => i.country === this.country)
    },
    filterTeamPlayers () {
      return this.teamPlayers.filter(i => i.teamName === this.teamName)
    }
  },
  methods: {
    clearData (type, e) {
      switch (type) {
        case 'country':
          this.teamName = null
          this.name = null
          break
        case 'team':
          this.name = null
          break
      }
    },
    checkCannotFindName (e) {
      this.$nextTick(() => {
        if (e) return this.$refs.nameInput.focus()
        this.$refs.nameSelect.focus()
      })
    },
    async doSubmit () {
      if (!this.$refs.form.validate()) {
        return 0
      }
      this.loading = !this.loading
      // const id = await this.getLastId()
      const dateTime = await this.getDate()
      const football = {
        // id: 'none',
        name: this.name,
        team: this.teamName,
        country: this.country,
        number: this.number,
        accept_date: dateTime,
        welcome_kit: 'Not received'
      }
      const payload = {
        data: [football]
      }
      const rs = await this.axios.post(`https://sheetdb.io/api/v1/92u4gqslzu1bk`, payload)
      if (rs.status === 201 && rs.data.created === 1) {
        // if (payload) {
        this.loading = !this.loading
        this.isConfirm = true
      } else {
        this.loading = !this.loading
        this.isConfirm = false
      }
    },
    async getLastId () {
      const rs = await this.axios.get(`https://sheetdb.io/api/v1/92u4gqslzu1bk/count`)
      return rs.data ? rs.data.rows : 0
    },
    getDate () {
      var today = new Date()
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      return date + ' ' + time
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
}
</style>
