<template lang="pug">
  #register
    .register-form
      form(@submit.prevent='registerUser')
        .input
          label(for='username') Username
          input#username(type='string' v-model='username')
        .input
          label(for='fullName') Full Name
          input#fullName(type='string' v-model='fullName')
        .input
          label(for='email') E-Mail
          input#email(type='email' v-model='email')
        .input
          label(for='password') Password
          input#password(type='password' v-model='password')
        .input
          label(for='confirmPassword') Confirm Password
          input#confirmPassword(type='password' v-model='confirmPassword')
        .input
          label(for='city') City
          select#city(v-model='city')
            option(value='berlin') Berlin
        .input.inline
          input#terms(type='checkbox' v-model='terms')
          label(for='terms') Accept Terms of Use
        .btns
          button.submit(type='submit' @click='registerUser') Submit
          button.reset(type='reset' @click='onReset') Reset
        .nav
          b-nav-item.nav-item(href='/api/signin') Already registered?
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: 'Berlin',
        terms: false
      }
    },
    methods: {
      ...mapActions(['register']),
      registerUser() {
        const user = {
          username: this.username,
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          city: this.city, 
        }
        console.log(user)
        this.register(user)
        .then(res => {
        if(res.data.success) {
          this.$router.push('login')
        } 
        }).catch(err => {
        console.log(err)
      })
      },

   onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.username = "",
      this.fullName = "",
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
}
</script>

<style scoped>

body {
  background-color: #f5900f!important;
}

.register-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #521751;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.btns button {
  /* border: 1px solid #521751; */
  /*color: #0AA38C;*/
  padding: 10px 0px;
  text-align: center;
  font: inherit;
  cursor: pointer;
  width: 80px;

}

.btns button:hover,
.btns button:active {
  color: #ccc;
}

.btns button[disabled],
.btns button[disabled]:hover,
.btns button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

.reset {
  color: #bf0b2c;
}

.reset:hover,
.reset:active {
  background-color: #bf0b2c;
}

.submit {
  color: #521751;
}
.submit:hover,
.submit:active {
  background-color: #521751;
}

.nav {
  text-align:center; 
  display:contents;
}

.nav-link  {
  color: inherit !important;
  /* font-family: "Lato"; */
  font-style: italic;
}

.nav-item {
 list-style-type: none !important;
}

.nav-link:hover, .nav-link:active {
  color:#521751!important;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
} 

</style>