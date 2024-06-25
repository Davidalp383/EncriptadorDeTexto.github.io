let mensajeInput = document.querySelector(".superior__input");
let botonEncriptar = document.querySelector(".botones__encriptar")
let botonDesencriptar = document.querySelector(".botonoes__desencriptar")
let imagen = document.querySelector('.lateral__imagen')
let textos = document.querySelectorAll('.texto');
let titulo = document.querySelector('.lateral__titulo');
let respuesta = document.querySelector('.parrafo--respuesta')
let botonCopiar = document.querySelector('.boton_copiar')
let parrafo = document.querySelector('.lateral__parrafo')
let recargar = document.querySelector('.recargar')
let mensajeCopiado = document.getElementById('mensajeCopiado');

let resultadoFinal;

botonEncriptar.addEventListener('click', () => {
    event.preventDefault();
    let mensajeValor = mensajeInput.value;
    let tamaño = mensajeValor.length
    let mensajeEncriptado = ''

    if (mensajeValor === ''){
        titulo.innerHTML = 'Ningun mensaje fue encontrado'
        respuesta.innerHTML = mensajeEncriptado;

        imagen.classList.remove('ocultar--imagen')
        botonCopiar.classList.add('boton_copiar-agregar')

        imagen.src = '/EncriptadorDeTexto/img/404-page-not-found-1-77.svg'

        parrafo.innerHTML = 'Ingresa el texto que desas encriptar o desencriptar'


    } else if (mensajeValor != ''){
        for (let i = 0; i < tamaño; i++){
            switch (mensajeValor[i]) {
                case 'e':
                    mensajeEncriptado += 'enter';
                    break;
                case 'i':
                    mensajeEncriptado += 'imes';
                    break;
                case 'a':
                    mensajeEncriptado += 'ai';
                    break;
                case 'o':
                    mensajeEncriptado += 'ober';
                    break;
                case 'u':
                    mensajeEncriptado += 'ufat';
                    break;
                default:
                    mensajeEncriptado += mensajeValor[i];
            }
        }
    
        imagen.classList.add('ocultar--imagen')
        
        textos.forEach(texto => {
            texto.textContent = '';
        });
    
        respuesta.innerHTML = mensajeEncriptado;
        botonCopiar.classList.remove('boton_copiar-agregar')

        copiarTexto(mensajeEncriptado);
    }

})

botonDesencriptar.addEventListener('click', () => {
    event.preventDefault();

    let mensajeEncriptado = mensajeInput.value;
    let mensajeDesencriptado = mensajeEncriptado;

    if (mensajeDesencriptado === ''){
        titulo.innerHTML = 'Ningun mensaje fue encontrado'
        respuesta.innerHTML = mensajeEncriptado;

        imagen.classList.remove('ocultar--imagen')
        botonCopiar.classList.add('boton_copiar-agregar')

        imagen.src = '/EncriptadorDeTexto/img/404-page-not-found-1-77.svg'

        parrafo.innerHTML = 'Ingresa el texto que desas encriptar o desencriptar'


    } else if (mensajeDesencriptado != ''){

    mensajeDesencriptado = mensajeDesencriptado.replace(/enter/g, 'e');
    mensajeDesencriptado = mensajeDesencriptado.replace(/imes/g, 'i');
    mensajeDesencriptado = mensajeDesencriptado.replace(/ai/g, 'a');
    mensajeDesencriptado = mensajeDesencriptado.replace(/ober/g, 'o');
    mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/g, 'u');

    imagen.classList.add('ocultar--imagen')
    
    textos.forEach(texto => {
        texto.textContent = '';
    });

    respuesta.innerHTML = mensajeDesencriptado;

    botonCopiar.classList.remove('boton_copiar-agregar')

    copiarTexto(mensajeDesencriptado);
    }
})

function copiarTexto(textoACopiar) {
    botonCopiar.addEventListener('click', () => {
        event.preventDefault();

        let textarea = document.createElement('textarea');
        textarea.value = textoACopiar;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        botonCopiar.innerHTML = '¡Copiado!';

        setTimeout(() => {
            botonCopiar.innerHTML = 'Copiar';
        }, 3000);
    });
}

recargar.addEventListener('event', () => {
    window.location.reload();
})