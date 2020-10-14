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
        <br><br><br>
        autor: <b>JONATHAN VALENZUELA</b> <br><br>
            Login <br>
            <input id="txt1" type="text"/> <br>
            Pass <br>
            <input id="txt2" type="password"/> <br>
            <button onclick="verificar()">verificar</button>
            <p id="info"></p>
    `,


    
    verificar:function(){
        var txt1 = document.getElementById("txt1").value;
        var txt2 = document.getElementById("txt2").value;
        var info = document.getElementById("info");
        
    
    

        if(txt1=="" || txt2==""){
            info.style.background="red";
            info.style.color="white";
            info.innerHTML="¡¡Porfavor verificar campos vacios!!";
            
        }else{
            var usu= this.usuarios.filter(usuario => usuario.login == txt1 && usuario.pass == txt2);
            if(usu.length == 0){
                info.style.background="red";
                info.style.color="white";
                info.innerHTML="No se encontro usuario";
            }else{ 
            info.style.background="green"
            info.style.color="white";
            info.innerHTML=`
                Nombre: ${usu[0].nombre} ${usu[0].apellido} <br>
                Fono: ${usu[0].fono}<br>
                Cargo: ${usu[0].cargo}<br>
            `;
            
            }
        }
    },
};