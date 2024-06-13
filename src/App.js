import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipos';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Juan Pablo Ojeda",
      puesto: "Capo",
      foto: "https://avatars.githubusercontent.com/u/94018210?v=4",
      equipo: "Programación"
    },
    {
      id: uuid(),
      nombre: "María García",
      puesto: "Desarrolladora",
      foto: "https://avatars.githubusercontent.com/u/94018211?v=4",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Carlos López",
      puesto: "Analista de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018212?v=4",
      equipo: "Data Science"
    },
    {
      id: uuid(),
      nombre: "Lucía Fernández",
      puesto: "Ingeniera DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018213?v=4",
      equipo: "Devops"
    },
    {
      id: uuid(),
      nombre: "Miguel Rodríguez",
      puesto: "Diseñador UX",
      foto: "https://avatars.githubusercontent.com/u/94018214?v=4",
      equipo: "UX y Diseño"
    },
    {
      id: uuid(),
      nombre: "Sofía Martínez",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018215?v=4",
      equipo: "Móvil"
    },
    {
      id: uuid(),
      nombre: "Jorge Díaz",
      puesto: "Gerente de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018216?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      id: uuid(),
      nombre: "Laura Pérez",
      puesto: "Desarrolladora",
      foto: "https://avatars.githubusercontent.com/u/94018217?v=4",
      equipo: "Programación"
    },
    {
      id: uuid(),
      nombre: "David Gómez",
      puesto: "Ingeniero de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018218?v=4",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Ana Sánchez",
      puesto: "Científica de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018219?v=4",
      equipo: "Data Science"
    },
    {
      id: uuid(),
      nombre: "Pablo Ruiz",
      puesto: "Especialista DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018220?v=4",
      equipo: "Devops"
    },
    {
      id: uuid(),
      nombre: "Marta Jiménez",
      puesto: "Diseñadora UX",
      foto: "https://avatars.githubusercontent.com/u/94018221?v=4",
      equipo: "UX y Diseño"
    },
    {
      id: uuid(),
      nombre: "Raúl Hernández",
      puesto: "Desarrollador Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018222?v=4",
      equipo: "Móvil"
    },
    {
      id: uuid(),
      nombre: "Elena Torres",
      puesto: "Directora de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018223?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      id: uuid(),
      nombre: "Alberto Ramírez",
      puesto: "Desarrollador",
      foto: "https://avatars.githubusercontent.com/u/94018224?v=4",
      equipo: "Programación"
    },
    {
      id: uuid(),
      nombre: "Patricia Navarro",
      puesto: "Ingeniera de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018225?v=4",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Sergio Castro",
      puesto: "Analista de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018226?v=4",
      equipo: "Data Science"
    },
    {
      id: uuid(),
      nombre: "Beatriz Morales",
      puesto: "Ingeniera DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018227?v=4",
      equipo: "Devops"
    },
    {
      id: uuid(),
      nombre: "Álvaro Vega",
      puesto: "Diseñador UX",
      foto: "https://avatars.githubusercontent.com/u/94018228?v=4",
      equipo: "UX y Diseño"
    },
    {
      id: uuid(),
      nombre: "Sandra Muñoz",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018229?v=4",
      equipo: "Móvil"
    },
    {
      id: uuid(),
      nombre: "Luis Rivas",
      puesto: "Desarrollador",
      foto: "https://avatars.githubusercontent.com/u/94018230?v=4",
      equipo: "Programación"
    },
    {
      id: uuid(),
      nombre: "Claudia Ortega",
      puesto: "Diseñadora UX",
      foto: "https://avatars.githubusercontent.com/u/94018231?v=4",
      equipo: "UX y Diseño"
    },
    {
      id: uuid(),
      nombre: "Fernando Castillo",
      puesto: "Ingeniero DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018232?v=4",
      equipo: "Devops"
    },
    {
      id: uuid(),
      nombre: "Sara Gil",
      puesto: "Científica de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018233?v=4",
      equipo: "Data Science"
    },
    {
      id: uuid(),
      nombre: "Pedro Romero",
      puesto: "Ingeniero de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018234?v=4",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Natalia Herrera",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018235?v=4",
      equipo: "Móvil"
    },
    {
      id: uuid(),
      nombre: "Tomás Suárez",
      puesto: "Gerente de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018236?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      id: uuid(),
      nombre: "Valeria Campos",
      puesto: "Desarrolladora",
      foto: "https://avatars.githubusercontent.com/u/94018237?v=4",
      equipo: "Programación"
    },
    {
      id: uuid(),
      nombre: "Hugo Méndez",
      puesto: "Diseñador UX",
      foto: "https://avatars.githubusercontent.com/u/94018238?v=4",
      equipo: "UX y Diseño"
    },
    {
      id: uuid(),
      nombre: "Andrea Morales",
      puesto: "Ingeniera DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018239?v=4",
      equipo: "Devops"
    },
    {
      id: uuid(),
      nombre: "Diego Vargas",
      puesto: "Analista de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018240?v=4",
      equipo: "Data Science"
    },
    {
      id: uuid(),
      nombre: "Mónica Delgado",
      puesto: "Ingeniera de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018241?v=4",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Rafael Luna",
      puesto: "Desarrollador Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018242?v=4",
      equipo: "Móvil"
    },
    {
      id: uuid(),
      nombre: "Carmen Blanco",
      puesto: "Directora de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018243?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      id: uuid(),
      nombre: "Samuel Ortiz",
      puesto: "Desarrollador",
      foto: "https://avatars.githubusercontent.com/u/94018244?v=4",
      equipo: "Programación"
    },
    {
      id: uuid(),
      nombre: "Isabel Méndez",
      puesto: "Diseñadora UX",
      foto: "https://avatars.githubusercontent.com/u/94018245?v=4",
      equipo: "UX y Diseño"
    },
    {
      id: uuid(),
      nombre: "Gonzalo García",
      puesto: "Ingeniero DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018246?v=4",
      equipo: "Devops"
    },
    {
      id: uuid(),
      nombre: "Rosa Alonso",
      puesto: "Científica de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018247?v=4",
      equipo: "Data Science"
    },
    {
      id: uuid(),
      nombre: "Esteban Vázquez",
      puesto: "Ingeniero de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018248?v=4",
      equipo: "Front End"
    },
    {
      id: uuid(),
      nombre: "Julia Herrera",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018249?v=4",
      equipo: "Móvil"
    }
  ]
  )

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //  condicion %% seMuestra //Se usa por si no quiero mostrar nada si no se cumple la condición

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    actualizarColaboradores()
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

    //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
        )
      }

      <Footer />
    </div>
  );
}

export default App;
