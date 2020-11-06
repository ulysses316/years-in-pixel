// ============================================= Variables =====================================================
/*
Aqui establecemos las variables globales que usaremos dentro de los eventos y
buscamos la fecha actual para que la pagina te coloque automaticamente en el dia correspondiente
*/
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let today = new Date();
let day = today.getDate();
let month = months[today.getMonth()];
let year = today.getFullYear();
/*
Estas variables estan asociadas al dia y mes que correspondan.
*/
let elementMonth = document.querySelector("."+month);
let focusDay =  elementMonth.children[day];

let data;

/*
    Este se encarga de determinar si es un año bisiesto y agregar un dia a febrero si corresponde
*/
let isLeaf = new Date(year,1,29).getMonth() == 1;
if (isLeaf){
    let a = document.createElement("a");
    a.setAttribute("onclick", "chageFocusDay()");
    a.setAttribute("data-mood", "0");
    document.querySelector(".Feb").append(a);
}
// ============================================= Variables =====================================================
// ============================================= Bloque 1 - Inicio =============================================
/*
    Emotions es el evento encargado de cambiar el color de la casilla y del dataset del HTML 
    y con la funcion addDayEmortionArray()
    cambiamos el valor en el arreglo.

    emotions() parametros:
        emotion: int: 1-5, corresponde al color de la emocion.
        focusElement: Elemento de nuestro HTML al cual hay que cambiarle el color
*/
const emotions = (emotion, focusElement=focusDay)=>{ 
    switch (emotion) {
        case 1:
            focusElement.style.background = "blue";
            focusElement.dataset.mood = 1;
            addDayEmotionArray(1);
            break;
        case 2:
            focusElement.style.background = "teal";
            focusElement.dataset.mood = 2;
            addDayEmotionArray(2);
            break;
        case 3:
            focusElement.style.background = "yellow";
            focusElement.dataset.mood = 3;
            addDayEmotionArray(3);
            break;
        case 4:
            focusElement.style.background = "orange";
            focusElement.dataset.mood = 4;
            addDayEmotionArray(4);
            break;
        case 5:
            focusElement.style.background = "red";
            focusElement.dataset.mood = 5;
            addDayEmotionArray(5);
            break;
        default:
            focusElement.style.background = "white";
            focusElement.dataset.mood = 0; 
            addDayEmotionArray(0);
    }   
}

/*
    Esta funcion asigna en el lugar correspondiente del arreglo su valor al momento de que cambiamos un valor
    funciona en conjunto con el evento emotions()
    este recive como valor el numero de color que se le corresponde
*/

const addDayEmotionArray = (value)=>{
    let monthArr = focusDay.parentElement.children;
    let indexDay = false;    
    let month = focusDay.parentElement.className;
    let indexMonth = months.indexOf(month);
    for (let i = 0; i < monthArr.length; i++ ){
        if(monthArr[i] === focusDay){
            indexDay = i;
            i = monthArr.length;
        }
    }
    data[indexMonth][indexDay] = value;
    chartRender();
}

// Este evento unicamente cambia el focusDay por el dia al cual le demos click en la tabla
const chageFocusDay = ()=>{
    focusDay = event.target;
}

// ============================================= Bloque 1 - Fin ================================================

/*
    Este evento se encargara de leer todos los dias del calendario 
    y leer sus dataset(el cual cambiamos con la funcion emotions)
    y cambiar los valores dentro de nuestro arreglo data
*/
const exportData = ()=>{
    for(month in months){
        elementMonth = document.querySelector("."+months[month]);
        for(let i = 0; i < elementMonth.children.length; i++){
            // data[month][i] = parseInt(elementMonth.children[i].dataset.mood);
            elementMonth.children[i].style.background = "white"
        }
    }
}

/*
    Este evento se encargara de leer todos los datos en nuestro arreglo data
    y cambiar los dataset y asignar su color en el calendario con la funcion emotions
    cada vez que se ejecute este evento tambien ejecutara el evento que carga nuestra grafica
*/


// ======================================== Bloque 2 - Inicio ==================================================

const createData = ()=>{
    if(typeof(data) !== "object"){
    // Creacion de nuestro arreglo con la informacion
        data = new Array(12);
        for(let i = 0; i< months.length; i++){
            elementMonth = document.querySelector("."+months[i]);
            cantidad = elementMonth.childElementCount;
            data[i] = new Array(cantidad)
            data[i].fill(0)
        }
    }
    else{
        importData();
    }
}

const cleanCalendar = ()=>{
    for(month in months){
        elementMonth = document.querySelector("."+months[month]);
        for(let i = 0; i < elementMonth.children.length; i++){
            // console.log(data[month][i])
            elementMonth.children[i].dataset.mood = 0;
            elementMonth.children[i].style.background = "white"
        }
    }
}


const clearData = ()=>{
    data = false;
    createData();
    cleanCalendar();
    chartRender();
}

// ============================================= Bloque 2 - Fin ================================================


// /*Main*/
createData();
// /*Main*/