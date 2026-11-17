const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    {id: 1, name: "Rahul", age:22},
    {id: 2, name: "Aman", age: 24}
];

app.get('/users', (req, res) => {
    res.status(200).json({
        message: "Users fetched successfully",
        data: users
    })
});

app.post('/users', (req, res)=>{
    const {name, age} = req.body;

    if(!name || !age){
        return res.status(400).json({
            message: "Name and age are required"
        })
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        age: age,
    }

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        data: newUser
    });
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
