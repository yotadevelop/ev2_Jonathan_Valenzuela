export default {
    mario : {estado:'normal', vidas:3},

    data: `
        autor<h1>Jonathan Valenzuela</h1>
        Total de vidas: <div id="vida">0</div>
        <button>Flor</button>
        <button>Pluma</button>
        <button onclick="pierde">Pierde</button>
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