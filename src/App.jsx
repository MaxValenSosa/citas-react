import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import { useState, useEffect } from 'react'


function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes'))?? [])
  const [pacienteEdit, setPacienteEdit] = useState({})
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }


  return (
    <div className='container mx-auto'>
      
      
      <Header/>
      
      <div className='mt-12 md:flex'>
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        pacienteEdit={pacienteEdit}
        setPacienteEdit = {setPacienteEdit}
        />
        <ListadoPacientes
        pacientes = {pacientes}
        setPacienteEdit = {setPacienteEdit}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
