const mongoose= require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    celular: {
        type: String,
        validator: function (v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} No es un número válido!`
    },
    email: {
        type: String,
        require: true,
        index: true,
        match: /.+\@.+\..+/
    },
    direccion: {
        type: String,
        require: true,
    },
    activo: {
        type: Boolean,
        default: true
    }
}, { versionKey: false })


module.exports = mongoose.model('Tarea',  userSchema);