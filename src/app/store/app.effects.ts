// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { mergeMap } from "rxjs";
// import { isLoading } from "./shared/ui.actions";

// @Injectable()
// export class LoadPageEffects {
//     constructor(
//         private actions$: Actions, 
//         private isLoad: boolean
//     ) {}

//     setLoading$ = createEffect(() => {
//         return this.actions$.pipe(
//                 ofType(isLoading),
//                 tap ( data => console.log('effect tap ', data)),
//                 mergeMap(
//                     ()=>  
//                 )
                
//     });
// }