<template>
  <div id="login">
    <div class="login-form">
      <form @submit.prevent="loginUser">
        <div class="input">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model="email"  @input="$v.email.$touch()"/>
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" @input="$v.password.$touch()"/>
        </div>
        <div class="btns">
          <button type="submit" class="submit" @click="loginUser">Submit</button>
          <button type="reset" class="reset" @click="onReset">Reset</button>
        </div>
         <div class="nav">
          <b-nav-item class="nav-item" href="/api/signup">Haven't registered yet?</b-nav-item>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//https://www.youtube.com/watch?v=m73vd9hqZj0 - check part 3
//above @input bla bla has no reference!!!
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  // computed: {
  //     emailErrors() {
  //     const errors = []
  //     if (!this.$v.email.$dirty) return errors
  //     !this.$v.email.email && errors.push(this.getError('email_invalid'))
  //     !this.$v.email.required && errors.push(this.getError('email_necessary'))
  //     return errors
  //   },
  //   passwordErrors() {
  //     const errors = []
  //     if (!this.$v.password.$dirty) return errors
  //     !this.$v.password.required && errors.push(this.getError('password_necessary'))
  //     !this.$v.password.minLength &&
  //       errors.push(this.getError('password_min_length'))
  //     return errors
  //   }
  // },
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() { 
      const user = {
        email: this.email,
        password: this.password
      }
      this.loginUser(user)
      .then(res => {
        if(res.data.success) {
          this.$router.push('/api/profile')
        }
      }).catch(err => {
        console.log(err)
      })
   console.log( 'email: ' + this.email + "password: " + this.password)
    },
    // getError: function(errorKey) {
    //   return this.$store.getters.error({
    //     errorKey: errorKey,
    //     route: this.$route.name
    //   })
    // },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.email = "";
      this.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.login-form {
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
  color: #521751 !important;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,0.24), 0 10px 10px 0 rgba(0,0,0,0.19);
} 



</style>