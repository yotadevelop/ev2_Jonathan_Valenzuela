export default {
    usuarios:[  
        {login:'projas',pass:123,nombre:'Pedro', apellido:"Rojas",fono:'22332211',cargo:'Obrero' },  
        {login:'mdiaz',pass:321,nombre:'Mario', apellido:"Diaz",fono:'99887766',cargo:'Ingeniero' },  
        {login:'tcastro',pass:123,nombre:'Tomas', apellido:"Castro",fono:'33344433',cargo:'Obrero' },  
        {login:'areyes',pass:123,nombre:'Andrea', apellido:"Reyes",fono:'887766',cargo:'Secretaria' },  
        {login:'tmora',pass:123,nombre:'Matias', apellido:"Mora",fono:'4443322',cargo:'Chofer' },  
        {login:'ccortes',pass:123,nombre:'Cesar', apellido:"Cortes",fono:'3344555',cargo:'Chofer' }                
    ], 
    data: `
        autor:<h1>Jonathan Valenzuela</h1>
        Login <br/>
        <input id="txt1" type="text"/> <br/>
        Pass <br/>
        <input id="txt2" type="password"/> <br/>
        <button onclick="verificar()">verificar</button>
        <p id="info"></p>
    `,


    
    verificar:function(){
        var txt1 = document.getElementById('txt1');
        var txt2 = document.getElementById('txt2');
        var info = document.getElementById('info');
        
    
        if(txt1.value=="" && txt2.value==""){
            info.style.background="red";
            info.style.color="white";
            info.innerHTML="¡¡Porfavor verificar campos vacios!!";
            
        }else{
            var arr= this.usuarios.filter(usuario => usuario.nombre == txt1);
            info.style.background="green";
            info.style.color="white";
            info.innerHTML="<h3>Datos</h3>"
            info.innerHTML=


        }
    },
};