import {useState,useEffect} from 'react'
import Error from './Error'
import Paciente from './Paciente'



const Formulario = ({pacientes, setPacientes, pacienteEdit, setPacienteEdit}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  
  const generarID = () =>{
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const [error, setError] = useState(false)

  useEffect(()=> {
    if (Object.keys(pacienteEdit).length>0){
      setNombre(pacienteEdit.nombre)
      setPropietario(pacienteEdit.propietario)
      setEmail(pacienteEdit.email)
      setFecha(pacienteEdit.fecha)
      setSintomas(pacienteEdit.sintomas)
    }
  },[pacienteEdit])


  
  const handleSubmit = (e) => {
    
    e.preventDefault()
    //Validación de datos
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true)
      return
    } 
      setError(false)
    //Objeto de paciente
    
    const objetoPaciente = { //Este objeto se creo para meter todos los useStates que contienen los datos de los pacientes dentro de un objeto llamado objetoPaciente
      nombre,
      propietario,
      email, 
      fecha,
      sintomas
    }

    if (pacienteEdit.id) { //Todo lo que este dentro de este if se va a ejecutar después de que se precione el submit solo si el paciente que se esta agregando tiene una id
      //Editando paciente
      objetoPaciente.id = pacienteEdit.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === pacienteEdit.id ? objetoPaciente : pacienteState) //esta función se va a ejecutar por cada elemento que haya en pacientes. lo que hace es buscar un elemento que tenga la misma id que el elemento que se esta agregarndo y si esta condicione se cumple lo va a remplazar por el elemento editado

      setPacientes(pacientesActualizados)
      setPacienteEdit({})
    } else {
      //Nuevo Registro
      objetoPaciente.id = generarID()
      setPacientes([...pacientes, objetoPaciente])
    }

    

    //Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y  <span className='text-cyan-700 font-bold '>Administralos</span> </p>

      <form
      onSubmit={handleSubmit}
      className='bg-white shadow-lg rounded-xl py-10 px-5 mb-10'>

        {error&& <Error mensaje='Todos los campos son obligatorios'/> }
        <div className='mt-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota: </label>
          <input
            className='border-2 w-full p-2 rounded-md placeholder-gray-400'
            type='text'
            placeholder='Nombre de la Mascota'
            id='mascota'
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
          />
        </div>


        <div className='mt-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario:</label>
          <input
            className='border-2 w-full p-2 rounded-md placeholder-gray-400'
            type='text'
            placeholder='Nombre del Propietario'
            id='propietario'
            value={propietario}
            onChange={ e => setPropietario(e.target.value)}
          />
        </div>


        <div className='mt-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email:</label>
          <input
            className='border-2 w-full p-2 rounded-md placeholder-gray-400'
            type='email'
            placeholder='Email de contacto Propietario'
            id='email'
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>


        <div className='mt-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta:</label>
          <input
            className='border-2 w-full p-2 rounded-md placeholder-gray-400'
            type='date'
            id='alta'
            value={fecha}
            onChange={ e => setFecha(e.target.value)}
          />
        </div>


        <div className='mt-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea
            className='border-2 w-full p-2 rounded-md placeholder-gray-400'
            id='sintomas'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={ e => setSintomas(e.target.value)}
          />
        </div>
        

        <input
          type='submit'
          className='bg-cyan-700 w-full p-3 text-white font-bold uppercase hover:bg-cyan-800 transition-all mt-5'
          value={pacienteEdit.id ? 'Guardar Cambios' : 'Agregar Paciente'}
        />


      </form>
    </div>
  )
}

export default Formulario
