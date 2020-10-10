<template>
     <div>
          <Nav/>
         <div class="container">
              <router-view/>
          </div>
     </div>
</template>

<script>
import Nav from "@/components/nav"
export default {
  components:{
     Nav                      //auto puts Nav object in Nav with name Nav
  }
}
</script>

<style lang="scss">

</style>
