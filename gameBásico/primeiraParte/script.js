
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
//canvas.addEventListener('mousemove', logMouse);
document.body.addEventListener("keyup",movimentarPlayer);
var wCanvas = canvas.clientWidth;
var hCanvas = canvas.clientHeight;


var matrizAreaJogo = [];
//Definindo area do topo
for (let x=0; x < 10; x++){
matrizAreaJogo.push(
        {
            y:0,
            x:(x * 50),
            w:50,
            h:50
        }
    );
}
//Definindo area da esquerda
for (let x=0; x< 10 ; x++){
    matrizAreaJogo.push(
        {
            x: 0,
            y: (x*50),
            w:50,
            h:50

        }
        
    )
}
//Definindo area da direita
for (let x=0; x < 10 ; x++){
    matrizAreaJogo.push(
        {
            x:450,
            y:(x * 50),
            w:50,
            h:50
        }
    )
}

//definindo area do base
for ( let x=0; x< 10;x++){
    matrizAreaJogo.push(
        {
            x:(x *50),
            y:450,
            w:50,
            h:50
        }
    )
}

//Definindo o Player
const player = {
    x:200,
    y:200,
    w:50,
    h:50
}
function movimentarPlayer(e){

    const teclasDigitada = e.key;
    const teclasPermitidas = [
                                "ArrowUp",
                                "ArrowLeft",
                                "ArrowDown",
                                "ArrowRight"
                            ];

    if (teclasDigitada === "ArrowUp"){
      if(player.y > 50){
        
        player.y =(player.y - 50)
      }
    }                        
    if(teclasDigitada ==="ArrowLeft" ){
        if(player.x > 50){
            player.x = (player.x - 50)
        }
    }
    if (teclasDigitada === "ArrowRight" ){
        if(player.x < 400){
            player.x =( player.x + 50)
        }
    }

    if(teclasDigitada ==="ArrowDown"){
       
        if(player.y < 400 ){
            player.y =(player.y + 50)
        }
    }
}



function renderizarJogo() {
    
    //Reseta o Canvas (folha em branco)
    ctx.clearRect(0,0, wCanvas, hCanvas)
   
    //desenha area do jogo
    for (let x=0; x<matrizAreaJogo.length; x++){
      //  console.log(matrizAreaJogo[x]);
        ctx.beginPath();
        ctx.fillStyle = "#aaa";
        ctx.fillRect(matrizAreaJogo[x].x,
                        matrizAreaJogo[x].y,
                        matrizAreaJogo[x].w,
                        matrizAreaJogo[x].h
                        );
        }   

        //desenha player
        ctx.beginPath();
        ctx.fillStyle = "#F00";
        ctx.fillRect(player.x, player.y, player.w,player.h);
    
        //redesenha o canvas em 60fps
    requestAnimationFrame(renderizarJogo);

      }
function random(min, max){
    return min + Math.floor((max-min)*Math.random());
};

renderizarJogo();