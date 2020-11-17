const express = require('express');
const users = require('../models/users');

const router = express.Router();

router
    .get('/AllFriends/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        users.getUserFriends(id).then(x=> res.send( x ) )
        .catch(next);
    })
    post('/add_Friend/:id, :id', (req, res) => {
        users.Add_A_New_Friend(
            req.body.Friends_URL_Page,
            req.params.Owner_id, 
            req.params.Friends_id
            ).then(newUser => {
            res.send( newUser );
        }).catch(next)
            
    });
    post('/delete_Friend', (req, res) => {
        users.RemoveFriend(
            req.params.Owner_id, 
            req.params.Friends_id).then(msg => {
            res.send( msg );
        }).catch(next)
    });

module.exports = router;