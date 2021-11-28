
import React from 'react';
/*
Los nombres de las funciones que vamos a utilizar como componentes se escribe en mayúscula la primera letra, como 'Prueba'
Esta función contiene el componente carta (div) que vamos a mostrar, pero la explicación de esta irá luego de mostrar las otras funciones.
*/

function Prueba(props){
    return(
      <div className="card">
        <section className="card-body">
        <img className="card-img-top" src={props.imagenUrl} alt="Card image cap"/>
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.edad}</p>
        </section>
        </div>
   
    )
}

/*
Esta es la explicación(Leer a lo último):
Prueba trabaja con (props) como parámetros, y estás props son las que declaramos en el return de la función Lista.
Por tanto, cuando queremos poner el nombre de el estudiante mapeado, pondremos <h5>{props.nombre}</h5>.
Como vamos a crear una carta, creamos un div, con un imagen, un h5 y un parrafo, poniendo en cada una de ellas las propiedades que queramos.
Y como esta carta se crea luego de hacer un .map por el array ESTUDIANTES en la función <Lista>, habrá una carta por cada estudiante.
*/
// --------------------------------------------------------------------

/*
Declaramos un Array de objetos, cada uno con las propiedades: id, nombre, edad, imagenUrl.
*/

const ESTUDIANTES = [
    {
      id:1,  
      nombre:"Federico",
      edad:"27",
      imagenUrl:"https://cdn.pixabay.com/photo/2018/05/01/16/19/young-man-3366016_960_720.jpg"
    },
    {
      id:2,
      nombre:"Carlos",
      edad:"22",
      imagenUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Azr3yaHQLicVJ8sFNliszbJVE7fseYKn-w&usqp=CAU"
    },
    {
      id:3,
      nombre:"Romina",
      edad:"34",
      imagenUrl:"https://www.infobae.com/new-resizer/7rOClwZCUgkhDfC37EPfq2XiFNo=/1200x628/filters:format(jpg):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/01/28093602/yanet_chica_clima_bikini_instagram.jpg"
    },
    {
      id:4,
      nombre:"Carla",
      edad:"37",
      imagenUrl:"https://static1.abc.es/media/bienestar/2021/01/27/Laura_Chica_foto-kH4--1200x630@abc.jpg"
    },
    {
      id:5,
      nombre:"Paula",
      edad:"22",
      imagenUrl:"https://thumbs.dreamstime.com/b/retrato-al-aire-libre-de-una-chica-joven-bonita-a%C3%B1os-128479584.jpg"
    },
    
  ]

  /*
  La siguiente función es la que exportamos, e importamos luego en index.js.
  Imprimiremos el h1 y un div con lo que retorne la función <Lista> trabajando con el array={estudiantes}
  */
  export default function App(){
      return(
        <>
        <h1  class="title">Recordatorio de cumpleaños</h1>
          <div className="row m-auto" style={{width: '75vw'}}>
            <Lista array={ESTUDIANTES}/>
          </div>
        </>
      )
      
  };
  
  /*
  La función Lista hace un .map por el array ESTUDIANTES (por sos datos) y crea un objeto 'estudiante' con las propiedades nombre, imagenUrl, id, edad.
  A su vez, la funcion Lista, en su return devolverá el return de la función Prueba, trabajando con las propiedades aquí especificadas, ahora volvemos a la explicación que nos salteamos más arriba (linea 21)
  */
  function Lista(datos){
    return (
      <>
      {datos.array.map((estudiante)=>{
        const{nombre, imagenUrl, id, edad} = estudiante;
        return(
          <Prueba nombre={nombre} imagenUrl={imagenUrl} key={id} edad={edad}/>
        )
    })}
      </>
    )
  };


