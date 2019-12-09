<template lang="pug">
  b-navbar(toggleable='lg' type='dark' variant='dark')
    b-navbar-brand(href='/')
      b-img.logo(alt='logo' :src="require('../assets/logo-books.png')")
      |       Libsta
    b-navbar-toggle(target='nav-collapse')
    b-collapse#nav-collapse(is-nav='')
      b-navbar-nav
        b-nav-item(href='/about' exact) About
        b-nav-item(href='/member/all' exact) Members
        b-nav-item(href='/book/all' exact) Books

      b-navbar-nav.ml-auto
        b-nav-form
          b-form-input.mr-sm-2(size='sm' placeholder='Title or Author')
          b-button.my-2.my-sm-0(size='sm' type='submit') Search
        b-nav-item-dropdown(right='')
          template(v-slot:button-content='')
            div
              em Sign
          b-dropdown-item(href='/auth/login') In
          b-dropdown-item(href='/auth/register') Up
        // b-nav-item-dropdown(right='' v-if='isLoggedIn')
        //   template(v-slot:button-content='')
        //     div
        //       em User
        //   b-dropdown-item(href='/auth/profile') Profile
        //   b-dropdown-item(@click.prevent='logoutUser') Logout
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  // computed: {
  //   ...mapGetters(['isLoggedIn'])
  // },
  // methods: {
  //   ...mapActions(['logout']),
  //   logoutUser() {
  //     this.logout()
  //   }
  // }
}
</script>
<style scoped>
.navbar.navbar-dark.bg-dark {
  background-color: #521751 !important;
}

#nav-links {
  float: left;
  padding-left: 25px;
  padding-top: 25px;
}
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ccc;
  opacity: 1;
}

.logo {
  float: left;
  height: 30px;
}

ul {
  list-style-type: none;
}

button {
  background-color: transparent;
  border: none;
  height: 30px;
  width: 100px;
  padding: 5 10px;
  cursor: pointer;
  color: white;
}
button:hover {
  background-color: white;
  color: #521751;
}

button:hover {
  background-color: darkcyan;
  color: white;
}
</style>
