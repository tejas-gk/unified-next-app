const ASCII_CHARS = "........:::=+xX#0369";
const FONT_SIZE = 14;
const ASPECT_WIDTH = 4;
const ASPECT_HEIGHT = 5;
const ASCII_COLUMNS = 25;
const IMAGE_STAGGER_MS = 100;
const CELL_APPEAR_MS = 2;
const SCRAMBLE_COUNT = 10;
const SCRAMBLE_SPEED_MS = 100;
const REVEAL_DELAY_MS = 0;

const denseCharIndex = ASCII_CHARS.lastIndexOf(".");
const denseChars = ASCII_CHARS.slice(denseCharIndex + 1).split("");

const measureCtx = document.createElement("canvas").getContext("2d");
measureCtx.font = `${FONT_SIZE}px monospace`;
const charWidth = Math.ceil(measureCtx.measureText("M").width);
const charHeight = FONT_SIZE;
const ASCII_ROWS = Math.round(
  ASCII_COLUMNS * (ASPECT_HEIGHT / ASPECT_WIDTH) * (charWidth / charHeight),
);

document.querySelectorAll("img.ascii-reveal").forEach((img, index) => {
  const canvas = document.createElement("canvas");
  const staggerDelay = index * IMAGE_STAGGER_MS;
  const onLoaded = () => startEffect(img, canvas, staggerDelay);

  img.closest(".img").appendChild(canvas);
  img.complete && img.naturalWidth
    ? onLoaded()
    : img.addEventListener("load", onLoaded);
});

function startEffect(img, canvas, staggerDelay) {
  const { asciiGrid, brightnessGrid } = imageToAsciiGrid(img);
  prepareCanvas(canvas);
  animateCells(canvas, asciiGrid, brightnessGrid, staggerDelay);
}

function imageToAsciiGrid(img) {
  const imageAspect = img.naturalWidth / img.naturalHeight;
  const itemAspect = ASPECT_WIDTH / ASPECT_HEIGHT;

  let cropX = 0,
    cropY = 0,
    cropW = img.naturalWidth,
    cropH = img.naturalHeight;

  if (imageAspect > itemAspect) {
    cropW = img.naturalHeight * itemAspect;
    cropX = (img.naturalWidth - cropW) / 2;
  } else {
    cropH = img.naturalWidth / itemAspect;
    cropY = (img.naturalHeight - cropH) / 2;
  }

  const samplingCanvas = document.createElement("canvas");
  samplingCanvas.width = ASCII_COLUMNS;
  samplingCanvas.height = ASCII_ROWS;
  samplingCanvas
    .getContext("2d")
    .drawImage(
      img,
      cropX,
      cropY,
      cropW,
      cropH,
      0,
      0,
      ASCII_COLUMNS,
      ASCII_ROWS,
    );

  const { data } = samplingCanvas
    .getContext("2d")
    .getImageData(0, 0, ASCII_COLUMNS, ASCII_ROWS);
  const asciiGrid = [];
  const brightnessGrid = [];

  for (let row = 0; row < ASCII_ROWS; row++) {
    const asciiRow = [];
    const brightnessRow = [];

    for (let col = 0; col < ASCII_COLUMNS; col++) {
      const pixelIndex = (row * ASCII_COLUMNS + col) * 4;
      const brightness =
        (data[pixelIndex] * 0.299 +
          data[pixelIndex + 1] * 0.587 +
          data[pixelIndex + 2] * 0.114) /
        255;
      const charIndex = Math.min(
        ASCII_CHARS.length - 1,
        Math.floor((1 - brightness) * ASCII_CHARS.length),
      );

      asciiRow.push(ASCII_CHARS[charIndex]);
      brightnessRow.push(charIndex);
    }

    asciiGrid.push(asciiRow);
    brightnessGrid.push(brightnessRow);
  }

  return { asciiGrid, brightnessGrid };
}

function prepareCanvas(canvas) {
  const dpr = 2;
  canvas.width = ASCII_COLUMNS * charWidth * dpr;
  canvas.height = ASCII_ROWS * charHeight * dpr;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCharacter(ctx, col, row, char) {
  ctx.fillStyle = "#111";
  ctx.fillRect(col * charWidth, row * charHeight, charWidth, charHeight);
  ctx.fillStyle = "#c8c8c8";
  ctx.fillText(char, col * charWidth, row * charHeight);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function animateCells(canvas, asciiGrid, brightnessGrid, staggerDelay) {
  const dpr = 2;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.font = `${charHeight}px monospace`;
  ctx.textBaseline = "top";

  const totalCells = ASCII_COLUMNS * ASCII_ROWS;
  const scrambleState = new Array(totalCells).fill(null);
  let settledCount = 0;

  const cellOrder = shuffleArray(
    Array.from({ length: totalCells }, (_, i) => i),
  );

  cellOrder.forEach((cellIndex, i) => {
    setTimeout(
      () => {
        const row = Math.floor(cellIndex / ASCII_COLUMNS);
        const col = cellIndex % ASCII_COLUMNS;
        const isDark = brightnessGrid[row][col] > denseCharIndex;

        if (!isDark) {
          drawCharacter(ctx, col, row, asciiGrid[row][col]);
          scrambleState[cellIndex] = 0;
          settledCount++;
          if (settledCount === totalCells) scheduleImageReveal(canvas);
        } else {
          drawCharacter(
            ctx,
            col,
            row,
            denseChars[Math.floor(Math.random() * denseChars.length)],
          );
          scrambleState[cellIndex] = SCRAMBLE_COUNT;
        }
      },
      staggerDelay + i * CELL_APPEAR_MS,
    );
  });

  const scrambleTicker = setInterval(() => {
    let stillScrambling = false;

    for (let cellIndex = 0; cellIndex < totalCells; cellIndex++) {
      const remaining = scrambleState[cellIndex];
      if (remaining === null || remaining === 0) continue;

      stillScrambling = true;
      const row = Math.floor(cellIndex / ASCII_COLUMNS);
      const col = cellIndex % ASCII_COLUMNS;

      if (remaining === 1) {
        drawCharacter(ctx, col, row, asciiGrid[row][col]);
        scrambleState[cellIndex] = 0;
        settledCount++;
        if (settledCount === totalCells) scheduleImageReveal(canvas);
      } else {
        drawCharacter(
          ctx,
          col,
          row,
          denseChars[Math.floor(Math.random() * denseChars.length)],
        );
        scrambleState[cellIndex] = remaining - 1;
      }
    }

    if (!stillScrambling && settledCount === totalCells)
      clearInterval(scrambleTicker);
  }, SCRAMBLE_SPEED_MS);
}

function scheduleImageReveal(canvas) {
  setTimeout(() => {
    canvas.closest(".img").classList.add("revealed");
  }, REVEAL_DELAY_MS);
}
