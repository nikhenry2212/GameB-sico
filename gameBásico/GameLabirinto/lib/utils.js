function random(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

function interseccaoPixels(matriz, x, y, objeto = player) {
  for (let i = 0; i < matriz.length; i++) {
    const bloco = matriz[i];

    if (
      x >= bloco.x &&
      x + player.w <= bloco.x + bloco.w &&
      y >= bloco.y &&
      y + player.h <= bloco.y + bloco.h
    ) {
      return true;
    }
  }
  return false;
}