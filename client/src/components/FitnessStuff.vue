<template>
  <div class = "card">
    <div v-if="i==0">
         <p><strong>User: {{fitnessstuff.owner.Name}}<br></strong></p>
         <div class = "columns">
            <div class = "column is-one-third">  
                 <div class="field">
                     <label class="label"> <strong>Please Enter Your Weight in LBS Here:</strong></label>
                     <div class="control">
                         <input class="input" type="Number" placeholder="Weight">
                    </div>
                </div>   
           </div>
         </div>
    </div>
   <div class = "columns">
       <div class = "column is-one-third">
           <div class="control">
               <h1><strong>Please Select An Excercise</strong></h1>
              <div class="select">
               <select>
                  <option>Please Click This To Pick An Exercise</option>
                 <option>{{fitnessstuff.BenchPress.Exercise_Name}}</option>
                 <option>{{fitnessstuff.Running.Exercise_Name}}</option>
                 <option>{{fitnessstuff.Walking.Exercise_Name}}</option>
                </select>
              </div>
          </div>
       </div>
         <div class = "column is-one-third">
              <div class="field">
                      <div v-if="i==0">
                          <h2>These input fields are not complete eventually i want to make it so it outputs the appropriate input labels for the exercise chosen</h2>
                      </div>
                     <label class="label"> <strong>If you selected the Running Option Enter The Number Of Miles You Ran/Walked:</strong></label>
                     <div class="control">
                         <input class="input" type="Number" placeholder="Miles Ran">
                    </div>
                </div>  
                <div class = "field">
                   <label class="label"> <strong>If you selected the Bench Press option enter the amount of weight you were lifting</strong></label>
                     <div class="control">
                         <input class="input" type="Number" placeholder="Weight">
                    </div>
                </div>
         </div>
   </div>
  </div>
  
</template>

<script>
export default {
     props: {
       fitnessstuff: Object,
       i: Number
     }
}
</script>

<style>

</style>