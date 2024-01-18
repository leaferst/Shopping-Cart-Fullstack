const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const itemRouter = require('./routes/itemRoutes');


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());


app.use('/users', userRouter);
app.use('/items', itemRouter);

app.listen(port, () => {
    console.log(`Currently listening on port ${port}`);
});

// What do we want out app to do?

// When we search a user:
// User properties: name, avatar, cart, id

// display contents of cart array
// Cart object info: 5 properties: name, id, image, price

//https://65a864f3219bfa37186719bb.mockapi.io/:endpoint

// When you search for a user:
// We want the user's profile, avatar, and contents of cart to display at the top of the page
// Below, display all items eligible to add on (clickable to add to cart).  (maybe even add a search option)