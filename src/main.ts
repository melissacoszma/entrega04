import "./style.css";

    // borrador siguiente y anterior


    let numMarcador = document.getElementsByClassName ("marcadorPrincipal")
    const botonSigue = document.getElementsByClassName("botonSigue")
    const botonAtras = document.getElementsByClassName("botonAtras")

    function siguiente(numMarcador: number): number  {
         return numMarcador +1;
    }
    function anterior(numMarcador: number): number  {
        return numMarcador -1;
   }

    botonSigue .addEventListener('click', siguiente)
    botonAtras .addEventListener('click', anterior)

    // if (botonSigue != null || botonSigue != undefined){
    //     siguiente;
    // } 


// borrador reset

   const botonReset = document.getElementsByClassName("botonReset")
   
   function reset(){
    numMarcador = 0;
   }

   botonReset .addEventListener('click', reset)