//require express and setup other dependencies
const express = require('express');
const path = require('path');
//require database
const db = require('./config/mongoose');
//required todo schema
const Todo = require('./models/todo');


//requiring moment to formate date
//Please intall moment before running the project to formate date 
//command: npm install moment 


var moment = require('moment');
const app = express();
const port = 8000;


//setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded());

//setting up static files
app.use(express.static('assets'));

//get request for homepage
app.get('/',function(req,res){
    Todo.find({},function(err,todoItems){
        if(err){
            console.log('error in fetching from db');
            return;
        }
        //formating date
        var fomatted_date = moment(req.body.date).format('DD-MM-YYYY');
        return res.render('home',{
            title:'Todo App',
            tast_list: todoItems,
            correct_date: fomatted_date
    });

    })
});

//POST request to create new todo item
app.post('/create_todo',function(req,res){
    Todo.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    },function(err,newTodo){
        if(err){
            console.log('error in creating new Todo');
            return;
        }
        res.redirect('back');
    });
    
});

//detele tast request to delete todo item
app.get("/delete-task",(req,res)=>{
    //putting all the ids of checkbox which are checked in array id
    let id=req.query.id;
    //deleting all the todo items which are checked with deletemany
    Todo.deleteMany({_id:{$in:id}},(err,todo)=>{
        if(err){
            console.log("Error in deleting a task: ",err);return;
        }
        return res.redirect('back');
    })
})

//listning to the port
app.listen(port, function(err){
    if(err){
        console.log(`error in running server: ${err}`);
        return;
    }
    console.log(`server is running on port: ${port}`);
});