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
    ctx = drawing.drawX(ctx, 35, 35, 130);
    ctx = drawing.drawO(ctx, 300, 100, 65);
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
