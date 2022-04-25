let form =  document.querySelector("form");

let  userInfo={};

function handle(event){
    
    event.preventDefault();
let data=event.target.elements;
userInfo.name=data.name.value;
userInfo.email=data.A.value;
userInfo.movie= data.gender.value;
userInfo.color =data.color.value;
userInfo.range = data.range.value;
userInfo.fiction = data.range.value;
userInfo.drone = data.non-fiction.value;
userInfo.adventure =data.adventure.value;
userInfo.terms = data.terms.value;

displayUi(userInfo)
}

function displayUi(data){
console.log(data)
}






form.addEventListener("submit",handle)