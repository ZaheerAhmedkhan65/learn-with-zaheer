// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('diceCanvas');
//     const ctx = canvas.getContext('2d');
//     const diceSize = 100;
//     const diceX = (canvas.width - diceSize) / 2;
//     const diceY = (canvas.height - diceSize) / 2;
  
//     let currentFace = 1;
  
//     function drawDiceFace(ctx, x, y, size, face) {
//       ctx.clearRect(x, y, size, size);
//       ctx.fillStyle = 'white';
//       ctx.fillRect(x, y, size, size);
//       ctx.strokeRect(x, y, size, size);
  
//       ctx.fillStyle = 'black';
//       const dotSize = size / 10;
//       const positions = {
//         1: [[0.5, 0.5]],
//         2: [[0.2, 0.2], [0.8, 0.8]],
//         3: [[0.2, 0.2], [0.5, 0.5], [0.8, 0.8]],
//         4: [[0.2, 0.2], [0.8, 0.2], [0.2, 0.8], [0.8, 0.8]],
//         5: [[0.2, 0.2], [0.8, 0.2], [0.5, 0.5], [0.2, 0.8], [0.8, 0.8]],
//         6: [[0.2, 0.2], [0.8, 0.2], [0.2, 0.5], [0.8, 0.5], [0.2, 0.8], [0.8, 0.8]]
//       };
  
//       positions[face].forEach(([px, py]) => {
//         ctx.beginPath();
//         ctx.arc(x + px * size, y + py * size, dotSize / 2, 0, Math.PI * 2);
//         ctx.fill();
//       });
//     }
  
//     function drawDice() {
//       drawDiceFace(ctx, diceX, diceY, diceSize, currentFace);
//     }
  
//     document.addEventListener('keydown', (event) => {
//       if (event.key === 'ArrowRight') {
//         currentFace = (currentFace % 6) + 1;
//         drawDice();
//       } else if (event.key === 'ArrowLeft') {
//         currentFace = (currentFace - 1) || 6;
//         drawDice();
//       }
//     });
  
//     drawDice();
//   });
  

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('diceCanvas');
    const ctx = canvas.getContext('2d');
    const diceSize = 100;
    const offset = diceSize / 2;
    const diceX = (canvas.width - diceSize) / 2;
    const diceY = (canvas.height - diceSize) / 2;
  
    let currentFaces = [1, 2, 3]; // Front, Top, and Side
  
    function drawDiceFace(ctx, x, y, size, face, isPerspective = false) {
      const dotSize = size / 10;
      const dotPositions = {
        1: [[0.5, 0.5]],
        2: [[0.2, 0.2], [0.8, 0.8]],
        3: [[0.2, 0.2], [0.5, 0.5], [0.8, 0.8]],
        4: [[0.2, 0.2], [0.8, 0.2], [0.2, 0.8], [0.8, 0.8]],
        5: [[0.2, 0.2], [0.8, 0.2], [0.5, 0.5], [0.2, 0.8], [0.8, 0.8]],
        6: [[0.2, 0.2], [0.8, 0.2], [0.2, 0.5], [0.8, 0.5], [0.2, 0.8], [0.8, 0.8]]
      };
  
      ctx.fillStyle = 'black';
      dotPositions[face].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(x + px * size, y + py * size, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  
    function draw3DDice() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
  
      // Draw front face
      ctx.fillRect(diceX, diceY, diceSize, diceSize);
      ctx.strokeRect(diceX, diceY, diceSize, diceSize);
      drawDiceFace(ctx, diceX, diceY, diceSize, currentFaces[0]);
  
      // Draw top face
      ctx.beginPath();
      ctx.moveTo(diceX, diceY);
      ctx.lineTo(diceX + offset, diceY - offset);
      ctx.lineTo(diceX + diceSize + offset, diceY - offset);
      ctx.lineTo(diceX + diceSize, diceY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      drawDiceFace(ctx, diceX + offset / 2, diceY - offset / 2, diceSize / 1.5, currentFaces[1]);
  
      // Draw side face
      ctx.beginPath();
      ctx.moveTo(diceX + diceSize, diceY);
      ctx.lineTo(diceX + diceSize + offset, diceY - offset);
      ctx.lineTo(diceX + diceSize + offset, diceY + diceSize - offset);
      ctx.lineTo(diceX + diceSize, diceY + diceSize);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      drawDiceFace(ctx, diceX + diceSize, diceY + offset / 2, diceSize / 1.5, currentFaces[2]);
    }
  
    function rotateDice() {
      currentFaces = [
        currentFaces[1],  // The current top face becomes the new front face
        7 - currentFaces[0], // The opposite of the current front face becomes the new top face
        currentFaces[2]  // The side face remains the same for this simple rotation
      ];
      draw3DDice();
    }
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        rotateDice();
      }
    });
  
    draw3DDice();
  });
  
  