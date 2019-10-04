<template>
  <div id="dialog-confirm">
    <v-dialog persistent v-model="showDialog" width="500">
      <v-card>
        <v-card-title class="headline font-weight-bold" v-if="step > 1 && step !== 3">
          <v-row class="text-center" justify="center">
            <v-col cols="12">
              <span v-html="currentTitle"></span>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-window touchless vertical v-model="step">
            <v-window-item :value="1">
              <v-card-text class="pb-0">
                <v-row class="text-center" justify="center">
                  <v-col class="text-justify" cols="12">
                    <p class="display-1 font-weight-bold black--text">Welcome Letter</p>
                    <p>
                      <strong>Dear</strong> Athletes and Participants,
                    </p>
                    <p>
                      <strong>Welcome to Bangkok, Thailand!</strong>
                    </p>
                    <p>As we are delighted to host the Tipco &ndash; Colas Asia Oceania Cup 2019 and give a warm welcome to the 16 teams from 8 countries to Thailand,</p>
                    <p>we hope that this tournament will help promote our group&rsquo;s team spirit and solidarity.</p>
                    <p>We wish that you all will have a very memorable day, show of great sportsmanship, fair play and free of injury. Please have a pleasant stay and enjoy your time with us here in Bangkok.</p>
                    <div class="font-weight-bold">Sincerely Yours,</div>
                    <div class="font-weight-bold">Mr. Chaiwat Srivalwat</div>
                    <div class="font-weight-bold">Chief Executive Office</div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text class="pa-0">
                <v-row justify="center">
                  <v-col cols="12">
                    <div class="rules-box" v-html="rules"></div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <v-card-text class="pa-0">
                <v-row justify="center">
                  <v-col cols="12">
                    <div class="liability-box mt-4" v-html="mapLiability"></div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="4">
              <v-card-text class="py-0">
                <v-row class="text-center" justify="center">
                  <v-col class="py-0" cols="12">
                    <div class="subtitle-1">Please contact staff to receive</div>
                    <div class="display-1">Welcome Kits</div>
                  </v-col>
                  <v-col class="pt-0" cols="8">
                    <v-checkbox hide-details label="Confirm By Staff" v-model="isConfirm"></v-checkbox>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-window-item>
          </v-window>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn @click="step++" color="primary" depressed v-if="step === 1">Next</v-btn>
          <v-btn @click="step++" color="primary" depressed v-if="step === 2">Read and Accept</v-btn>
          <v-btn @click="step++" color="primary" depressed v-if="step === 3">Read and Approved</v-btn>
          <v-btn
            @click="closeDialog()"
            color="primary"
            depressed
            :disabled="isConfirm ? false : true"
            :loading="isLoading"
            v-if="step === 4"
          >Close</v-btn>
          <div class="flex-grow-1"></div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import dataFeed from '../assets/mixins/data'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      dafault: 'Developer'
    }
  },
  data () {
    return {
      step: 1,
      rules: dataFeed.rules,
      liability: dataFeed.liability,
      isConfirm: false,
      isLoading: false
    }
  },
  computed: {
    mapLiability () {
      return this.liability
        .replace('[name]', this.name || '')
        .replace('[date]', this.date)
        .replace('[signature]', this.name || '')
        .replace('[bottom_name]', this.name || '')
    },
    currentTitle () {
      switch (this.step) {
        case 1:
          return 'Welcome Letter'
        case 2:
          return 'Rules & Regulations'
        case 3:
          return 'Liability Waiver <br>and Release'

        default:
          return 'Congratulations !!'
      }
    },
    date () {
      var d = new Date()
      let date = d.getDate(); let month = d.getMonth() + 1; let year = d.getFullYear()
      return `(${date}/${month}/${year})`
    }
  },
  methods: {
    async closeDialog () {
      const update = await this.updateWelcomeKit()
      if (update) {
        this.$emit('update:showDialog', false)
        setTimeout(() => {
          this.step = 1
          location.reload()
        }, 1000)
      }
    },
    async updateWelcomeKit () {
      try {
        this.isLoading = !this.isLoading
        const football = {
          welcome_kit: 'already received'
        }
        const payload = {
          data: [football]
        }
        const rs = await this.axios.patch(
          `https://sheetdb.io/api/v1/92u4gqslzu1bk/name/${this.name}`,
          payload
        )
        this.isLoading = !this.isLoading
        if (rs.status === 200 && rs.data.updated) {
          return true
        }
        return false
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rules-box {
  width: 100%;
  height: 300px;
  overflow-x: auto;
  // text-align: justify;
}
.liability-box {
  width: 100%;
  height: 400px;
  overflow-x: auto;
  // text-align: justify;
}
</style>
