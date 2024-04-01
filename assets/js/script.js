console.log("Carregamos o script.js");

function mudarTema() {
    console.log("chamamos mudar tema");

  
    var body = document.body;
    
    if (body.classList.contains("dark")) {
        
        body.classList.remove("dark");
    } else {
       
        body.classList.add("dark");
    }
}
