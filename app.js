const express = require('express');
const cors = require('cors');
require('encoding')

const bodyParser = require('body-parser');

const app = express(); 

const port = 3008; 

//MIDDLEWARES

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); 

function unixTimestamp () {  
    return Math.floor(
        new Date(new Date().toLocaleString('es-MX'))/1000
    )
  }

app.get('/', (req, res)=>{    
    res.send(unixTimestamp()+'' )
})
app.get('/ms', (req, res)=>{
    
    res.send(Math.floor(
        new Date(new Date().toLocaleString('es-MX'))/1
    ) +'' )
})
app.get('/datetime', (req, res)=>{
    
    res.send(new Date().toLocaleString('es-MX') )
})


app.listen(port, ()=> {
    console.log('listening on ', port)
});
