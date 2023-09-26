let contadorIdTarea = 0;

class Tareas {
    constructor(name, email, bday, id) {
        this.idTarea = contadorIdTarea++;
        this.name = name;
        this.email = email;
        this.bday = bday;
        this.id = id;
    }

    getIdTarea() {
        return this.idTarea;
    }

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }

    getBday() {
        return this.bday;
    }
    getId() {
        return this.id;
    }

    setTitle(title) {
        this.title = title;
    }

    mostrarTareaEnConsola() {
        console.log(`Id: ${this.getIdTarea()} - Nombre: ${this.getName()} - Email: ${this.getEmail()} - Fecha de Nacimiento: ${this.getBday()} - ID único: ${this.getId()}`);
    }
    agregarTareaAlaLista() {
        const listaTareas = document.getElementById('lista-tareas');
        listaTareas.innerHTML += `<li id="tarea-${this.getIdTarea()}">Nombre: ${this.getName()} // Email: ${this.getEmail()} // Fecha de Nacimiento: ${this.getBday()} // ID único: ${this.getId()}   <button id="limpar" onClick="eliminarTarea(${this.getIdTarea()})">Eliminar</button></li>`;
    }
}

const eliminarTarea = (id) => {
    const tarea = document.getElementById(`tarea-${id}`);
    console.log(tarea);
    tarea.innerHTML = '';
}

const agregarTarea = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bday = document.getElementById('b-day').value;
    const id = document.getElementById('id').value;

    // Expresiones regulares para validar campos
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const bdayRegex = /^\d{4}-\d{2}-\d{2}$/;
    const idRegex = /^\d+$/;

    // Validar campos
    if (!nameRegex.test(name)) {
        alert('Nombre no válido');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Email no válido');
        return;
    }

    if (!bdayRegex.test(bday)) {
        alert('Fecha de Nacimiento no válida (formato: YYYY-MM-DD)');
        return;
    }

    if (!idRegex.test(id)) {
        alert('ID no válido');
        return;
    }

    // Crear nueva tarea si los campos son válidos
    const nuevaTarea = new Tareas(name, email, bday, id);
    nuevaTarea.agregarTareaAlaLista();
    nuevaTarea.mostrarTareaEnConsola();

    // Limpiar campos
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('b-day').value = '';
    document.getElementById('id').value = '';
}
