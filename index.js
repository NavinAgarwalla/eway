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



app.post('/contact-info', (req, res) => {
    console.log('[POST] /contact-info');
    const memory = req.body.conversation.memory;
    const state= memory.state;
    const district = memory.district;
    contactinfo(state,district).then((data)=>{
        res.json({replies:data});
    });
});

app.listen(port, () => console.log(`App started on port ${port}`));