import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.first_name} added to the database!`);
};

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.filter((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    // Corrected to res.send
    res.send(`User with the ID ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {first_name, last_name, age} = req.body;
    const user = users.find((user) => user.id == id);

    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(age)  user.age = age;
    
    res.send(`User with the Id ${id} has been updated`)
};

