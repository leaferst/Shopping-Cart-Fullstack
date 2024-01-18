const axios = require('axios');


const getAllUsers = (req, res) => {
    
    // would return an array of user objects

    // res.json(users);
}

const getAUser = async (req,res) => {

    console.log(req.params.id);



    // would return a single user object (name, avatar, cart, id)
    let user = await axios.get(`https://65a864f3219bfa37186719bb.mockapi.io/users/${req.params.id}`);
    res.json(user.data);
}

const deleteUser = (req,res) => {
    // let users = users.filter(u => u.id !== + req.params.id);

    // res.json({message: `Deleted user with id of ${req.params.id}.`})
}

module.exports = {
    getAllUsers,
    getAUser,
    deleteUser
}