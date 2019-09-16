<template>
  <v-app id="app" :style="{ backgroundImage: 'url(' + image + ')' }">
    <v-app-bar app class="app-header" height="100">
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center headline text-uppercase">
        <div class="subtitle-2">{{ title }}</div>
        <div class="body-2 mt-2">{{ description }}</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container class="mt-6">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card class="mx-auto" color elevation="0" id="bg-card" min-height="300" width="500">
              <v-card-text>
                <transition mode="out-in" name="fade">
                  <router-view></router-view>
                </transition>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    image: require('./assets/bg.jpg'),
    title: 'Tipco Asphalt Colas Asia-Oceania Cup 2019',
    description: 'รายละเอียดงาน'
  })
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Sarabun&display=swap');
#app {
  font-family: 'Sarabun', sans-serif !important;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .app-header {
    background: rgba(255, 255, 255, 0.7);
    color: black;
  }
  #bg-card {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
  }
}
.center-block {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
