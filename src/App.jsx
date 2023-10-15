import './estilos.css'


function App() {

  return (
    <>
      <div>

        <link rel="stylesheet" type="text/css" href="estilos.css" />
        <link rel="stylesheet" type="text/css" href="http//:fonts.googleapis.com/css?family=Comfortaa" />

        <body id='body'>
          <h2>   Lista de Tareas de Benjamin</h2>
          <form action="" >
            <input type="" className='formulario' />
          </form>
          <button class="boton">ADD</button>
          <h3 class="tarea_1">Task N</h3>
          <button class="boton_1"></button>
          <h3 class="tarea_2"> <strike>Completed Task N 1</strike> </h3>
          <label class="boton_2">
            <input type="checkbox" checked />
          </label>
          <h3 class="tarea_3">Task N 2</h3>
          <button class="boton_3"></button>
          <h3 class="tarea_4">Task K</h3>
          <button class="boton_4"></button>
          <h3 class="tarea_5"><strike>Completed Task N 2</strike></h3>
          <label class="boton_5">
            <input type="checkbox" checked />
          </label>
          <button type="button" class="papelera">
            <img src="papelera.png"
              width="15px"
              height="15px" />
          </button>
          <button type="button" class="papelera2">
            <img src="papelera.png"
              width="15px"
              height="15px" />
          </button>
          <button type="button" class="papelera3">
            <img src="papelera.png"
              width="15px"
              height="15px" />
          </button>
          <button type="button" class="papelera4">
            <img src="papelera.png"
              width="15px"
              height="15px" />
          </button>
          <button type="button" class="papelera5">
            <img src="papelera.png"
              width="15px"
              height="15px" />
          </button>

        </body>
      </div>

    </>
  )
}

export default App

