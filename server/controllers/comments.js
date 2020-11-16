const express = require('express');
const Users = require('../models/comments');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        comments.getAll().then(x=> res.send( x.map(user=> ({ ...comments}) ) ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        comments.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/addcomment/:id, :id', (req, res, next) => {
        comments.add( 
            req.body.Text,
            req.params.Exercise_id, 
            req.params.Owner_id
        ).then(newComment => {
            res.send( newComment );
        }).catch(next)
    })
    .put('/updatecomment/:id, :id, :id', (req, res, next) => {
        comments.update( req.params.id,
            req.body.Text,
            req.params.Exercise_id, 
            req.params.Owner_id
        ).then(newComment => {
            res.send( newComment );
        }).catch(next)
    })
    .delete('/deleteusers/:id', (req, res, next) => {
        comments.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;