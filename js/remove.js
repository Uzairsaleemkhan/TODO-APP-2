const Remove=(_=>{

// data
const todoItemsEl=document.querySelector(".todo__items")

// render
const listeners=_=>{
todoItemsEl.addEventListener("click",(e)=>{
if(e.target.classList.contains("todo__icon")){
    e.target.parentNode.remove()
}
})
}

const init=_=>{
    console.log("remove")
    listeners()
}

return {
    init

}
})();
export default Remove;