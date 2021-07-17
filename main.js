const btn = document.querySelector("button");
let number = 1;
const addElement = () => {
    const div = document.createElement('div');
    div.textContent = number;
    document.body.appendChild(div);
    if(number % 5 == 0){
        div.classList.add("circle")
    }
    ++number
}
btn.addEventListener("click", addElement)