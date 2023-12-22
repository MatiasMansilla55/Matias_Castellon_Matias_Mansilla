function deleteBy(id) {
    const url = 'http://localhost:8081/odontologos/eliminar/' + id;
    const settings = {
        method: 'DELETE',
        mode:'cors',
    };

    fetch(url, settings)
        .then(response => {
            // Verificar si la respuesta fue exitosa (código de estado 2xx)
            if (!response.ok) {
                throw new Error('Error al eliminar el odontólogo');
            }

            // No hay datos en la respuesta, solo devolver una cadena vacía
            return response.text();
        })
        .then(data => {
            // Hacer algo con la respuesta si es necesario
            console.log('Respuesta del servidor:', data);

            // Borrar la fila del odontólogo eliminado
            let row_id = "#tr_" + id;
            document.querySelector(row_id).remove();
        })
        .catch(error => {
            console.error('Error durante la eliminación:', error);
        });
}
