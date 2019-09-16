<template>
  <v-container class="center-block">
    <v-row class="px-2">
      <v-col cols="12">
        <router-link style="text-decoration:none" :to="{name: 'register'}">
          <v-btn block class="subtitle-1" color="black" dark min-height="50" rounded>ลงทะเบียน</v-btn>
        </router-link>
      </v-col>
      <v-col cols="12">
        <router-link style="text-decoration:none" :to="{name: 'about'}">
          <v-btn
            block
            class="subtitle-1"
            color="white"
            min-height="50"
            rounded
          >ดูข้อมูลการท่องเที่ยว</v-btn>
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
</style>
