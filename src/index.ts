// import * as Rx from 'rxjs';
import { BehaviorSubject, combineLatest, fromEvent, Observable, of} from "rxjs";
import {switchMap, tap, withLatestFrom} from'rxjs/operators';

import { drawing, mathFuncs} from "./functions";
import { BOARD_SIZE, LOOPSTATE, PLAYERS } from "./constants";

const canvas = <HTMLCanvasElement>document.getElementById("game-board");
const context = canvas.getContext("2d");

/**
 * Game State
 * gameboard Array<int>
 * currentPlayer: IPlayer
 * loopState: ['Start', 'Playing', 'Win','Stalemate']
 */
const source$ = <Observable<[MouseEvent, CanvasRenderingContext2D]>>fromEvent(canvas, "click").pipe(
  switchMap((event) => combineLatest([of(event), of(context)]))
)
// const board$ = of();
const board$ = new BehaviorSubject<Array<number>>([0,0,0,0,0,0,0,0,0]);
const currentPlayer$ = new BehaviorSubject<number>(PLAYERS.PLAYER1);
const loopState$ = new BehaviorSubject<number>(LOOPSTATE.START);
const render = (ctx: CanvasRenderingContext2D | null) => {
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx = drawing.drawboard(ctx, BOARD_SIZE);
    ctx.beginPath();
    // ctx = drawing.drawO(ctx, 300, 100, 65);
    ctx.font = "210px Arial";
    //ctx.fillText("X", 35, 185);
    drawing.paintChar(ctx, 0, 'X');
    drawing.paintChar(ctx, 1, 'X');
    drawing.paintChar(ctx, 2, 'O');
    drawing.paintChar(ctx, 3, 'X');
    drawing.paintChar(ctx, 4, 'X');
    drawing.paintChar(ctx, 5, 'X');
    drawing.paintChar(ctx, 6, 'X');
    drawing.paintChar(ctx, 7, 'O');
    drawing.paintChar(ctx, 8, 'X');

    ctx.stroke();
  }
};

const source2$ = source$.pipe(
  tap(console.log)
);

source2$.subscribe(([evt, ctx]) =>
  {
    console.log(
      "click eventx",
      JSON.stringify(evt.clientX),
      "click eventy",
      JSON.stringify(evt.clientY)
    );
    console.log(
      mathFuncs.xyToArrayPosition(
        mathFuncs.toQuadrantXY(evt.clientX, evt.clientY, BOARD_SIZE)
      )
    );
    console.log(`mathFuncs.toQuadrantXY(evt.clientX, evt.clientY, BOARD_SIZE): ${JSON.stringify(mathFuncs.toQuadrantXY(evt.clientX, evt.clientY, BOARD_SIZE))}`);
  }
); // The source that actually moves the game loop forward

render(context);
console.log("Let us do it... again!");
console.log("really this is working?");
