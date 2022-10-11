let img = 0;               //contador de imagens solicitadas
const max = 19;             //número da ultima imagens
const updateRate = 2000;        //taxa de atualização automática

function proxImagem( img ){      //solicita nova imagem via fetch()
    fetch("img/"+img+".jpg")
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob); //cria endereço da imagem
            console.log(imageObjectURL);
            const proxImg = document.createElement("img");
            proxImg.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImg);
        })
}

window.onload = setInterval(function(){
    proxImagem( img++ % (max + 1));
    let scrollPoint = window.scrollY + window.innerHeight;
    window.scrollTo({top: scrollPoint, behavior: "smooth"});
}, updateRate);

window.onload = function(){
    for(img = 0; img <5; img++){
        proxImagem( img );
    }
}