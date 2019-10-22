
function escrever(num1){
  
    var numero= document.getElementById('resultado').value += num1;
    
  }
  
function resultado(){
  
  try {
      var cont = document.getElementById("resultado");
      res = parseFloat(+eval(cont.value));
      document.getElementById("resultado").value = + res;
      
    
      
  }
  
  catch(err) {
     
    document.getElementById("resultado").value = "Erro de operação.";
  }
}
    
  



  