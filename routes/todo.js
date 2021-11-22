var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const ToDo = require('../models/Todo')

const privateKey = process.env.JWT_PRIVATE_KEY;


router.use(function(req, res, next) {
      console.log(req.header("Authorization"))
      if (req.header("Authorization")) {
          try {
              req.payload = jwt.verify(req.header("Authorization"), privateKey, { algorithms: ['RS256'] })
              console.log(req.payload)
          } catch(error) {
              return res.status(401).json({"error": error.message});
          }
      } else {
          return res.status(401).json({"error": "Unauthorized"});
      }
      next()
  })

router.get('/', async function(req, res, next) {
    console.log("find to do with get: " + req);
    const todo = await ToDo.find().where('author').equals(req.payload.id).exec()
    return res.status(200).json({"todo": todo})
});

router.get('/:taskId', async function(req, res, next) {
    //const Tasks = await Task.find().where('author').equals(req.payload.id).exec()
    
    //mongoose find query to retrieve Task where TaskId == req.params.TaskId
    console.log("find to do with id: " + req);
    const todo = await ToDo.findOne().where('_id').equals(req.params.taskId).exec()
    
    return res.status(200).json(todo)
});


router.delete('/:taskId', async function(req, res, next) {
    console.log("delete id:" + req.params.taskId);
    const todo = await ToDo.findOneAndDelete().where('_id').equals(req.params.taskId).exec()

    return res.status(200).json(todo)
})

router.post('/', async function (req, res) {
    const todo = new ToDo({
    "title": req.body.title,
    "description": req.body.description,
    "dateCreated": req.body.dateCreated,
    "complete": req.body.complete,
    "dateComplete": req.body.dateComplete,
    "author": req.payload.id
    })

    console.log("post " + todo);
    await todo.save().then( savedToDo => {
        return res.status(201).json({
            "id": savedToDo._id,
            "title": savedToDo.title,
            "description": savedToDo.description,
            "dateCreated": savedToDo.dateCreated,
            "complete": savedToDo.complete,
            "dateComplete": savedToDo.dateComplete,
            "author": savedToDo.author
        })
    }).catch( error => {
        return res.status(500).json({"error": error.message})
    });
})

module.exports = router;
