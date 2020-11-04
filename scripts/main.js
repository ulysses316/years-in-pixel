const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let today = new Date();
let day = today.getDate();
let month = months[today.getMonth()-1];

elementMonth = document.querySelector("."+month);
focusDay =  elementMonth.children[day];
console.log(focusDay);

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
    }    
}


const chageFocusDay = ()=>{
    focusDay = event.target;
}

