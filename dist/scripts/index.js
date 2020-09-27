// import * as Rx from 'rxjs';
import { fromEvent } from 'rxjs';
const BOARD_SIZE = 600;
const canvas = document.getElementById("game-board");
const context = canvas.getContext("2d");
const drawLine = (ctx, xstart, ystart, xEnd, yEnd) => {
    ctx.moveTo(xstart, ystart);
    ctx.lineTo(xEnd, yEnd);
    return ctx;
};
const drawboard = (ctx, size = BOARD_SIZE) => {
    const firstQ = (size / 3);
    const secondQ = firstQ * 2;
    ctx = drawLine(ctx, firstQ, 0, firstQ, size);
    ctx = drawLine(ctx, secondQ, 0, secondQ, size);
    ctx = drawLine(ctx, 0, firstQ, size, firstQ);
    ctx = drawLine(ctx, 0, secondQ, size, secondQ);
    ctx.stroke();
};
const source$ = fromEvent(canvas, 'click');
const render = (ctx) => {
    if (ctx)
        drawboard(ctx, 550);
};
source$.subscribe(evt => console.log('click event', JSON.stringify(evt.clientX))); // The source that actually moves the game loop forward
render(context);
console.log('Let us do it... again!');
