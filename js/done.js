const Done=(_=>{


// cache the dom
   const todoItemsEl=document.querySelector(".todo__items")




// render
const render=_=>{

}
const listeners=_=>{
todoItemsEl.addEventListener("click",(e)=>{
if(e.target.classList.contains("todo__item")){
   if(e.target.classList.contains("todo__item--done")){
e.target.classList.remove("todo__item--done")
e.target.firstElementChild.classList.remove("todo__para--done")
   }
   else{

     e.target.classList.add("todo__item--done")
     e.target.firstElementChild.classList.add("todo__para--done")
    
}


}else if(e.target.classList.contains("todo__para")){
    

if(e.target.classList.contains("todo__para--done")){
e.target.classList.remove("todo__para--done")
e.target.parentNode.classList.remove("todo__item--done")
}
else{
    e.target.classList.add("todo__para--done")
    e.target.parentNode.classList.add("todo__item--done")
}
}
})
}

const init=_=>{
    console.log("init")
    listeners()
}
return {
    init
}
})();

export default Done