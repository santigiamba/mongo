const mongoose  = require("mongoose")

const ejercitoSchema = new mongoose.Schema({
    nombre :{type: String, require : true},
    rango:{ type : String, require : true},
    division:{ type : String, require : true},
    especialidad:{ type : String, require : true},
    edad :{ type : Date, require : true}
})
const ejercito = mongoose.model('ejercito', ejercitoSchema);

module.exports = ejercito;
