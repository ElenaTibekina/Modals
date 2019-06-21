<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">MODALS</div>
            <ul class="navbar-list">
              <li class="navbar-item">
                <router-link class="navbar-link" to="/">Home</router-link>
              </li>
              <li class="navbar-item">
                <router-link class="navbar-link" to="/modals">Modals</router-link>
              </li>
              <li class="navbar-item">
                <span class="navbar-link" @click="registration = !registration">Registration</span>
                <registration v-show="registration" @close="registration = false" @changeModal="registration  = false, login = true"/>
              </li>
              <li class="navbar-item">
                <span class="navbar-link" @click="login = !login">Login</span>
                <login v-show="login" @close="login = false" @changeModal="login = false, registration = true"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!-- <footer></footer> -->
  </div>
</template>

<script>
import registration from '@/Registration.vue'
import login from '@/Login.vue'
export default {
  components: { registration, login },
  data () {
     return {
       registration: false,
       login: false
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
