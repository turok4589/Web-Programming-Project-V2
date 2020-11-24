<template>
 <form>
    <h1 class="is-size-2">
        <strong>Welcome to the MyFitnessApp Sign Up Page!<br></strong>
    </h1> 
    <h2 class="is-size-0.5">
        <strong>Please Enter your Name, Username, Date Of Birth, Email, and Password<br><br></strong>
    </h2> 

  <div class="field">
  <label class="label"><strong>First Name:</strong></label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Your First Name" v-model="firstname">
  </div>
</div>

<div class="field">
  <label class="label"><strong>Last Name:</strong></label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Your Last Name" v-model="lastname">
  </div>
</div>

<div class="field">
  <label class="label"><strong>Username:</strong></label>
  <div class="control has-icons-left">
    <input class="input" type="text" placeholder="Enter Your Username" v-model="username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>
<div class = "columns">
  <div class = "column is-one-third">
      <div class="field">
        <label class="label"><strong>Enter The Year You Were Born:</strong></label>
        <div class="control has-icons-left">
          <input class="input" type="number" placeholder="Enter a year" v-model="year">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
  </div>
  <div class = "column is-one-third">
      <div class="field">
        <label class="label"><strong>Month You Were Born:</strong></label>
        <div class="control has-icons-left">
          <input class="input" type="number" placeholder="Month(Enter a number)" v-model="month">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
  </div>
  <div class = "column is-one-third">
      <div class="field">
        <label class="label"><strong>Day You Were Born:</strong></label>
        <div class="control has-icons-left">
          <input class="input" type="number" placeholder="Enter the day you were born(has to be a number)" v-model="day">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
  </div>
</div>

<div class="field">
  <label class="label"><strong>Email:</strong></label>
  <div class="control has-icons-left">
    <input class="input" type="text" placeholder="Enter Your Email" v-model="email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
        <h3><strong>Password:</strong><br></h3>
    <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Please Enter Your Password" v-model="password">
        <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
        </span>
    </p>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-info" @click.prevent="signup">
       <strong>Register</strong>
    </button>
  </div>
  <div class="control">
    <router-link to="/login"  class="button is-link is-danger"><strong>Already have an account?</strong></router-link>
  </div>
</div>
 </form>
</template>

<script>
import session from "@/models/session";
import { register } from "@/models/users";
export default {
     data:() => ({
        email: '', 
        password: '',
        username: '',
        firstname: '',
        lastname: '',
        year: 0,
        month: 0,
        day: 0,
    }),
    methods: {
       async signup(){
          const dob = this.year + '-' + this.month + '-' + this.day;
          await register(this.username, this.firstname, this.lastname, dob, this.password, this.email);
          session.addNotification('Yay! You Signed up! Login to begin tracking your fitness goals!');
          this.$router.push('Login');
       },
    }
}
</script>

<style>

</style>