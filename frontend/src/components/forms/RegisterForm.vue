<template lang="pug">
  #register
    .register-form
      form(@submit.prevent="onSubmit", @reset.prevent="onReset", v-if="show")
        .input
          label(for='username') Username
          input#username(type='string' v-model='form.username')
        .input
          label(for='fullName') Full Name
          input#fullName(type='string' v-model='form.fullName')
        .input
          label(for='email') E-Mail
          input#email(type='email' v-model='form.email')
        .input
          label(for='password') Password
          input#password(type='password' v-model='form.password')
        .input
          label(for='confirmPassword') Confirm Password
          input#confirmPassword(type='password' v-model='form.confirmPassword')
        .input
          label(for='city') City
          select#city(v-model='form.city')
            option(value='berlin') Berlin
        .input.inline
          input#terms(type='checkbox' v-model='form.terms')
          label(for='terms') Accept Terms of Use
        .btns
          button.submit(type='submit') Submit
          button.reset(type='reset') Reset
        .nav
          b-nav-item.nav-item(href='/api/signin') Already registered?
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: null,
        terms: false
      },
      show: true
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      const user = {
        username: this.form.username,
        fullName: this.form.fullName,
        email: this.form.email,
        password: this.form.password,
        confirmPassword: this.form.confirmPassword,
        city: this.form.city
      }
      console.log(user)
      this.register(user).then(res => {
          if (res.data.success) {
            this.$router.push({ path:'/api/singin'});
          }
        }).catch(err => {
          console.log(err)
        })
    },
    onReset() {
      this.username = ''
      this.fullName = ''
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
      this.city = null
      this.terms = false

      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
};
</script>

<style scoped>
body {
  background-color: #f5900f !important;
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
  text-align: center;
  display: contents;
}

.nav-link {
  color: inherit !important;
  /* font-family: "Lato"; */
  font-style: italic;
}

.nav-item {
  list-style-type: none !important;
}

.nav-link:hover,
.nav-link:active {
  color: #521751 !important;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>