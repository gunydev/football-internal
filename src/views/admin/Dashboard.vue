<template>
  <div id="dashboard">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="10" sm="4">
          <v-text-field
            append-icon="search"
            autofocus
            hide-details
            label="Search"
            single-line
            solo
            v-model="searchText"
          ></v-text-field>
        </v-col>
        <v-col cols="5" sm="3">
          <v-btn @click="fetchData" color>
            <v-icon left>replay</v-icon>Refresh
          </v-btn>
        </v-col>
        <v-col class="text-right" cols="5" sm="3">
          <v-btn @click="logout" color="red" dark>Logout</v-btn>
        </v-col>
        <v-col cols="10">
          <v-data-table
            class="elevation-1"
            :fixed-header="true"
            :headers="headers"
            :items="items"
            :loading="isLoading"
            :search="searchText"
          >
            <template v-slot:item.welcome_kit="{ item }">
              <div
                :class="[ item.welcome_kit == 'already received' ? 'green--text' : 'red--text']"
              >{{item.welcome_kit}}</div>
            </template>
            <template v-slot:item.liability="{ item }">
              <!-- <v-icon>save_alt</v-icon> -->
              <div class="caption">coming soon...</div>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firebase-auth'

export default {
  name: 'dashboard',
  data () {
    return {
      searchText: '',
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Name', value: 'name' },
        { text: 'Team', value: 'team' },
        { text: 'Country', value: 'country' },
        { text: 'Number', value: 'number' },
        { text: 'Accept Date', value: 'accept_date' },
        { text: 'Welcome Kit', value: 'welcome_kit' },
        { text: 'Liability', value: 'liability' }
      ],
      items: [],
      isLoading: false
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        this.items = []
        this.isLoading = !this.isLoading
        const response = await this.axios.get(`https://sheetdb.io/api/v1/92u4gqslzu1bk`)
        this.items = response.data
        this.isLoading = !this.isLoading
      } catch (error) {
        throw new Error(error)
      }
    },
    logout () {
      if (confirm('Are you sure to loggout ?')) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace('login')
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
