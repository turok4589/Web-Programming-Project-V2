const express = require('express');
const Users = require('../models/Users');

const router = express.Router();

router
    .get('/AllFriends/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        users.getUserFriends(id).then(x=> res.send( x ) )
        .catch(next);
    })
    post('/add_Friend', (req, res) => {
        Users.Add_A_New_Friend(
            req.body.Friends_URL_Page,
            req.body.Owner_id, 
            req.body.Friends_id
            ).then(newUser => {
            res.send( newUser );
        }).catch(next)
            
    });
    post('/delete_Friend', (req, res) => {
        Users.RemoveFriend(
            req.params.Owner_id, 
            req.params.Friends_id).then(msg => {
            res.send( msg );
        }).catch(next)
    });

module.exports = router;