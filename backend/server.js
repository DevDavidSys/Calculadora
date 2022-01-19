const express = require('express');
const parser = require('body-parser');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Port = 3000;


const soma = require(path.join(__dirname,'functions','soma.js'));
app.use(parser.json());

app.get('/',(req,res)=>{
    res.send('ola mundoaa')
})
app.post('/soma',(req,res)=>{
    console.log(req.body);
    var result = soma(req.body.n1,req.body.n2);
    
    res.send(JSON.stringify(result));
})
app.listen(Port,()=>{
    console.log(`Rodando na porta ${Port}`);
})
