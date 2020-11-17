const express = require('express');
const exercises = require('../models/Exercises');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        exercises.getAll().then(x=> res.send( x.map(user=> ({ ...exercises}) ) ) )
        .catch(next);
    })
    //get a specific table
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        exercises.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    // get specific exercise types
    .get('/types', (req, res, next) => {
        exercises.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/addexercise/:id', (req, res, next) => {
        exercises.add(
            req.body.Time_Spent,  
            //calories burned should not be calculated yet
            req.body.Calories_Burned,
            req.body.Favorite_Exercise, 
            req.params.Owner_id,
            req.body.Distance,
            req.body.Sets,
            req.body.Reps_Per_Set,
            req.body.Lifting_Weight,
        ).then(newExercise => {
            res.send( newExercise );
        }).catch(next)
    })
    .put('/updateexercise/:id', (req, res, next) => {
        exercises.update( req.params.id,
            req.body.Time_Spent,  
            //calories burned should be calculated here but don't know how to yet
            req.body.Calories_Burned,
            req.body.Favorite_Exercise, 
            req.params.Owner_id,
            req.body.Distance,
            req.body.Sets,
            req.body.Reps_Per_Set,
            req.body.Lifting_Weight,
        ).then(newExercise => {
            res.send( newExercise );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        exercises.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;