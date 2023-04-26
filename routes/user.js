// Improtar Rutas para Conductor
const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController");

router.get('/finduser/:email',
    UserController.buscarUsuario
);

module.exports = router;