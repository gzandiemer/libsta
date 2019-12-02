<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="username">User Name</label>
          <input
                  type="string"
                  id="userName"
                  v-model="userName">
        </div>
        <div class="input">
          <label for="fullName">Full Name</label>
          <input
                  type="string"
                  id="fullName"
                  v-model="fullName">
        </div>
        <div class="input">
          <label for="email">E-Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword">
        </div>
        <div class="input">
          <label for="city">City</label>
          <select id="city" v-model="city">
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="btns">
          <button type="submit" class="submit" @click="onSubmit">Submit</button>
          <button type="reset" class="reset" @click="onReset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from '../../axios-auth/index.js';

  export default {
    data () {
      return {
        username: '',
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: 'Berlin',
        terms: false
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          userName: this.userName,
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          city: this.country,
          
        }
        console.log(formData)
        axios.post('/members.json', formData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
      },
      onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.userName = "",
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
  .signup-form {
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