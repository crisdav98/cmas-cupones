const mongoose = require('mongoose');


const conectarDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://cmas-db-atlas:dNmf9r6ijyOPExwV@cluster0.4f52aim.mongodb.net/cupones_hotmart", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB CONECTADA")
    } catch (error) {
        console.log("Error al conectar DB");
        console.log(error);
        process.exit(1);
    }
}



module.exports = conectarDB;