
String.prototype.replaceAt=function(index, character) 
{ return this.substring(0, index) + character + this.substring(index+character.length); }

//USO; palabraConGuiones = palabraConGuiones.replaceAt (i*2, letra);


const palabras = ['casa', 'javascript', 'computadora', 'bootcamp', 'youtube','prueba']

const palabra = palabras [Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace (/./g, "_ ");
let cuantosFallos=1
document.querySelector ('#output').innerHTML = palabraConGuiones
document.querySelector('#calcular').addEventListener('click', ()=>
{
    const letra = document.querySelector('#letra').value;
    let fallaste = true
    
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt (i*2, letra);
            fallaste = false
        }
    }

    if(fallaste){
        var fallos = cuantosFallos++;

        if (fallos > 5){
            alert('demasiados intentos, vuelve a cargar la página')
        }
    }

    document.querySelector ('#output').innerHTML = palabraConGuiones;
});

