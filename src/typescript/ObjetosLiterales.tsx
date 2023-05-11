
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Daniel',
        edad: 30,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }
    }

  return (
    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}

export default ObjetosLiterales