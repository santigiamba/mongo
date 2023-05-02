const express = require ("express")
const app = express()
const puerto = 2700
app.listen(puerto, () => {
    console.log("Servidor iniciado en el puerto " + puerto);
  });
const mongoose = require ("mongoose")
const uri = 'mongodb+srv://santi18x:<Na6Jd1jEuFZTzDpN>@cluster0.xsegxo9.mongodb.net/?retryWrites=true&w=majority'
mongoose.promise = golbal.promise;
mongoose.connect(uri, { useNewUrlParser: true })
.then(() => console.log('se conecto a la base de datos'))
.catch((err) => console.error(err));