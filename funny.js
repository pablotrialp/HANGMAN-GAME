let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté
let btn1 = id('agregarPalabra');
let texto = id('texto');
let btnAgregar = id('agregarPalabraPrincip');
let bodi = id('bodi');
let audioBack = id('audioBack');
let click = id('click');
let sumador = 0;
let cancelBot = id('cancelar');
let btnMiedo = id('btnMiedo');
let btnFruta = id('btnFruta');
let btnMispalabra = id('btnMispalabra');
let caja_boton = id('caja_boton');




let miedo = [
    'CHILE',     /* 0 */
    'PERU',     /* 1 */
    'ECUADOR',    /* 2 */
    'SUIZA',       /* 3 */
    'BOLIVIA',     /* 4 */
    'BRASIL',       /* 5 */
    'URUGUAY',   /* 6 */
    'COLOMBIA',     /* 7 */
    'MEXICO',  /* 8 */
    'CANADA',     /* 9 */


];

let fruta = [

    'BANANA',
    'MANZANA',
    'UVA',
    'NARANJA',
    'FRUTILLA',

];



let mispalabra = []

function miedos() {
    iniciar(miedo);
    bodi.style.background = "url(./img/fondofunny.jpg) no-repeat center";
    bodi.style.backgroundSize = "cover";
    btnAgregar.style.display = "none";
    btnMiedo.style.display = "none"
    btnFruta.style.display = "none"
    btnMispalabra.style.display = "none"
    btn1.style.display = "none";
    texto.style.display = "none";
    cancelBot.style.display = "inline";
    caja_boton.style.display ="none";

}

function frutas() {
    iniciar(fruta);
    btnAgregar.style.display = "none";
    bodi.style.background = "url(./img/fondofunny.jpg) no-repeat center";
    bodi.style.backgroundSize = "cover";
    btnMiedo.style.display = "none"
    btnFruta.style.display = "none"
    btnMispalabra.style.display = "none"
    btn1.style.display = "none";
    texto.style.display = "none";
    cancelBot.style.display = "inline";
    caja_boton.style.display ="none";



}

function mispalabras() {
    iniciar(mispalabra);
    btnAgregar.style.display = "none";
    bodi.style.background = "url(./img/fondofunny.jpg) no-repeat center";
    bodi.style.backgroundSize = "cover";
    btnMiedo.style.display = "none"
    btnFruta.style.display = "none"
    btnMispalabra.style.display = "none"
    btn1.style.display = "none";
    texto.style.display = "none";
    cancelBot.style.display = "inline";
    caja_boton.style.display ="none";



}

//prueba de remover clases
const resetClassBtn = () => {
    const btn_letras = document.querySelectorAll("#letras button");
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].classList.remove('btnUsed');
        btn_letras[i].classList.remove('btnUsedHit');
    }
}

// fx para que cuando se haga click reproduzca musica de fondo
function audio() {

    audioBack.play();

}

document.addEventListener('click', audio);


//fx para que cuando se haga click en el teclado haga el beep
function clickear() {

    click.play();

}





//esta funcion se usa para cencelar y volver a jugar con palabras nuevas

function cancel() {

    location.reload();


}

//esta funcion es para visualizar el texto a agregar y el boton btn1

function agregarPalabraPrincip() {
    btn1.style.display = "inline";
    texto.style.display = "inline";
    btnAgregar.style.display = "none";
    btnMiedo.style.display = "none"
    btnFruta.style.display = "none"
    btnMispalabra.style.display = "none"
    caja_boton.style.display ="none";



}







// funcion para agregar palabras

function agregarPalabra() {

    let dato = document.getElementById('texto').value.toUpperCase();
    if (/^[A-Z]{3,8}$/g.test(dato)) {
        texto.value = "";
        mispalabra.push(dato);
        swal("Perfecto", "tu palabra se agrego correctamente! ", "success");
        btnMiedo.style.display = "inline"
        btnFruta.style.display = "inline"
        btnMispalabra.style.display = "inline"
        texto.style.display = "none";
        btn1.style.display = "none";
        caja_boton.style.display ="inline";

    } else {
        texto.value = "";
        swal("ERROR", "Ingrese un min. de 3 letras y un max. 8 letras", "success");

    }




}




const imagen = id('imagen');
const btn_letras = document.querySelectorAll("#letras button");
const cartel = id('cartel');

/* click en iniciar juego */


function iniciar(opcion) {
    cartel.src = 'img/cartel0.png';
    imagen.src = 'img/im0.png';
    cant_errores = 0;
    cant_aciertos = 0;




    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = '';

    const cant_palabras = opcion.length;
    const valor_al_azar = obtener_random(0, cant_palabras);

    palabrita = opcion[valor_al_azar];
    console.log(palabrita);
    const cant_letras = palabrita.length;

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = false;
        btn_letras[i].style.visibility = "visible";
    }

    for (let i = 0; i < cant_letras; i++) {
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }

}

/* click de adivinar letra */
for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click', click_letras);
}
//click del sonido
for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click', clickear);
}

function click_letras(event) {
    const spans = document.querySelectorAll('#palabra_a_adivinar span');
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;


    const letra = button.innerHTML.toUpperCase();
    const palabra = palabrita.toUpperCase(); // .toUpperCase( ) .toLowerCase()

    let acerto = false;
    for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
            button.classList.add('btnUsedHit');
            sumador += 10;
            id('score').innerHTML = "PUNTAJE: " + sumador;

        }
    }

    if (acerto == false) {
        cant_errores++;
        const source = `img/im${cant_errores}.png`;
        imagen.src = source;
        const buscar = `img/cartel${cant_errores}.png`;
        cartel.src = buscar;
        button.classList.add('btnUsed');

    }

    if (cant_errores == 7) {
        swal({
            title: "Perdiste, la palabra era " + palabrita,
            text: "Desea volver al menú principal",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Volver a la pag principal", {
                        icon: "success",
                    });
                    location.reload();

                } else {


                    swal("Seguir jugando");

                }
            });

        sumador = 0;
        id('score').innerHTML = "PUNTAJE: " + sumador;
        game_over();
    } else if (cant_aciertos == palabrita.length) {
        swal("Ganaste!", "continua sumando puntos! ", "success");

        game_over();
    }
    console.log("la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto);
}


/* fin del juego */
function game_over() {

    for (let i = 0; i < btn_letras.length; i++) {

        btn_letras[i].style.visibility = "hidden";
    }


    btn1.style.display = "none";
    texto.style.display = "none";
    btnAgregar.style.display = "inline";
    cancelBot.style.display = "none";
    btnMiedo.style.display = "inline"
    btnFruta.style.display = "inline"
    btnMispalabra.style.display = "none"
    caja_boton.style.display ="inline";

    resetClassBtn();





}


game_over();


