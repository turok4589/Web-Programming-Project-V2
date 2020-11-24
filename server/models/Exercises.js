/* B"H
    Need to Fix
*/
const getexercisetype = require('./exercisetypes');
const mysql = require('./mysql');
//const Types = {RUNNING: 'Running', BENCH_PRESS: 'Bench Press', WALKING: 'Walking', BICYCLE_RIDING: 'Bicycle Riding', SWIMMING: 'Swimming'}; //not going to be used anymore. I think

async function getAll(){
    console.log("Called Get All")
    //return await mysql.query(`SELECT * FROM Exercises`);
    const sql = `SELECT E.*, FirstName, LastName FROM Exercises E Join Users U ON E.User_id = U.id`
    return await mysql.query(sql);
}

async function getAllForUser(id){
    console.log("Called Get All User Exercises")
    const sql = `SELECT * FROM Exercises WHERE User_id =?;`;
    return await mysql.query(sql , [id]);
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

async function add(Time_Spent, Calories_Burned, Favorite_Exercise, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight, User_id){
    const exercisetype = getexercisetype.getexercise(Exercise_Type_id);
    const sql = `INSERT INTO Exercises (created_at, Time_Spent, Calories_Burned, Favorite_Exercise, Exercise_Type, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight, User_id) VALUES ? ;`;
    const params = [[new Date(), Time_Spent, Calories_Burned = 0, Favorite_Exercise, exercisetype, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight, User_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Time_Spent, Calories_Burned, Favorite_Exercise, Owner_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight){
    const exercisetype = getexercisetype.getexercise(Exercise_Type_id);
    const sql = `UPDATE Exercises SET ? WHERE id = ?;`;
    const params = {Time_Spent, Calories_Burned, Favorite_Exercise, exercisetype, Owner_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight };
    const res = await mysql.query(sql, [params, id]);
    return get(res.insertId);
}
//const params = { Type, Value, IsPrimary, CanSpam, User_id };
// return await mysql.query(sql, [params, id]);

async function remove(id){
    const sql = `DELETE FROM Exercises WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

async function Set_User_Reps(id, Reps_Per_Set){
    const sql = `UPDATE Exercises SET Reps_Per_Set = ? WHERE id = ?;`;
    const params = {Reps_Per_Set, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

async function Set_User_Weight(id, Lifting_Weight){
    const sql = `UPDATE Exercises SET Lifting_Weight = ? WHERE id = ?;`;
    const params = {Lifting_Weight, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

async function Set_User_Distance(id, Distance){
    const sql = `UPDATE Exercises SET Distance = ? WHERE id = ?;`;
    const params = {Distance, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

async function Set_User_Sets(id, Distance){
    const sql = `UPDATE Exercises SET Excercise_Sets = ? WHERE id = ?;`;
    const params = {Exercise_Sets, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

const search = async q => await mysql.query(`SELECT id, Value FROM Exercises WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, search, getExerciseUserId, Set_User_Reps, Set_User_Distance, Set_User_Sets, Set_User_Weight, getAllForUser }