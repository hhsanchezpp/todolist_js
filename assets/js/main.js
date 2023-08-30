const nuevatarea = document.getElementById("ingresa_tarea_input");
const btnnuevatarea = document.getElementById("btn_ingresa");
const totalestareas = document.getElementById("total_tareas");
const tareaslistas = document.getElementById("total_finalizadas");
const listado_de_tareas = document.getElementById("tareas_ingresadas");

const tareas = [
                { nombre: "Hacer mercado", finalizada: false},
                { nombre: "Estudiar para la prueba", finalizada: false },
                { nombre: "Sacar a pasear al Tobby", finalizada: false }
            ];
const carga_array_tareas = () => {
    let html = "";
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        const tareaId = `tarea_${i}`;
        html += `<tr>
                    <td><p>${i +1}</p></td>
                    <td><p>${tarea.nombre}</p></td>
                    <td><input class="check" type="checkbox" name="${tareaId}" id="${tareaId}" ${tarea.finalizada ? 'checked' : ''} /></td>
                    <td><button class="btn_eliminar" type="button" tarea-id="${i}">Eliminar</button></td>
                </tr>`;
    }
listado_de_tareas.innerHTML = html;

    const tick_chequeo = document.querySelectorAll(".check");
    tick_chequeo.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            tareas[index].finalizada = checkbox.checked;
            actualizarContador();
        });
    });

    actualizarContador();
};
const actualizarContador = () => {
    const contadortareaslistas = tareas.filter((tarea) => tarea.finalizada).length;
    tareaslistas.textContent = contadortareaslistas;
};

btnnuevatarea.addEventListener("click", () => {
    if (nuevatarea.value === "") {
        alert(`Tiene que ingresar Tarea.`);
    } else {
        const newtarea = {
            nombre: nuevatarea.value,
            finalizada: false
        };
        tareas.push(newtarea);
        nuevatarea.value = "";
        carga_array_tareas();
        totalestareas.textContent = tareas.length;
    }
});
carga_array_tareas();
totalestareas.textContent = tareas.length;

listado_de_tareas.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn_eliminar")) {
        const index = event.target.getAttribute("tarea-id");
        tareas.splice(index, 1);
        carga_array_tareas();
        totalestareas.textContent = tareas.length;
    }
});
