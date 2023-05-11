import useUsarios from '../hooks/useUusarios';
import { Usuario} from '../interfaces/reqRes';

const Usuarios = () => {

    const {usuarios, handlePage} = useUsarios()

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return(
            <tr key={id}>
                <td>
                    <img 
                        src={avatar}
                        alt={first_name}
                        style={{
                            width:35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

  return (
    <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map( renderItem )
                }
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={() => handlePage(-1) }>
            Anterior
        </button>
        &nbsp;
        &nbsp;
        <button className='btn btn-primary' onClick={() => handlePage(+1) }>
            Siguiente
        </button>
    </>
  )
}

export default Usuarios