let todoModel = require('../models/todoModel');

module.exports = function(app){    
    app.get('/api/todos', function(req, res){
        let username = "test";
        req.params["username"] = username;
        todoModel.find({username: req.params.username}, function(err, todos){
            if(err){
                res.send("There is some error on server side.");
            }
            else{
                res.send(todos);
            }
        });   
    });

    app.get('/api/todo/:id', function(req, res){
        todoModel.findById({_id: req.params.id}, function(err, todo){
            if(err){
                res.send("There is some error on server side.");
            }
            else{
                res.send(todo);
            }
        }); 
    });

    app.post('/api/todo', function(req, res){
        if(req.body.id){
            // Update
            todoModel.findByIdAndUpdate(req.body.id, {
                username: "test",
                todo: req.body.todo,
                isDone: false
            }, function(err, todo){
                if(err){
                    res.send("Unable to update the ToDo.");
                }
                else{
                    res.send("Successfully Updated the ToDo.");
                }
            });
        }
        else{
            // Add
            todoModel({
                username: "test",
                todo: req.body.todo,
                isDone: false
            }).save(function(err){
                if(err){
                    res.send("Unable to save the ToDo.");
                }
                else{
                    res.send("Successfully saved the ToDo.");
                }
            });
        }
    })

    app.delete('/api/todo/:id', function(req, res){
        todoModel.findByIdAndRemove(req.params.id, function(err){
            if(err){
                res.send("Unable to remove ToDo.");
            }
            else{
                res.send("Successfully removed ToDo.");
            }
        });
    });
}