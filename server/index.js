const express = require("express");
const cors = require("cors");
const router = require("./router/auth_router");
const app = express();

app.use(express.json())

app.use(cors())

app.use('/api/auth',router)
// let info = [{
//     name: "rajan",
//     age: 17,
//     role: "developer",
//     Countery : "india"
// }]

app.get('/', (req, res) => {
    res.json({
        name: "rajan",
        age: 17,
        role: "developer",
        Countery: "india"
    });
    
})

app.listen(5300, () => {
    console.log("server start now ...")
});
