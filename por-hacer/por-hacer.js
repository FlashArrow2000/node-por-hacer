const fs = require('fs');
// const { require } = require('yargs');

let listadoToDo = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoToDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {

        listadoToDo = require('../db/data.json');

    } catch (error) {

        listadoToDo = [];

    }




}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoToDo.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoToDo
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    //Lo que hace este codigo, es dar la posicion de "tarea" si la descripcion de la tarea = a la descripcion que recibe como parametro
    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion); //respoonde con numeros, si da un -1, quiere decir que no la encontro. Los demas numeros que retone es la posicion

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoToDo.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoToDo.length === nuevoListado.length) {
        return false;
    } else {
        listadoToDo = nuevoListado; //Aqui hay que igualar el vector que la bd va a guardar, al vector nuevo. Para que asi pueda ser guardado en la BD
        guardarDB();
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}