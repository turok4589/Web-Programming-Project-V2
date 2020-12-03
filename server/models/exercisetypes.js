const mysql = require('./mysql');

async function getAll(){
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Exercise_Types`);
}

async function getexercise(exercise_id)
{
    console.log(exercise_id);
    const rows = await mysql.query(`SELECT * FROM Exercise_Types WHERE id = ?`, [exercise_id])
    return rows[0].Exercise_Types_Name
}

async function GetAllExerciseTypeNames()
{
    console.log("Getting All Exercise Type Names")
    return await mysql.query(`Select * FROM Exercise_Types`);
}

module.exports = { getexercise, getAll, GetAllExerciseTypeNames }