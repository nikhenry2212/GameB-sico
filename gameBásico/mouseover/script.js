
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
canvas.addEventListener('mousemove', logMouse);

var wCanvas = canvas.clientWidth;
var hCanvas = canvas.clientHeight;

function logMouse(e){
    const {offsetX,offsetY} = e;
    interseccaoElementoMatriz(offsetX, offsetY);
}


var matriz = [];
for (let x=0;x<10;x++){
    matriz[x] = Array(10).fill(0)
}

function desenhaMatriz(){
    //randomizarPreenchimentoMatriz();
    ctx.clearRect(0,0, wCanvas, hCanvas)

    for (let x=0; x<matriz.length; x++){
        for (let y=0; y<matriz[x].length; y++){
            
                ctx.beginPath();
                if (matriz[x][y] === 0){
                  ctx.fillStyle = "#fff";
                }else {
                  ctx.fillStyle = "#000"
                }
                ctx.fillRect(
                    x * (wCanvas / matriz.length),
                    y * (hCanvas / matriz[x].length),
                    (wCanvas / matriz[x].length),
                    (hCanvas / matriz.length)
                );
              
            }
        }   
    
    requestAnimationFrame(desenhaMatriz);

      }
      function interseccaoElementoMatriz(mouseX,mouseY){
        //console.log(mouseX,mouseY);
        for (let x = 0; x < matriz.length; x++) {
            for (let y = 0; y < matriz[x].length; y++) {
                const eleX = x * (wCanvas / matriz.length);
                const eleY = y * (hCanvas / matriz[x].length);
                const eleW = (wCanvas / matriz[x].length);
                const eleH = (hCanvas / matriz.length);
                if (
                    (mouseX >= eleX && mouseX <= (eleX + eleW))
                    &&
                    (mouseY >= eleY && mouseY <= (eleY + eleH))
                ) {
                    matriz[x][y] = 1;
                } else {
                    matriz[x][y] = 0;
                }
            }
        }
    }

function randomizarPreenchimentoMatriz(){
    for (let x=0; x<matriz.length; x++){
        for (let y=0; y<matriz[x].length; y++){
            matriz[x][y] = Math.round(Math.random());
        }
    }
};

function desenhaLinha(){
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(250,250);
    ctx.stroke();
};

function desenhaQuadrado(){
    ctx.beginPath();
    ctx.rect(random(100,400), random(200,300), random(100,300), random(100,300));
    ctx.stroke(); //poderia ser ctx.fill() para preencher
};

function random(min, max){
    return min + Math.floor((max-min)*Math.random());
};

desenhaMatriz();