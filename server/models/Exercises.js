/* B"H
    Need to Fix
*/
const getexercisetype = require('./exercisetypes');
const mysql = require('./mysql');
const Types = {RUNNING: 'Running', BENCH_PRESS: 'Bench Press', WALKING: 'Walking', BICYCLE_RIDING: 'Bicycle Riding', SWIMMING: 'Swimming'}; //not going to be used anymore. I think

async function getAll(){
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Exercises`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM Exercises WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no exercises from this user" };
    return rows[0];
}

async function getExerciseUserId(exercise_id)
{
    return await mysql.query(`SELECT id, FROM Users WHERE id = ?`, [exercise_id])
}

async function add(Type, Time_Spent, Calories_Burned = 0, Favorite_Exercise, Owner_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight){
    //if(Type != Types.RUNNING || Type != Types.BENCH_PRESS || Type != Types.SWIMMING || Type != Types.WALKING || Type != Types.BICYCLE_RIDING)
    const exercisetype = getexercisetype.getexercise(Owner_id);
    const sql = `INSERT INTO Exercises (created_at, Time_Spent, Calories_Burned, Favorite_Exercise, Exercise_Type, Owner_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight) VALUES ? ;`;
    const params = [[new Date(), Type, Time_Spent, Calories_Burned, Favorite_Exercise, exercisetype, Owner_id, , Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight]];
    return await mysql.query(sql, [params]);
}

async function update(id, Time_Spent, Calories_Burned = 0, Favorite_Exercise, Owner_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight){
    const exercisetype = getexercise(Owner_id);
    const sql = `UPDATE Exercises SET ? WHERE id = ?;`;
    const params = { Type, Time_Spent, Calories_Burned, Favorite_Exercise, exercisetype, Owner_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight };
    return await mysql.query(sql, [params, id]);
}
//const params = { Type, Value, IsPrimary, CanSpam, User_id };
// return await mysql.query(sql, [params, id]);

async function remove(id){
    const sql = `DELETE FROM Exercises WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Value FROM Exercises WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, search, Types, getExerciseUserId }