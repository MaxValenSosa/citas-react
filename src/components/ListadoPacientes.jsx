import Paciente from "./Paciente"




const ListadoPacientes = ({pacientes, setPacienteEdit, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

    
    {pacientes && pacientes.length ? (
      <>
    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2> 
    <p className="text-xl text-center mb-10 mt-5"> Administra tus <span className="text-cyan-700 font-bold">Pacientes y Citas</span> </p>

    {pacientes.map( paciente => (
      <Paciente
        key={paciente.id}
        paciente= {paciente}
        setPacienteEdit = {setPacienteEdit}
        eliminarPaciente = {eliminarPaciente}
    />
    ))}
    </>
):(
  <>
    <h2 className="font-black text-3xl text-center">Aún no hay pacientes</h2> 
    <p className="text-xl text-center mb-10 mt-5"> Comienza a agregar pacientes
    <span className="text-cyan-700 font-bold"> y aparecerán aquí</span> </p>

  </>

) }
      
      









    </div>
  )
}

export default ListadoPacientes
