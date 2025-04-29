let agendaContactos = [];

    function agregarContacto() {
        alert("Bienvenido a su agenda de contactos");
        let nombre = prompt("Ingrese el nombre del contacto");
        let apellido = prompt("Ingrese el apellido del contacto");
        let telefono = prompt("Ingrese el telefono del contacto");

        let contacto = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        };
        agendaContactos.push(contacto);
        alert("Contacto agregado con exito");
    }

    

    function mostrarContactos() {
        if (agendaContactos.length === 0) {
            alert("No hay contactos en la agenda");
        } else {
            let contactos = "";
            for (let i = 0; i < agendaContactos.length; i++) {
                contactos += "Nombre: " + agendaContactos[i].nombre + ", Apellido: " + agendaContactos[i].apellido + ", Telefono: " + agendaContactos[i].telefono + "\n";
            }
            alert(contactos);
        }

    }
    function buscarContacto() {
        let buscarNombre = prompt("Ingrese el nombre del contacto que desea buscar");
        let contactoEncontrado = agendaContactos.find(contacto => contacto.nombre.toLowerCase() === buscarNombre.toLowerCase());
        if (contactoEncontrado) {
            alert(`Contacto encontrado: Nombre: ${contactoEncontrado.nombre}, Apellido: ${contactoEncontrado.apellido}, Telefono: ${contactoEncontrado.telefono}`);
        } else {
            alert("Contacto no encontrado");
        }
    }

    function eliminarContacto() {
        let buscarNombre = prompt("Ingrese el nombre del contacto que desea eliminar");
        let contactoEncontrado = agendaContactos.find(contacto => contacto.nombre.toLowerCase() === buscarNombre.toLowerCase());
        if (contactoEncontrado) {
            agendaContactos.splice(agendaContactos.indexOf(contactoEncontrado), 1);
            alert("Contacto eliminado con exito");
        } else {
            alert("Contacto no encontrado");
        }
    }

    function menu() {
        let opcion;
        do {
            opcion = parseInt(prompt("Seleccione una opcion: \n1. Agregar contacto \n2. Mostrar contactos \n3. Buscar contacto \n4. Eliminar contacto \n5. Salir"));
            switch (opcion) {
                case 1:
                    agregarContacto();
                    break;
                case 2:
                    mostrarContactos();
                    break;
                case 3:
                    buscarContacto();
                    break;
                case 4:
                    eliminarContacto();
                    break;
                case 5:
                    alert("Gracias por utilizar su agenda de contactos");
                    break;
                default:
                    alert("Opcion invalida, agrega una opcion del 1 al 5");
            }
        } while (opcion !== 5);
    }

menu();
