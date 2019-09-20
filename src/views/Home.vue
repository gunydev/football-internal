<template>
  <v-container id="home">
    <v-row class="mb-8">
      <v-col class="text-center px-2" cols="12">
        <div class="display-1 font-weight-bold">Tipco Asphalt Colas</div>
        <div class="display-1 font-weight-bold">Asia-Oceania Cup 2019</div>
      </v-col>
    </v-row>
    <v-row class="px-2 text-center">
      <v-col cols="12">
        <router-link style="text-decoration:none" :to="{name: 'register'}">
          <v-btn
            class="display-1 font-weight-bold btn-register"
            depressed
            min-height="50"
            width="250"
          >register</v-btn>
        </router-link>
      </v-col>
      <v-col cols="12">
        <router-link style="text-decoration:none" :to="{name: 'about'}">
          <v-btn
            class="display-1 font-weight-bold btn-info"
            depressed
            min-height="50"
            width="250"
          >information</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#home {
  .btn-register {
    color: #fff402;
    background-color: #1b7008;
  }
  .btn-info {
    color: #1b7008;
    background-color: #fff402;
  }
}
</style>
