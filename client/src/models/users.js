/* B"H

*/
import { myFetch } from "./my-fetch";
import session from "./session"

export function getList() {
    return myFetch('users');
}

export function login(email, password){
   return myFetch('users/login', {email, password })
}

export function register(username, firstname, lastname, dob, password, email){
    return myFetch('users/register', {UserName: username, FirstName: firstname, LastName: lastname, DOB: dob, Password: password, Email: email})
}

/*
export const User_Server_Side = {

}

*/