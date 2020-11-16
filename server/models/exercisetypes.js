const mysql = require('./mysql');


async function getexercise(exercise_id)
{
    return await mysql.query(`SELECT Exercise_Types_Name, FROM Exercise_Types WHERE id = ?`, [exercise_id])
}

module.exports = { getexercise }