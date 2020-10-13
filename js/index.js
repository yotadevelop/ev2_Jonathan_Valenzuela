import login from "./modules/login.js";
import mario from "./modules/mario.js";
 
var resp= document.getElementById('resp');
window.verificar= login.verificar;

document.getElementById('login').addEventListener("click", ()=>{
    resp.innerHTML = login.data;
});

document.getElementById('mario').addEventListener("click", ()=>{
    resp.innerHTML = mario.data;
});