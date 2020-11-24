<template>
<form>
   <h1 class="is-size-2">
        <strong>Please enter your email and password<br><br></strong>
    </h1> 
  <div class="columns">
        <div class="column is-one-third is-offset-one-third">
    <div class="field">
        <h2><strong>Email:</strong><br></h2>
    <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Please Enter Your Email" v-model="email">
        <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
        </span>
    </p>
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
    <label class="checkbox">
       <input type="checkbox">
           Remember me<br><br>
    </label>
    <div class="field is-grouped buttons are-small">
    <p class="control">
       <button class="button is-success" @click.prevent="Login">
            Login
        </button>
    </p>
    <p class="control">
        <button class="button is-info">
        Forgot Password?
        </button>
    </p>
    <p class="control">
        <router-link to="/signuppage"  class="button is-info">No Account? Click This to Sign Up!</router-link>
    </p>
    </div>
    </div>
    </div>
</form>
</template>

<script>
import session from "@/models/session";
import { login  } from "@/models/users";

export default {
    data:() => ({
        email: '', 
        password: '',
    }),
    methods: {
            async Login(){
            const rows = await login(this.email, this.password)
                session.user = { //user is an object
                    name: rows[0].Firstname + ' ' + rows[0].Lastname,
                    handle: 'Newpaltz',
                }
                session.user_id = rows[0].User_id
                session.username = rows[0].Username
                session.addNotification('Yay! You logged in', 'success')
                this.$router.push('FitnessTracker')
           },
}
}
</script>

<style>

</style>