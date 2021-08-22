var mongoose = require('mongoose')


const reservationSchema = new mongoose.Schema({
    
    ville:{ type: String },
    date_arrivee:{ type: Date },
    nbr_nuitee:{ type: Number},
    comb_chambres:{type:Number},
    hotels:{type:String},
    source_req:{type:String},
    date_rech:{type:Date},
    ip_client:{type:String},
    nom_client:{type:String},
    id_client:{type:String},
    source_calcule:{type:String},

})


const reservations = mongoose.model("reservations", reservationSchema);

module.exports = {
  reservations: reservations
};
