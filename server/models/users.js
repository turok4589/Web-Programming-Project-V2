/* B"H

*/
const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

//const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { ADMIN:5, USER:6 };

async function getAll(){
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Users`);
}

async function getUserFriends(id)
{
    const rows = await mysql.query(`SELECT * FROM Friendlist WHERE Owner_id=?` , [id]);
    if(!rows.length) throw {status: 404, message: "Sorry, this user has no friends added" } //rows is an array
      
    return rows
}

async function get(id){
    const sql = `SELECT 
        *,
        (SELECT Value FROM ContactMethods Where User_id = Users.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = true) as PrimaryEmail
    FROM Users WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
}

async function login(email, password){
    const sql = `SELECT *
    FROM Users U Join ContactMethods CM ON U.id=CM.User_id WHERE CM.Value=?`;
    const rows = await mysql.query(sql, [email]);
    if(!rows.length) throw { status: 404, message: "Sorry, that email address is not registered with us." };
    console.log({password, Password: rows[0].Password});

    const hash = await bcrypt.hash(password, rows[0].Password)
    const res = await bcrypt.compare(password, rows[0].Password)
    console.log ({res, hash})
    if(! res ) throw { status: 403, message: "Sorry, wrong password." };
    return get(rows[0].User_id);
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 2`);
}

async function add(UserName, FirstName, LastName, DOB, Password, User_Type){
    const sql = `INSERT INTO Users (created_at, UserName, FirstName, LastName, DOB, Password, User_Type) VALUES ? ;`;
    const params = [[new Date(), UserName, FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [params]);
}

async function update(id, UserName, FirstName, LastName, DOB, Password, User_Type){
    const sql = `UPDATE Users SET ? WHERE id = ?;`;
    const params = {UserName, FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM Users WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

async function register(UserName, FirstName, LastName, DOB, Password, User_Type, email) {
    if(await cm.exists(email)){
        throw { status: 409, message: 'You already signed up with this email. Please go to Log in.' }
    }
    const hash = await bcrypt.hash(Password, SALT_ROUNDS);
    const res = await add(UserName, FirstName, LastName, DOB, hash, User_Type);
    const emailRes = await cm.add(cm.Types.EMAIL, email, true, true, res.insertId);
    const user = await get(res.insertId);
    return user;
}
async function Add_A_New_Friend(Friends_URL_Page, Owner_id, Friend_id)
{
    const sql = `INSERT INTO Friendlist(created_at, Friends_URL_Page, Owner_id, Friend_id) VALUES ? ;`;
    const params = [[new Date(), Friends_URL_Page, Owner_id, Friend_id]];
    return await mysql.query(sql, [params]);
}

async function RemoveFriend(Owner_id, Friends_id)
{
    if(Owner_id == Friends_id){
        throw { status: 409, message: 'You cannot delete yourself' }
    }
    const sql = `DELETE FROM Friendlist WHERE Friends_id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, UserName, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, register, login, search, Types, Add_A_New_Friend, RemoveFriend, getUserFriends}