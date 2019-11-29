<template>
  <header id="header">
    <nav id="nav">
      <img alt="logo" src="../assets/logo-books.png" />
      <div id="nav-links">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/member/all">Members</router-link>|
        <router-link to="/book/all">Books</router-link>
      </div>
    </nav>
    <nav id="btns">
    <ul>
        <li v-if="!auth">
            <button @click="onSignUp" to="/signup">Sign Up</button>
        </li>
         <li v-if="!auth">
            <button @click="onSignIn">Sign In</button>
        </li>
        <li v-if="auth">
            <button @click="onLogout" class="logout">Logout</button>
        </li>
    </ul>
    </nav>
  </header>
</template>

<script>
export default {
    computed: {
        auth() {
            return this.$store.getters.isAuthenticated
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
#header {
  height: 82px;
  display: flex;
  flex-flow:row;
  justify-content: space-between;
  align-items: center;
  background-color: #BF0B2C;
  /* alternative colors: #521751; */
  padding: 0 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

img {
  float:left;
  height: 80px; 

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

.logout {
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
}
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
