export default {
    mario : {estado:'normal', vidas:3},

    data:` <br><br>
        autor: <b>JONATHAN VALENZUELA</b> <br><br>
        TOTAL VIDAS: <b id="life">3</b> <br>
        
        <img id="img" src="img/normal.png"/> 
        <br>        
        <button onclick="flor()">Flor</button>
        <button onclick="pluma()">Pluma</button>
        <button onclick="pierde()">Pierde</button>
    `,
    
    

    flor:function () {
        var im=document.getElementById("img");
        var life = document.getElementById("life");
        var est = this.mario.estado;
        

        est = "fuego";
        im.src="img/flor.png";
        
    
        
    },

    pluma:function () {
        var im=document.getElementById("img");
        var life = document.getElementById("life");
        var est = this.mario.estado;
        

        est="volador";
        im.src="img/capa.png";
    },

    pierde:function () {
        var im=document.getElementById("img");
        var life = document.getElementById("life");
        var est = this.mario.estado;
        var vida = this.mario.vidas;
        
        im.src="img/normal.png";
        if(est=="fuego" || est=="volador"){
            est=="normal";
            life.innerHTML=vida;
         }
        
         if(est=="normal"){
            vida= vida - 1;
            life.innerHTML=vida;
        }
        
        
    },

}