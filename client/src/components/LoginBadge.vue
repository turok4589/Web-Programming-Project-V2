<template>
 <div id="LoginBadge">
    
    <div class="media" v-if="session.user">
         <div class="media-content">
            <p class="has-text-weight-bold">{{session.user.name}}</p>
            <p class="is-size-7">@{{session.user.handle}}</p>
        </div>
    </div>
    <div class="buttons" v-else>
          <router-link to="/signuppage"  class="button"><strong>Sign Up</strong></router-link>
          <router-link to="/login"  class="button"><strong>Log in</strong></router-link>
    </div>
</div>
</template>

<script>
import session from "@/models/session";
export default {
    data: ()=> ({
        session
    })
}
</script>

<style>

</style>