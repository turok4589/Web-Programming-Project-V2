<template>
  <div class = "card">
    <div>
         <p><strong>User: {{session.user.name}}<br></strong></p>
         <p><strong>User ID: {{session.user_id}}<br></strong></p>
         <div class="control">
                          <a class="button" @click.prevent="created">
                              View All Exercises
                          </a>
                      </div>
         <div class = "columns">
              <div class = "column is-one-third">  
                  <div class="field">
                      <label class="label"> <strong>Please Enter Your Weight in KG Here:</strong></label>
                      <div class="control">
                          <input class="input" type="Number" placeholder="Weight" v-model="bodyweight">
                      </div>
                  </div>   
              </div>
         </div>
    </div>
   <div class = "columns">
       <div class = "column is-one-third">
           <div class="control">
               <h1><strong>Please Select An Excercise:</strong></h1>
              <div class = "dropdown is-active">
                  <select v-model ="exercise_Type_id">
                      <option v-for="option in options" v-bind:value="option.value">
                          {{ option.text }}
                      </option>
                  </select>
                  <span> Selected: {{ exercise_Type_id }}</span>
              </div>
          </div>
       </div>
         <div class = "column is-one-third">
              <div class="field" v-if="exercise_Type_id == 2 || exercise_Type_id == 3 || exercise_Type_id == 4 || exercise_Type_id == 5">
                     <label class="label"> <strong>You selected: {{ options[exercise_Type_id - 1].text}}</strong></label>
                     <div class="control">
                        <label class="label"> <strong>Enter the distance you travelled:</strong></label>
                         <input class="input" type="Number" placeholder="Miles Ran" v-model="distance">
                    </div>
                </div>  
                <div class = "field" v-if="exercise_Type_id == 1 || exercise_Type_id == 6"> 
                   <label class="label"> <strong>You selected: {{ options[exercise_Type_id - 1].text}}</strong></label>
                     <div class="control">
                       <label class="label"> <strong>Enter the amount of weight you lifted:</strong></label>
                         <input class="input" type="Number" placeholder="Weight" v-model="weight">
                    </div>
                    <div class="control">
                         <label class="label"> <strong>Enter the amount of sets:</strong></label>
                          <input class="input" type="Number" placeholder="Sets" v-model="sets">
                    </div>
                    <div class="control">
                         <label class="label"> <strong>Enter the amount reps:</strong></label>
                         <input class="input" type="Number" placeholder="Reps" v-model="reps">
                    </div>
                </div>
         </div>
         <div class = "column is-one-third">
             <div class="field">
               <label class="label"> <strong>Enter the amount of time you spent exercising and then once you have finished entering all your information press the add exercise button:</strong></label>
              <div class="control">
                         <input class="input" type="Number" placeholder="Enter the amount of minutes you spent exercising" v-model="time_Spent">
                    </div>
                      <div class="control">
                        <a class="button" @click.prevent="addexercise">
                            Enter Exercise
                        </a>
                      </div>
             </div>
        </div>
   </div>
      <table class="table is-narrow is-hoverable is-fullwidth">
            <thead><tr>
                <th>id</th>
                <th>Exercise</th>
                <th>Body Weight</th>
                <th>Time Spent Exercising </th>
                <th>Distance</th>
                 <th>Sets</th>
                 <th>Reps</th>
                <th>Lifting Weight</th>
                <th>Calories Burned</th>
            </tr></thead>
            <tbody>
                <tr v-for="(x, i) in list " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                     <td>{{x.Exercise_Type}}</td>
                    <td>{{x.BodyWeight}}</td>
                    <td>{{x.Time_Spent}}</td>
                    <td>{{x.Distance}}</td>
                    <td>{{x.Exercise_Sets}}</td>
                    <td>{{x.Reps_Per_Set}}</td>
                    <td>{{x.Lifting_Weight}}</td>
                    <td>{{x.Calories_Burned}}</td>
                </tr>
            </tbody>
        </table>
      <div class = "card">
        <div class = columns>
           <div class = "column is-two-thirds">
                      <div class="control">
                        <a class="button" @click.prevent="releaseupdateforms">
                            Want to update a row on the exercise table?
                        </a>
                      </div>
                  <div class="field" v-if="updatexercise == 1">
                    <h2><strong>Update Your Exercises With The Following Fields</strong></h2>
                      <label class="label"> <strong>Enter Exercise ID:</strong></label>
                      <div class="control">
                          <input class="input" type="Number" placeholder="Exercise ID" v-model="updatexercise_id">
                      </div>
                  </div>
                  <div class="field" v-if="updatexercise == 1">
                      <label class="label"> <strong>Enter Bodyweight:</strong></label>
                      <div class="control">
                          <input class="input" type="Number" placeholder="Exercise ID" v-model="updatebodyweight">
                      </div>
                  </div>
                   <div class="control" v-if="updatexercise == 1">
                        <h1><strong>Please Select An Excercise:</strong></h1>
                        <div class = "dropdown is-active">
                            <select v-model ="update_exercise_type_id">
                                <option v-for="option in update_options" v-bind:value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                            <span> Selected: {{ update_exercise_type_id }}</span>
                        </div>    
                   </div>
                   <div class="field" v-if="updatexercise == 1 && (update_exercise_type_id == 2 || update_exercise_type_id == 3 || update_exercise_type_id == 4 || update_exercise_type_id == 5)">
                     <label class="label"> <strong>You selected: {{ update_options[update_exercise_type_id - 1].text}}</strong></label>
                     <div class="control">
                        <label class="label"> <strong>Enter the distance you travelled:</strong></label>
                         <input class="input" type="Number" placeholder="Miles Ran" v-model="updatedistance">
                     </div>
                   </div>
                    <div class = "field" v-if="updatexercise == 1 && (update_exercise_type_id == 1 || update_exercise_type_id == 6)"> 
                        <label class="label"> <strong>You selected: {{ update_options[update_exercise_type_id - 1].text}}</strong></label>
                          <div class="control">
                            <label class="label"> <strong>Enter the amount of weight you lifted:</strong></label>
                              <input class="input" type="Number" placeholder="Weight" v-model="updateweight">
                          </div>
                          <div class="control">
                              <label class="label"> <strong>Enter the amount of sets:</strong></label>
                                <input class="input" type="Number" placeholder="Sets" v-model="updatesets">
                          </div>
                          <div class="control">
                              <label class="label"> <strong>Enter the amount reps:</strong></label>
                              <input class="input" type="Number" placeholder="Reps" v-model="updatereps">
                          </div>
                    </div>
                        <div class="field" v-if="updatexercise == 1">
                        <label class="label"> <strong>Enter the amount of time you spent exercising and then once you have finished entering all your information press the add exercise button:</strong></label>
                             <div class="control">
                                  <input class="input" type="Number" placeholder="Enter the amount of minutes you spent exercising" v-model="update_time_Spent">
                              </div>
                                <div class="control">
                                  <a class="button" @click.prevent="updatexercisetable">
                                      Update Exercise Row
                                  </a>
                                </div>
                        </div>
                </div>
               <div class = "column is-one-third">
                   <div class="control">
                        <a class="button" @click.prevent="releasedeleteforms">
                            Want to delete a row on the exercise table?
                        </a>
                    </div>
                    <div class="field" v-if="deletexercise == 1">
                       <h2><strong>Update Your Exercises With The Following Fields</strong></h2>
                        <label class="label"> <strong>Enter Exercise ID:</strong></label>
                        <div class="control">
                            <input class="input" type="Number" placeholder="Exercise ID:" v-model="deletexercise_id">
                        </div>
                    </div>
                      <div class="control" v-if="deletexercise == 1">
                          <a class="button" @click.prevent="deleteexerciserow">
                              Delete Exercise Row
                          </a>
                      </div>
               </div>  
        </div>
  </div>
  </div>
  
