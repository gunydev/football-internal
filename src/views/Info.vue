<template>
  <v-container id="info">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div
          class="text-center subtitle-1 font-weight-bold"
        >Tipco Asphalt-Colas Asia-Oceania Cup 2019</div>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" :key="index" v-for="(item, index) in items">
      <v-col cols="6">
        <v-btn block class="font-weight-bold btn" depressed min-height="30">{{item.name}}</v-btn>
      </v-col>
      <v-col class="px-1" cols="3">
        <v-btn block class="caption font-weight-bold" min-height="30" outlined>preview</v-btn>
      </v-col>
      <v-col class="pl-1" cols="3">
        <v-btn
          block
          class="caption font-weight-bold btn-download"
          depressed
          min-height="30"
        >download</v-btn>
      </v-col>
    </v-row>
    <v-row align="center" class="mt-8" justify="center">
      <v-col class="text-center" cols="12">
        <v-btn
          class="font-weight-bold btn-confirm"
          @click="$router.push({name:'home'})"
          depressed
          min-height="20"
          width="100"
        >back</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'food' },
        { name: 'travel' },
        { name: 'agenda' },
        { name: 'match schedule' },
        { name: 'team group' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#info {
  padding-bottom: 150px;
  .btn {
    color: #fff402;
    background-color: #1b7008;
  }
  .btn-download {
    color: #1b7008;
    background-color: #fff402;
  }
}
</style>
