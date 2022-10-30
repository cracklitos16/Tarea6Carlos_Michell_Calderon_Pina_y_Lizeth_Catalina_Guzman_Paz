function myFunction() {
//Validador del Numero de Control
  let x1 = document.getElementById("numeroCont").value;
  const regex = /^(m|c)?[0-9]{2}(120|121)[0-9]{3}$/i;
  const valNC = regex.exec(x1); 

      if (regex.test(x1)) {
        text="Número de control válido";
        console.log(""+valNC);
      }
      else {
        text="Número de control NO válido";
        
      }

  document.getElementById("valida_numeroCont").innerHTML = text;

  //Validador del RFC
      let x2 = document.getElementById("RFC").value;
      const regex2 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
      const fechaNaci = regex2.exec(x2); 

      if (regex2.test(x2)) {
        text="RFC válido";
        console.log("Fecha de nacimiento: "+fechaNaci)        
      }
      else {
        text="RFC NO válido";
      }
    
      document.getElementById("valida_RFC").innerHTML = text;

//Validador del numero de Cel
  let x3 = document.getElementById("numeroCel").value;
  const regex3 = /^[4][4][3]\d{7}$/

      if (regex3.test(x3)) {
        text="Número de Celular válido";
      }
      else {
        text="Número de Celular NO Válido";
      }

  document.getElementById("valida_numeroCel").innerHTML = text;
//Validar Correo
 let x4 = document.getElementById("Correo1").value;
 const regex4 = /^(l)((m|c)?[0-9]{2}(120|121)[0-9]{3})(@morelia.tecnm.mx)$/i;

if (regex4.test(x4)) {
  const Correo2 = regex4.exec(x4); 
  console.log(""+Correo2);
  console.log("Correo: "+Correo2[2]);
  console.log("Número de control: "+valNC[0]);

      if(Correo2[2] == valNC[0]){
      text="Correo valido";
      console.log("valido");
      text ="Correo válido";
      document.getElementById("Valida2").innerHTML = text;  
    }
    else{
        console.log("no valido")
        text ="Correo no válido";
        document.getElementById("Valida2").innerHTML = text;
        text="El correo no coincide con el número de control";
      document.getElementById("valida_Correo").innerHTML = text;
      }
}

 document.getElementById("valida_Correo").innerHTML = text;

//Juntar nombre y fechanaic
 let x5 = document.getElementById("Name").value;
   const regex5 = /[A-Z a-z]*[a-z]*/i;
   const nombre = regex5.exec(x5); 
   console.log("Nombre: "+nombre);
   const unir = "El usuario: " +nombre+ " nacido en la fecha " +fechaNaci[1]+ " ha sido verificado Correctamente.";

   document.getElementById("Comprobacion").innerHTML = unir;
}

