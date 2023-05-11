
export const TiposBasicos = () => {

    const nombre: string = 'Daniel'
    const edad: number = 29
    const status: boolean = true
    const poderes: string[] = []

  return (
    <>
        <h2>TiposBasicos</h2>
        <div className="d-flex align-items-center">
            <p className="my-auto"> String: </p> 
            <p className="my-auto"> {nombre}</p>
        </div>
        <div className="d-flex align-items-center">
            <p className="my-auto"> number: </p> 
            <p className="my-auto"> {edad}</p>
        </div>
        <div className="d-flex align-items-center">
            <p className="my-auto"> Boolean: </p> 
            <p className="my-auto">{status ? 'Activo' : 'Inactivo'}</p>
        </div>
        <div className="d-flex align-items-center">
            <p className="my-auto"> Array: </p> 
            <p className="my-auto"> {poderes.join(', ')}</p>
        </div>
    </>
  )
}
