//objeto
// let tarea = {
//     descripcion: "Estudiar",
//     completado: false,
//     completar: function(){
//         this.completado = true;
//     }
// };

//arreglo de tareas
let tareas = [
    {descripcion: "Hacer ejercicio", completado:false},
    {descripcion: "Hacer tarea", completado:false},
    {descripcion: "Recoger mandados", completado:true},
    {descripcion: "Lavas Ropa", completado:false},
    {descripcion: "Limpiar la casa", completado:false},
    {descripcion: "Cocinar", completado:true},
    {descripcion: "Atender clientes", completado:false},
    {descripcion: "Dar clases", completado:false},
    {descripcion: "Salir a pasear", completado:true},
    {descripcion: "Imprimir copias", completado:true}
];

function mostrarTareas(tareas, id){
    const tabla = document.getElementById(id);

    tareas.forEach(tarea => {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${tarea.descripcion}</td><td>${tarea.completado}</td>`;
        tabla.appendChild(fila);
    });
}

function TareasCompletas(tareas){
    return tareas.filter(tarea => tarea.completado == true);
}

function TareasIncompletas(tareas){
    return tareas.filter(tarea => tarea.completado == false);
}

const TCompletas = TareasCompletas(tareas);
const TIncompletas = TareasIncompletas(tareas);

mostrarTareas(tareas,'total');
mostrarTareas(TCompletas, 'completas');
mostrarTareas(TIncompletas, 'pendientes');