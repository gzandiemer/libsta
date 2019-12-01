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
        <div class="submit">
          <button type="submit">Submit</button>
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
        userName: '',
        fullName: '',
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



  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>