const express = require('express');
const tareas = require('./user');
const router = express.Router();


router.get('/', async (req, res) =>{
    const tareas = await tareas.find(function (err, tareas) {
        console.log(tareas);
        res.json(tareas)
    });

router.post('/', async (req, res) => {
    const { nombre, celular, email, direccion} = req.body;
    const tarea = new tareas({ nombre,
        celular,
        email,
        direccion,
    }); 
    await tarea.save();
    res.json('peticion finalizada')
})
    
} )
