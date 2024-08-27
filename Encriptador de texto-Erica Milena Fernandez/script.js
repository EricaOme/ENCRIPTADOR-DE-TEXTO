function cifrarMensaje() {
    const textoEntrada = document.getElementById("textoEntrada").value;
    let resultado = "";
    for (let i = 0; i < textoEntrada.length; i++) {
        switch (textoEntrada[i]) {
            case 'e':
                resultado += "enter";
                break;
            case 'i':
                resultado += "imes";
                break;
            case 'a':
                resultado += "ai";
                break;
            case 'o':
                resultado += "ober";
                break;
            case 'u':
                resultado += "ufat";
                break;
            default:
                resultado += textoEntrada[i];
        }
    }
    document.getElementById("textoSalida").value = resultado;
}

function descifrarMensaje() {
    const textoEntrada = document.getElementById("textoEntrada").value;
    let resultado = textoEntrada;
    const reemplazos = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    for (const [clave, valor] of Object.entries(reemplazos)) {
        resultado = resultado.split(clave).join(valor);
    }

    document.getElementById("textoSalida").value = resultado;
}

function copiarMensaje() {
    const textoSalida = document.getElementById("textoSalida");
    textoSalida.select();
    navigator.clipboard.writeText(textoSalida.value)
        .then(() => {
            alert("Mensaje copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el mensaje: ", err);
        });
}
