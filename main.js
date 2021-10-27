const user='felipe2220'
const passw='lola'

const usuario= document.getElementById('usuario') //Obtiene la etiqueta html y la asigna a una viariable.
const contrasena= document.getElementById('contrasena')
const ingreso= document.getElementById('ingreso')

ingreso.addEventListener('click',()=>{ //metodo para habilitar un escuchador en el botón recibe dos cosas la funcion y el evento 

    if (user===usuario.value && passw===contrasena.value){
    alert("bienvenidos al sistema")
    }else{ alert('Tu usuario o contraseña no es valida')}
})

// [if (username===usuario && password===clave){
//     // console.log('Bienvenido al infierno querido.')
//     respuesta= 'Bienvenidos al infierno'
//   }else {
//   respuesta='No se aceptan pendejos'
//     // console.log('No se acepta pendejos aquí')}
//   }
//   return respuesta]