import "./style.css";

    //siguiente, anterior y reset


        const contadorElement = document.getElementById("marcadorPrincipal") as HTMLDivElement;
        const botonSigue = document.getElementById("botonSigue") as HTMLButtonElement;
        const botonAtras = document.getElementById("botonAtras") as HTMLButtonElement;
        const botonReset = document.getElementById("botonReset") as HTMLButtonElement;
        

        let contador: number = 0;
       
            
           //funcion que actualiza y muestra el contador declarado

        const actualizarContador = () : void => {
            contadorElement.textContent = contador.toString().padStart(2, '0'); // primer parfametro indica numero minimo de digitos, segundo indica con qué rellenar a la izquierda en caso que haya suficientes digitos
        };
        
          // Listener para el botón con incrementar y ejecutar actualizador.
          
        botonSigue.addEventListener("click", () => {
            contador++; 
            actualizarContador();
        });
        
          // Listener para el botón con disminuir y ejecutar actualizador.
          
        botonAtras.addEventListener("click", () => {
            if (contador > 0) {
            contador--; 
            }
            actualizarContador();
        });

         //Listener para boton a 0 y actualizar

        botonReset.addEventListener("click", () => {
            contador = 0;
            actualizarContador();
        });

// SELECCIONAR TURNO

        const inputNumber = document.getElementById("marcadorSecundario") as HTMLInputElement;
        const botonOk = document.getElementById("botonOk") as HTMLButtonElement;
        
          //Actualizador secundario que escucha el input

        const añadirContador = () : void => {
            contadorElement.textContent = inputNumber.value.padStart(2, '0');
        };

        botonOk.addEventListener("click", () => {
            //cuando haga click quiero que el contador se convierta en el input number solo si este es mayor o igual a 0
            if (inputNumber.value && Number(inputNumber.value) >= 0) {
                // Convierte el valor del input a número y lo asignamos al contador
                contador = Number(inputNumber.value); // Asigna el valor convertido al contador
                añadirContador();
            }
        });





