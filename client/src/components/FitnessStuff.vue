<template>
  <div class = "card">
    <div>
         <p><strong>User: {{session.user.name}}<br></strong></p>
         <p><strong>User ID: {{session.user_id}}<br></strong></p>
         <div class = "columns">
              <div class = "column is-one-third">  
                  <div class="field">
                      <label class="label"> <strong>Please Enter Your Weight in KG Here:</strong></label>
                      <div class="control">
                          <input class="input" type="Number" placeholder="Weight" v-model="BodyWeight">
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
                <tr v-for=" (x, i) in userlist " 
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
                    <td> {{x.Calories_Burned}}</td>
                </tr>
            </tbody>
        </table>
  </div>
  
</template>

<script>
import { addexercise, comment, getexercisetypes, getListForUser } from "../models/exercise";
import session from "@/models/session";

export default {
     props: {
       fitnessstuff: Object,
       i: Number
     },
     data: () => ({
        session,
        BodyWeight: 0,
        exercise_types: [],
        favorite_Exercise: 0,
        userlist: [],
        reps: 0,
        weight: 0,
        calories_Burned: 0,
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
        ]

     }),
     methods: {
        async userexercises(){
          const user_id = session.user_id;
          this.userlist = await getListForUser(user_id);
        },
        async addexercise(){
          const user_id = session.user_id;
          calories_Burned =  this.calculatecalories(exercise_types[exercise_Type_id - 1].MET_Score, BodyWeight, time_Spent);
          const response = await addexercise(this.time_Spent, this.calories_Burned, this.favorite_Exercise, this.exercise_Type_id, this.distance, this.exercise_Sets, this.reps_Per_Set, this.lifting_Weight, user_id);
          this.fitnessstuff.Exercises.push(response);
        },
        async comment(){
          const response = await comment(this.post.id, this.commentText);
          this.fitnessstuff.Comments.push(response);
        },
        async createdtypes(){
            this.exercise_types = await getexercisetypes();
        },
        calculatecalories(Met_Score, BodyWeight, time_Spent){
            const calories = (Met_Score * 3.5 * BodyWeight)/200;
            const caloriesperminute = calories * time_Spent;
            return caloriesperminute;
        }
     }

}
</script>

<style>

</style>