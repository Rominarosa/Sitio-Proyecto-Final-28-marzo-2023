var pool = require("./bd");

/*sirve para listar las promociones*/
async function getPromociones() {
    var query = "select * from promociones order by id ASC";//para que acomode las nuevas promos por oden que las voy generando, segun el id asignado, de mas viejas a mas nuevas
    var rows = await pool.query(query);
    return rows;
}
module.exports = { getPromociones }

async function deletePromocionesById(id) {
    var query = "delete from promociones where  id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

//Funcion para dar de alta una nueva promocion//
async function insertPromociones(obj) {
    try {
        var query = "insert into promociones set ?";
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }//cierra CATCH
}//cierra INSERT

//traigo los datos para modificar una SOLA promocion//
async function getPromocionesById(id) {
    var query = "select * from promociones where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarPromocionesById(obj, id) {
    try {
        var query = "update promociones set ? where id=? ";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}//cierra modificar update//

async function buscarPromociones(busqueda) {
    var query = "select * from promociones where titulo like ? OR info like ?";
    var rows = await pool.query(query, ["%" + busqueda + "%", "%" + busqueda + "%", "%"+ busqueda + "%"]);
    return rows;
}



module.exports = { getPromociones, deletePromocionesById, insertPromociones, getPromocionesById, modificarPromocionesById, buscarPromociones }
