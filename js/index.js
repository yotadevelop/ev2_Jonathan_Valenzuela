import login from "./modules/login.js";
import mario from "./modules/mario.js";
 
var resp= document.getElementById('resp');
window.verificar= login.verificar.bind(login);
window.flor= mario.flor.bind(mario);
window.pluma= mario.pluma.bind(mario);
window.pierde=mario.pierde.bind(mario);


document.getElementById('login').addEventListener("click", ()=>{
    resp.innerHTML = login.data;
});

document.getElementById('mario').addEventListener("click", ()=>{
    resp.innerHTML = mario.data;
});