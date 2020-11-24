<template>
     <div>
          <Nav/>
         <div class="container">
              <Notifications /> 
              <router-view/>
              <Footer/>
        </div>
     </div>
</template>

<script>
import Nav from "@/components/nav"
import Notifications from "@/components/Notifications";
import Footer from '@/components/footer';
export default {
  components:{
     Nav,                      //auto puts Nav object in Nav with name Nav
     Footer,
     Notifications
  }

}
</script>

<style lang="scss">

</style>
