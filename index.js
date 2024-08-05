const p1 = document.getElementById('p1');
const h2list= document.getElementsByClassName("subtitle");
const textInput= document.getElementById("username-input");

const element1 = document.querySelector("#p1");
const element2= document.querySelector(".subtitle");

console.log (p1);
console.log(h2list);
console.log(textInput);
//**elemento para modificar el texto */
//p1.textContent ="Texto dinamico";
//console.log(e.target.value);

textInput.addEventListener ("input", (e) => {
    p1.textContent = e.target.value;
    
});

