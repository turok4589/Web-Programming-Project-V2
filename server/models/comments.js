const mysql = require('./mysql');

//getall function, getid, add, update, delete

async function getAll(){
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Comments`);
}

async function getcommentidforexercise(exercise_id)
{
    return await mysql.query(`SELECT id, FROM Exercises WHERE id = ?`, [exercise_id])
}

async function getcommentidforowner(owner_id)
{
    return await mysql.query(`SELECT id, FROM Users WHERE id = ?`, [owner_id])
}

async function add(Text, Exercise_id, Owner_id){
    const sql = `INSERT INTO Comments (created_at, Text, Exercise_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Text, Exercise_id, Owner_id]];
    return await mysql.query(sql, [params]);
}

async function update(id, Text, Exercise_id, Owner_id){
    const sql = `UPDATE ContactMethods SET ? WHERE id = ?;`;
    const params = {Text, Exercise_id, Owner_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM Comments WHERE id = ?`;
    return await mysql.query(sql, [id]);
}


odule.exports = { getAll, getcommentidforexercise,getcommentidforowner, add, update, remove }