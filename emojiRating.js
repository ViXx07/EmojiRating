const inputs = document.querySelectorAll('#emoji input');
const updateValue = e => document.querySelector('#resultado').innerHTML
= e.target.value;
inputs.forEach(el => el.addEventListener('click', e=> updateValue(e)));

var enojados = 0;
var neutrales = 0;
var felices = 0;

function resultado() {
    var resultado = document.querySelector('input[name="emoji"]:checked').value;
    switch (resultado) {
        case 'enojado':
            enojados += 1;
            document.getElementById("enojados").innerHTML = enojados;
            break;
        case 'neutral':
            neutrales += 1;
            document.getElementById("neutrales").innerHTML = neutrales;
            break;
        case 'feliz':
            felices += 1;
            document.getElementById("felices").innerHTML = felices;
            break;    
    
    default: 0;
    }
};
