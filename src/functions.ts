//#region Drawing

const drawLine = (
  ctx: CanvasRenderingContext2D,
  xstart: number,
  ystart: number,
  xEnd: number,
  yEnd: number
): CanvasRenderingContext2D => {
  ctx.moveTo(xstart, ystart);
  ctx.lineTo(xEnd, yEnd);

  return ctx;
};

const draw45DegreeLine = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  xDistance: number,
  direction: boolean = true
) => {
  const xEnd = x + xDistance;
  const yEnd = direction ? y + xDistance : y - xDistance;

  return drawLine(ctx, x, y, xEnd, yEnd);
};

const drawX = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number, 
  size: number
): CanvasRenderingContext2D => {
  ctx.moveTo(x, y);
  ctx.beginPath();
  ctx = draw45DegreeLine(ctx, x, y, size, true);
  ctx = draw45DegreeLine(ctx, x, y + size, size, false);
  ctx.stroke();
  return ctx;
};


const drawO = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number
): CanvasRenderingContext2D => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.stroke();
    return ctx;
};

const paintChar = (ctx: CanvasRenderingContext2D, idx: number, char: string) => {
  const xMultiplier = 185
  const yMultiplier = 200
  const xStart = 45
  const yStart = 175
  const {x, y } = arrayPositionToXY(idx);

  ctx.fillText(char, x * xMultiplier + xStart, y * yMultiplier + yStart);

}

const drawboard = (
  ctx: CanvasRenderingContext2D,
  size: number
): CanvasRenderingContext2D => {
  const firstQ = size / 3;
  const secondQ = firstQ * 2;
  ctx.beginPath();
  ctx = drawLine(ctx, firstQ, 0, firstQ, size);
  ctx = drawLine(ctx, secondQ, 0, secondQ, size);
  ctx = drawLine(ctx, 0, firstQ, size, firstQ);
  ctx = drawLine(ctx, 0, secondQ, size, secondQ);
  ctx.stroke();
  return ctx;
};
export const drawing = { drawLine, draw45DegreeLine, drawboard, drawX, drawO, paintChar };
//#endregion

//#region Math
const toQuadrantXY = ( clientX: number, clientY: number, size: number ) :{x: number, y:number} => {
  const newX = Math.floor(clientX / (size / 3))
  const newY = Math.floor(clientY / (size / 3))
  return {x: newX, y: newY};
}

const xyToArrayPosition = ( position: {x: number, y: number} ) => {
  return position.x +( position.y * 3);
   
}

const arrayPositionToXY = ( index: number) =>{
  const x = index % 3;
  const y = Math.floor(index / 3);
  return {x, y}
}
export const mathFuncs = { toQuadrantXY, xyToArrayPosition, arrayPositionToXY };
//#endregion
