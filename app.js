const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':


        let listado = porHacer.getListado();

        for (let tarea of listado) {
            if ((tarea.completado == false) || (tarea.completado == "false")) {
                tarea.completado = colors.red;
                tarea.completado = `${colors.red('Incompleto')}`;
            } else {
                tarea.completado = `${colors.green('Completado')}`;
            }
            console.log(colors.cyan("======Por Hacer======"));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(colors.cyan("====================="));
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
}