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
           
        this.mario.estado="fuego";
        im.src="img/flor.png";
        
    },

    pluma:function () {
        var im=document.getElementById("img");

        this.mario.estado="volador";
        im.src="img/capa.png";
        
    },

    pierde:function () {
        var im=document.getElementById("img");
        var life = document.getElementById("life");
        
        
    
        if(this.mario.estado=="fuego" || this.mario.estado=="volador"){
            im.src="img/normal.png";
            this.mario.estado="normal"
        }else {
            this.mario.vidas = (this.mario.vidas - 1);
            if(this.mario.vidas>=0){
                life.innerHTML=`${this.mario.vidas}`;
            }else{
                life.innerHTML="TE HAS QUEDADO SIN VIDAS";
            }
            
        }        
    },

}