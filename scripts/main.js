const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let today = new Date();
let day = today.getDate();
let month = months[today.getMonth()-1];

const focusToday = (day, month)=>{
    elementMonth = document.querySelector("."+month);
    elementDay = elementMonth.children[day];
    elementDay.style.background = "blue"
}

