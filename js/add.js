const Add=(_=>{
    // data

    // cache the dom
    const inputEl=document.querySelector(".todo__input")
    const addEl=document.querySelector(".todo__add")
    const todoItemsEl=document.querySelector(".todo__items")
    // CREATE ELEMENT FUNCTION
const createElem=tag=>{
    return document.createElement(tag)
}
    // render
    const render=_=>{
        const li =createElem("li")
        li.classList.add("todo__item")
    const p=createElem("p")
    p.classList.add("todo__para")
    p.textContent=inputEl.value
    const i=createElem("i")
    i.classList.add("fa-sharp","fa-solid","fa-circle-xmark","todo__icon")
    li.appendChild(p)
    li.appendChild(i)
    todoItemsEl.appendChild(li)
    inputEl.value=""
    // return li
    }

    const listeners=_=>{
        addEl.addEventListener("click",()=>{
if(inputEl.value.length>0){
render()
}
        })
    }



 const init=_=>{
        listeners()
    }

    return{
        init
    }
})();

export default Add;