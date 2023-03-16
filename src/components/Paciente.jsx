

const Paciente = ({paciente, setPacienteEdit, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar a este paciente?')
    
    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:  <span className="font-normal normal-case">{nombre}</span></p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:  <span className="font-normal normal-case">{propietario}</span></p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email:  <span className="font-normal normal-case">{email}</span></p>

      <p className="font-bold mb-3 text-gray-700 uppercase">fecha alta:  <span className="font-normal normal-case">{fecha}</span></p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Sinomas:  <span className="font-normal normal-case">{sintomas}</span></p>

    <div className='flex justify-between mt-10'>
      <button 
        className='py-2 px-8 bg-cyan-700 hover:bg-cyan-800 rounded-lg text-white font-bold uppercase'
        type='buttom'
        onClick={() => setPacienteEdit(paciente)}
      >Editar</button>

      <button 
        className='py-2 px-8 bg-red-700 hover:bg-red-800 rounded-lg text-white font-bold uppercase'
        type='buttom'
        onClick={handleEliminar}
      >Eliminar</button>

    </div>

  </div>
  )
}

export default Paciente
