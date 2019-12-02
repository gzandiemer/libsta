<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="loginUser">
        <div class="input">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="btns">
          <button type="submit" class="submit" @click="loginUser">Submit</button>
          <button type="reset" class="reset" @click="onReset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//https://www.youtube.com/watch?v=m73vd9hqZj0
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(['login']),
    loginUser() {
      
      const user = {
        email: this.email,
        password: this.password
      }
      this.login(user)
      .then(res => {
        if(res.data.success) {
          this.$router.push('/api/profile')
        }
      }).catch(err => {
        console.log(err)
      })
   console.log( 'email: ' + this.email + "pwd: " + this.password)
    },
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
.signin-form {
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
  border: 1px solid #521751;
  /*color: #0AA38C;*/
  padding: 10px 20px;
  text-align: center;
  font: inherit;
  cursor: pointer;
  width: 80px;
}

.btns button:hover,
.btns button:active {
  color: white;
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
  color: #0aa38c;
}
.submit:hover,
.submit:active {
  background-color: #0aa38c;
}
</style>