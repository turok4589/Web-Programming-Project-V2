/* B"H

*/
import { myFetch } from "./my-fetch";
import session from "./session"

export function getExercises(user_id) {
    return myFetch('Exercises/UserTable', {User_id: user_id})
}

export function addexercise(time_Spent, calories_Burned, favorite_Exercise, exercise_Type_id, distance, exercise_Sets, reps_Per_Set, lifting_Weight, bodyweight, user_id){
    return myFetch('Exercises', {Time_Spent: time_Spent, Calories_Burned: calories_Burned, Favorite_Exercise: favorite_Exercise, Exercise_Type_id: exercise_Type_id, Distance: distance, Exercise_Sets: exercise_Sets, Reps_Per_Set: reps_Per_Set, Lifting_Weight: lifting_Weight, BodyWeight: bodyweight, User_id: user_id })
}

export function comment(post_id, text){
    return myFetch('comments', { Post_id: post_id, Owner_id: 1, Text: text })
}

export function getexercisetypes() {
    return myFetch('exercisetypes');
}

export function updatexercise(id, time_Spent, calories_Burned, favorite_Exercise, exercise_Type_id, distance, exercise_Sets, reps_Per_Set, lifting_Weight, bodyweight, user_id){
    return myFetch('Exercises/updatexercise', {id: id, Time_Spent: time_Spent, Calories_Burned: calories_Burned, Favorite_Exercise: favorite_Exercise, Exercise_Type_id: exercise_Type_id, Distance: distance, Exercise_Sets: exercise_Sets, Reps_Per_Set: reps_Per_Set, Lifting_Weight: lifting_Weight, BodyWeight: bodyweight, User_id: user_id});
}

export function deleteexercise(id, user_id){
    return myFetch('Exercises/delete', {id: id, User_id: user_id});
}