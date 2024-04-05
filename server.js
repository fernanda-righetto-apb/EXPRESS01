const express=require('express');

const server =express();

//rotas
server.get('/',(req,res)=>{
    res.send('<h1>Hello boys and girls, ExpressJS!</h1>')
})

server.get('/sobre',(req,res)=>{
    res.send('<h2>Somos quem podemos ser!!</h2>')
})

server.get('/json',(req,res)=>{
    res.send({'nome':'Alcebíades'});

})
server.get('/',(req,res)=>{
    res.send('<h1>Hello boys and girls, ExpressJS!</h1>')
})
server.use((req,res)=>{
    //res.send("Erro mano!!")
    res.status(404).send("Erro mano!!")
})


server.listen(3000);