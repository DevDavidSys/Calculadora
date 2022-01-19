const express = require('express');
const parser = require('body-parser');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Port = 3000;


const soma = require(path.join(__dirname,'functions','soma.js'));
const subtrair = require(path.join(__dirname,'functions','subtrair.js'));
const dividir = require(path.join(__dirname,'functions','dividir.js'))
const multiplicar = require(path.join(__dirname,'functions','multiplicar.js'))
app.use(parser.json());

app.get('/',(req,res)=>{
    res.send('ola mundoaa')
})
app.post('/soma',(req,res)=>{
    console.log(req.body);
    var result = soma(req.body.n1,req.body.n2);
    
    res.send(JSON.stringify(result));
})
app.post('/subtrair',(req,res)=>{
    let result = subtrair(req.body.n1,req.body.n2)

    res.send(JSON.stringify(result));
})
app.post('/dividir',(req,res)=>{
    
    let result = dividir(req.body.n1,req.body.n2);
    res.send(JSON.stringify(JSON.stringify(result)))

})

app.post('/multiplicar',(req,res)=>{
    let result = multiplicar(req.body.n1,req.body.n2);
    res.send(JSON.stringify(result));
    

})


app.listen(Port,()=>{
    console.log(`Rodando na porta ${Port}`);
})
