<template>
<div class = "page">
    <h1 class="is-size-1">
        Fitness Goals Tracker!
    </h1> 
    <div class = "container">
        <FitnessStuff v-for=" (x, i) in exercises " 
                      :key="i"
                      :i="i"
                      :fitnessstuff="x" /> 
    </div>
</div>
   
</template>

<script>
import session from "@/models/session";
import FitnessStuff from "@/components/FitnessStuff";
import { exercises } from "@/models/exercise";

export default {
    data()
    {
        return {
            exercises
        }
    },
components: {
     FitnessStuff
},
}
</script>

<style>

</style>