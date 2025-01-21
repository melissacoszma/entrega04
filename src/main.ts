import "./style.css";

    // borrador siguiente y anterior


        const contadorElement = document.getElementById("marcadorPrincipal") as HTMLDivElement;
        const botonSigue = document.getElementById("botonSigue") as HTMLButtonElement;
        const botonAtras = document.getElementById("botonAtras") as HTMLButtonElement;
        const botonReset = document.getElementById("botonReset") as HTMLButtonElement;
        // const botonOk = document.getElementById("botonOk") as HTMLButtonElement;
        // const inputNumber = document.getElementById("marcadorSecundario") as HTMLInputElement;

        let contador: number = 0;
       

        const actualizarContador = () : void => {
            contadorElement.textContent = contador.toString();
        };
        
          // Listener para el botón de sumar.
          
        botonSigue.addEventListener("click", () => {
            contador++; 
            actualizarContador();
        });
        
          // Listener para el botón de restar.
          
        botonAtras.addEventListener("click", () => {
            if (contador > 0) {
            contador--; 
            }
            actualizarContador();
        });

        botonReset.addEventListener("click", () => {
            contador = 0;
            actualizarContador();
        });

/*
        botonOk.addEventListener("click", () => {
            const valor = parseInt(inputNumber.value); // Obtiene el valor del input y lo convierte a número
            if (!isNaN(valor)) {  // Verifica que el valor sea un número válido
            contador = valor;
            }  
        
            actualizarContador();
        }); */