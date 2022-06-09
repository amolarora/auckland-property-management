const express = require("express");
const cors = require('cors');

const server = express();
server.use(cors());

server.listen('8989', () => {
    console.log("listening to port 8989");
})

server.get("/", (req, res) => {
    //let query = req.params.query;
    //let query = [10, 7, 8, 9, 1, 5];
    //const question = document.getElementById("question").value;
    var XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        const response = JSON.parse(this.responseText);
        //console.log(res);
        
        const quickSort = require("./quickSort.js");
        query = quickSort(response);

        console.log(query);
        res.send(query);
        //document.getElementById("display").innerHTML = "<pre>" + JSON.stringify(res,null,2) + "</pre>";
    }

    xhr.open('GET', 'http://localhost:8081/db/auckland_property/expArr/properties?key=&value=&type=&query=&projection=', true);
    xhr.send();
    
    //const quickSort = require("./quickSort.js");
    //query = quickSort(query);

    //console.log(query);
})