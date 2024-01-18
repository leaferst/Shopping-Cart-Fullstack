const axios = require('axios');

const getAllItems = async (req,res) => {

    let items = await axios.get(`https://65a864f3219bfa37186719bb.mockapi.io/items`);
    console.log(items.data);
    res.json(items.data);

}

module.exports = {
    getAllItems
}