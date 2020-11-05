const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let today = new Date();
let day = today.getDate();
let month = months[today.getMonth()-1];
let data = [
    [0,1,2,3,4,5,1,2,3,4],
    [0,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2],
    [0,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],
    [2,1,2,3,4,5,1,2,3,3,4,5,1,2,3,4],
    [0,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],
    [4,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4],
    [0,1,2,3,4,5,3,4,5],
    [0,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,4,5],
    [0,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4],
    [3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],
    [0,1,2,3,4,5,1,2,3,4,5,1,2,3,4],
    [0,1,2,3,4,5,1,2,3,4,5,5,1,2,3,4,5,1,2,3,4,5]
]

elementMonth = document.querySelector("."+month);
focusDay =  elementMonth.children[day];

const emotions = (emotion, focusElement=focusDay)=>{ 
    switch (emotion) {
        case 1:
            focusElement.style.background = "blue";
            focusElement.dataset.mood = 1;
            break;
        case 2:
            focusElement.style.background = "teal";
            focusElement.dataset.mood = 2;
            break;
        case 3:
            focusElement.style.background = "yellow";
            focusElement.dataset.mood = 3;
            break;
        case 4:
            focusElement.style.background = "orange";
            focusElement.dataset.mood = 4;
            break;
        case 5:
            focusElement.style.background = "red";
            focusElement.dataset.mood = 5;
            break;
        default:
            focusElement.style.background = "white";
            focusElement.dataset.mood = 0; 
    }    
}


const chageFocusDay = ()=>{
    focusDay = event.target;
}

const exportData = ()=>{
    for(month in months){
        elementMonth = document.querySelector("."+months[month]);
        for(let i = 0; i < elementMonth.children.length; i++){
            data[month][i] = parseInt(elementMonth.children[i].dataset.mood)    ;
        }
    }
}

const setData = ()=>{
    for(month in months){
        elementMonth = document.querySelector("."+months[month]);
        for(let i = 0; i < elementMonth.children.length; i++){
            // console.log(data[month][i])
            emotions(data[month][i],elementMonth.children[i])
        }
    }
}
