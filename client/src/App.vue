<template>
     <div>
          <Nav/>
         <div class="container">
              <router-view/>
              <Footer/>
        </div>
     </div>
</template>

<script>
import Nav from "@/components/nav"
import Footer from '@/components/footer';
export default {
  components:{
     Nav,                      //auto puts Nav object in Nav with name Nav
     Footer
  }

}
</script>

<style lang="scss">

</style>
