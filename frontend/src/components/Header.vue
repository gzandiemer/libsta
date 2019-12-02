<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">
      <b-img class="logo" alt="logo" :src="require('../assets/logo-books.png')"></b-img>
      Libsta
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav :class="[currentPage ? activeClass : 'active', 'b-nav-item']">
        <b-nav-item href="/about">About</b-nav-item>
        <b-nav-item href="/member/all">Members</b-nav-item>
        <b-nav-item href="/book/all">Books</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Title or Author"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Sign</em>
          </template>
          <b-dropdown-item href="/signin">In</b-dropdown-item>
          <b-dropdown-item href="/signup">Up</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    data() {
      return {
        activeClass: 'active'
      };

    },
    computed: {
        auth() {
            return this.$store.getters.isAuthenticated
        },
        currentPage() {
          return this.$route.path;
        }
    },
    methods: {
        onSignUp(){
          this.$router.push({name: 'signup'})
        },
        onSignIn(){
          this.$router.push({ name: 'signin'})

        },
        onLogout(){
          this.$router.push({ name: 'home'})
        }
    }
}
</script>
<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #521751!important;
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
  color: white;
}

.logo {
  float:left;
  height: 30px; 

}

#btns{
   padding: 5px;
   list-style-type: none;
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
button:hover{
  background-color: white;
  color: #521751;
}

/* .logout {
  float: right;
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 16px;
} */
/*button {
  float: right;
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 16px;
}

button:hover{
  background-color: darkcyan;
  color: white;
}*/

</style>
