import './UsersStyles.css'

export default function Admin(){
    return(
        <>
            <div className="contenedor">
            
            <h1 className="titulo">Lista de usuarios</h1>
            <label htmlFor="filtro">Cedula</label>
            <input type="text" id="filtro" />
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Direccion</th>
                    <th>Cedula</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>26.489.495</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                    <td>26.489.495</td>

                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>26.489.495</td>

                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>26.489.495</td>

                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                    <td>26.489.495</td>

                </tr>

                </table>
                </div>

        </>
    )
}