</template>

<script>
import {getExercises, addexercise, comment, getexercisetypes, getListForUser, updatexercise, deleteexercise  } from "../models/exercise";
import session from "@/models/session";

export default {
     data() {
       return {
        session,
        bodyweight: 0,
        exercise_id: 0,
        updatexercise_id: 0,
        deletexercise_id: 0,
        updatexercise: 0,
        deletexercise: 0,
        favorite_Exercise: 1,
        list: [],
        reps: 0,
        weight: 0,
        distance: 0,
        time_Spent: 0,
        sets: 0,
        exercise_Type_id: null,
        options: [
          {value:1, text:'Bench Press' },
          {value:2, text:'Running' },
          {value:3, text:'Bicycling'},
          {value:4, text:'Swimming'},
          {value:5, text:'Walking'},
          {value:6, text:'Squatting'},
        ],
        update_exercise_type_id: null,
        update_time_Spent: 0,
        updatebodyweight: 0,
        updatedistance: 0,
        updatesets: 0,
        updatereps: 0,
        updateweight: 0,
        update_options: 
        [
          {value:1, text:'Bench Press' },
          {value:2, text:'Running' },
          {value:3, text:'Bicycling'},
          {value:4, text:'Swimming'},
          {value:5, text:'Walking'},
          {value:6, text:'Squatting'},
        ],
     }},
      async created(){
         const user_id = session.user_id;
         console.log(user_id);
         this.list = await getExercises(user_id);
      },
     methods: {
       async created(){
         const user_id = session.user_id;
         this.list = await getExercises(user_id);
      },
        async addexercise(){
          const user_id = session.user_id;
          const exercise_types = await getexercisetypes();
          const calories_Burned =  this.calculatecalories(exercise_types[this.exercise_Type_id - 1].MET_Score, this.bodyweight, this.time_Spent);
          const response = await addexercise(this.time_Spent, calories_Burned, this.favorite_Exercise, this.exercise_Type_id, this.distance, this.sets, this.reps, this.weight, this.bodyweight, user_id);
          created();
        },
        async updatexercisetable(){
          const user_id = session.user_id;
          const exercise_types = await getexercisetypes();
          const calories_Burned =  this.calculatecalories(exercise_types[this.update_exercise_type_id - 1].MET_Score, this.updatebodyweight, this.update_time_Spent);
          console.log('this is the calories burned')
          console.log(calories_Burned)
          const response = await updatexercise(this.updatexercise_id, this.update_time_Spent, calories_Burned, this.favorite_Exercise, this.update_exercise_type_id, this.updatedistance, this.updatesets, this.updatereps, this.updateweight, this.updatebodyweight, user_id);
          this.updatexercise = 0;
        },
        async deleteexerciserow(){
           const user_id = session.user_id;
           const response = await deleteexercise(this.deletexercise_id, user_id);
           this.deletexercise = 0;
        },
        async comment(){
          const response = await comment(this.post.id, this.commentText);
          this.fitnessstuff.Comments.push(response);
        },
        calculatecalories(Met_Score, bodyweight, time_Spent){
            const calories = (Met_Score * 3.5 * bodyweight)/200;
            const caloriesperminute = calories * time_Spent;
            return caloriesperminute;
        },
        releaseupdateforms()
        {
          this.updatexercise = 1;
        },
        releasedeleteforms()
        {
          this.deletexercise = 1;
        }
     }

}
</script>

<style>

</style>