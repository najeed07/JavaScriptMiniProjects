const inputBox = document.getElementById('input');
const btn = document.getElementById('plus');
const list = document.getElementById('lists');
const error = document.getElementById('error')


const addToDo = ()=>{
    const inputVal = inputBox.ariaValueMax;

    if(inputVal.length <=0){
        alert("You must write something")
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = innerText;
    li.appendChild(p);
    list.appendChild(li);
}
btn.addEventListener('click', addToDo);