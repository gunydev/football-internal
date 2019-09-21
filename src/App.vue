<template>
  <v-app id="app" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="logo-bar">
      <img class="first" height="50" :src="logoMain" />
      <img class="second" height="30" :src="logoColas" />
      <img class="third" height="100" :src="logoTipco" />
    </div>

    <v-content>
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    logoMain: require('./assets/icon/logo.jpg'),
    logoColas: require('./assets/icon/colas.jpg'),
    logoTipco: require('./assets/icon/tipco.jpg'),
    image: require('./assets/bg-tipco-1.jpg')
  })
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Sarabun&display=swap');
#app {
  font-family: 'Sarabun', sans-serif !important;
  width: 100%;
  // background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  #bg-card {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
  }
  .logo-bar {
    position: relative;
    height: 150px;
    img {
      position: absolute;
      &.first {
        top: 60px;
        right: 180px;
      }
      &.second {
        top: 70px;
        right: 70px;
      }
      &.third {
        top: 40px;
        right: 5px;
      }
    }
  }
}
.center-block {
  position: absolute;
  left: 50%;
  top: 40%;
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
