const express = require ('express');
const { request } = require('http');
const Contenedor = require ('./index.js')
const clase = require ('./class.js')

const port = 8080

const app = express();
const content = new Contenedor('./productos.txt')

const server = app.listen (port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
});

server.on("error", error => console.log ("error en el servidor", error))


//app.get ('/productos', (req, res) => {
   // const allProducts = content.getAll();
    //res.send ( allProducts )
//})

app.get('/productos',async(req,res)=>{

    const allProducts = await content.getAll();
    
    res.send(allProducts);
    
    })


app.get('/productoRandom',async(req,res)=>{

    const random = await content.getById (2);
    
    res.send(random);
    
    })






//app.get ('/prodcutoRamdom', (req, res) => {
  //  const ramdomProduct = content.getById();
    //res.send (ramdomProduct)
//})






