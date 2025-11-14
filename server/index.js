const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())

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
