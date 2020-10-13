export default {
    mario : {estado:'normal', vidas:3},

    data: `
        autor<h1>Jonathan Valenzuela</h1>
        Total de vidas: <p id="vida">0</p>
        <button>Flor</button>
        <button>Pluma</button>
        <button>Pierde</button>
    `,
    
    

    flor:function(){
        
    },

    pluma:function(){

    },

    pierde:function(){
        var vida = document.getElementById('vida');
        vida = vida - 1;
    },

}