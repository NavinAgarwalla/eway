const express = require('express');
const bodyParser = require('body-parser');
const contactinfo = require('./file.js');

const app = express();
app.use(bodyParser.json());

const port=process.env.PORT|| 3000;

app.post('/errors', (req, res) => {
   console.error(req.body);
   res.sendStatus(200); 
});



app.post('/state-informations', (req, res) => {
    
    const memory = req.body.nlp.entities;
    //console.log(memory.state);
    const state= memory.state[0].value;
    const district = memory.district[0].value;
    contactinfo(state,district).then((data)=>{
        res.json({replies:data});
    });
});

app.listen(port, () => console.log(`App started on port ${port}`));