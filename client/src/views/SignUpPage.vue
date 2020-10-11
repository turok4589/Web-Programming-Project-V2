<template>
 <form>
    <h1 class="is-size-2">
        <strong>Welcome to the MyFitnessApp Sign Up Page!<br></strong>
    </h1> 
    <h2 class="is-size-0.5">
        <strong>Please Enter your Name, Username, Email, and Password<br><br></strong>
    </h2> 

  <div class="field">
  <label class="label"><strong>First Name:</strong></label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Your First Name">
  </div>
</div>

<div class="field">
  <label class="label"><strong>Last Name:</strong></label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Your Last Name">
  </div>
</div>

<div class="field">
  <label class="label"><strong>Username:</strong></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Enter Your Username" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label"><strong>Email:</strong></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Enter Your Email" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div class="field">
        <h3><strong>Password:</strong><br></h3>
    <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Please Enter Your Password">
        <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
        </span>
    </p>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-info"><strong>Register</strong></button>
  </div>
  <div class="control">
    <router-link to="/login"  class="button is-link is-danger"><strong>Already have an account?</strong></router-link>
  </div>
</div>
 </form>
</template>

<script>
export default {

}
</script>

<style>

</style>