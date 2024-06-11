import { useState } from 'react';
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
      nombre: "Juan Pablo Ojeda",
      puesto: "Capo",
      foto: "https://avatars.githubusercontent.com/u/94018210?v=4",
      equipo: "Programación"
    },
    {
      nombre: "María García",
      puesto: "Desarrolladora",
      foto: "https://avatars.githubusercontent.com/u/94018211?v=4",
      equipo: "Front End"
    },
    {
      nombre: "Carlos López",
      puesto: "Analista de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018212?v=4",
      equipo: "Data Science"
    },
    {
      nombre: "Lucía Fernández",
      puesto: "Ingeniera DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018213?v=4",
      equipo: "Devops"
    },
    {
      nombre: "Miguel Rodríguez",
      puesto: "Diseñador UX",
      foto: "https://avatars.githubusercontent.com/u/94018214?v=4",
      equipo: "UX y Diseño"
    },
    {
      nombre: "Sofía Martínez",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018215?v=4",
      equipo: "Móvil"
    },
    {
      nombre: "Jorge Díaz",
      puesto: "Gerente de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018216?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      nombre: "Laura Pérez",
      puesto: "Desarrolladora",
      foto: "https://avatars.githubusercontent.com/u/94018217?v=4",
      equipo: "Programación"
    },
    {
      nombre: "David Gómez",
      puesto: "Ingeniero de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018218?v=4",
      equipo: "Front End"
    },
    {
      nombre: "Ana Sánchez",
      puesto: "Científica de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018219?v=4",
      equipo: "Data Science"
    },
    {
      nombre: "Pablo Ruiz",
      puesto: "Especialista DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018220?v=4",
      equipo: "Devops"
    },
    {
      nombre: "Marta Jiménez",
      puesto: "Diseñadora UX",
      foto: "https://avatars.githubusercontent.com/u/94018221?v=4",
      equipo: "UX y Diseño"
    },
    {
      nombre: "Raúl Hernández",
      puesto: "Desarrollador Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018222?v=4",
      equipo: "Móvil"
    },
    {
      nombre: "Elena Torres",
      puesto: "Directora de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018223?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      nombre: "Alberto Ramírez",
      puesto: "Desarrollador",
      foto: "https://avatars.githubusercontent.com/u/94018224?v=4",
      equipo: "Programación"
    },
    {
      nombre: "Patricia Navarro",
      puesto: "Ingeniera de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018225?v=4",
      equipo: "Front End"
    },
    {
      nombre: "Sergio Castro",
      puesto: "Analista de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018226?v=4",
      equipo: "Data Science"
    },
    {
      nombre: "Beatriz Morales",
      puesto: "Ingeniera DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018227?v=4",
      equipo: "Devops"
    },
    {
      nombre: "Álvaro Vega",
      puesto: "Diseñador UX",
      foto: "https://avatars.githubusercontent.com/u/94018228?v=4",
      equipo: "UX y Diseño"
    },
    {
      nombre: "Sandra Muñoz",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018229?v=4",
      equipo: "Móvil"
    },
    {
      nombre: "Luis Rivas",
      puesto: "Desarrollador",
      foto: "https://avatars.githubusercontent.com/u/94018230?v=4",
      equipo: "Programación"
    },
    {
      nombre: "Claudia Ortega",
      puesto: "Diseñadora UX",
      foto: "https://avatars.githubusercontent.com/u/94018231?v=4",
      equipo: "UX y Diseño"
    },
    {
      nombre: "Fernando Castillo",
      puesto: "Ingeniero DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018232?v=4",
      equipo: "Devops"
    },
    {
      nombre: "Sara Gil",
      puesto: "Científica de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018233?v=4",
      equipo: "Data Science"
    },
    {
      nombre: "Pedro Romero",
      puesto: "Ingeniero de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018234?v=4",
      equipo: "Front End"
    },
    {
      nombre: "Natalia Herrera",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018235?v=4",
      equipo: "Móvil"
    },
    {
      nombre: "Tomás Suárez",
      puesto: "Gerente de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018236?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      nombre: "Valeria Campos",
      puesto: "Desarrolladora",
      foto: "https://avatars.githubusercontent.com/u/94018237?v=4",
      equipo: "Programación"
    },
    {
      nombre: "Hugo Méndez",
      puesto: "Diseñador UX",
      foto: "https://avatars.githubusercontent.com/u/94018238?v=4",
      equipo: "UX y Diseño"
    },
    {
      nombre: "Andrea Morales",
      puesto: "Ingeniera DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018239?v=4",
      equipo: "Devops"
    },
    {
      nombre: "Diego Vargas",
      puesto: "Analista de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018240?v=4",
      equipo: "Data Science"
    },
    {
      nombre: "Mónica Delgado",
      puesto: "Ingeniera de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018241?v=4",
      equipo: "Front End"
    },
    {
      nombre: "Rafael Luna",
      puesto: "Desarrollador Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018242?v=4",
      equipo: "Móvil"
    },
    {
      nombre: "Carmen Blanco",
      puesto: "Directora de Innovación",
      foto: "https://avatars.githubusercontent.com/u/94018243?v=4",
      equipo: "Innovación y Gestión"
    },
    {
      nombre: "Samuel Ortiz",
      puesto: "Desarrollador",
      foto: "https://avatars.githubusercontent.com/u/94018244?v=4",
      equipo: "Programación"
    },
    {
      nombre: "Isabel Méndez",
      puesto: "Diseñadora UX",
      foto: "https://avatars.githubusercontent.com/u/94018245?v=4",
      equipo: "UX y Diseño"
    },
    {
      nombre: "Gonzalo García",
      puesto: "Ingeniero DevOps",
      foto: "https://avatars.githubusercontent.com/u/94018246?v=4",
      equipo: "Devops"
    },
    {
      nombre: "Rosa Alonso",
      puesto: "Científica de Datos",
      foto: "https://avatars.githubusercontent.com/u/94018247?v=4",
      equipo: "Data Science"
    },
    {
      nombre: "Esteban Vázquez",
      puesto: "Ingeniero de Front End",
      foto: "https://avatars.githubusercontent.com/u/94018248?v=4",
      equipo: "Front End"
    },
    {
      nombre: "Julia Herrera",
      puesto: "Desarrolladora Móvil",
      foto: "https://avatars.githubusercontent.com/u/94018249?v=4",
      equipo: "Móvil"
    }
  ]
  )

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

  //Lista de equipos
  const equipos = [
    {
      titulo: 'Programación',
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: 'Front End',
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: 'Data Science',
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: 'Devops',
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: 'UX y Diseño',
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: 'Móvil',
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: 'Innovación y Gestión',
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
        )
      }

      <Footer />
    </div>
  );
}

export default App;
