# API - Application Programming Interface

É uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Podem ser acessadas por meio de URLs. 

# JSON - JavaScript Object Notation

É muito comum que APIs retornem seus dados no formato .json, portanto, precisamos tratar esses dados quando os recebemos.

# FETCH - Consumindo APIs

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
    
// Retorna uma promise    