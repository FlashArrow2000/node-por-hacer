const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion del ToDo'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como pendiente'
}
const argv = require('yargs')
    .command('crear', 'Crea un ToDo', {
        descripcion
    })
    .command('actualizar', 'Actualiza el ToDo', {
        descripcion,
        completado
    })
    .command('listar', 'Muestra todos los ToDo')
    .command('borrar', 'Borra un ToDo', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}