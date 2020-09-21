const express = require('express');
const app = express()
// app.use(bodyParser.json());

//Serverside commands
// app.get(routename, (request, response) => {})
// app.post
// app.put
// app.delete

app.get("/get-all-datas", (req, res) => {
    // works on DB
    res.status(200).json({
        products: [
            {id: 1, title: "Test"},
            {id: 2, title: "Test2"},
        ]
    })
})

app.post("/save", (req, res) => {
    // works on DB
    console.log(req.body.title)
    res.status(200).json({
        title: "Hello " + req.body.title + " my friend !"
    })
})

module.exports = {
    path: '/api',
    handler: app
}