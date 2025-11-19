import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { ShopApiService } from '../../services/shop-api.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private api = inject(ShopApiService);
  private router = inject(Router); // 🟩 AJOUT IMPORTANT

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ username, password }) =>
        this.api.login({ username, password }).pipe(
          map((res: any) =>
            AuthActions.loginSuccess({
              access: res.access,
              refresh: res.refresh,
            })
          ),
          catchError((error) =>
            of(AuthActions.loginFailure({ error }))
          )
        )
      )
    )
  );

  // 🟩 REDIRECTION APRÈS SUCCÈS
  loginSuccessRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          console.log('REDIRECT → /app');
          this.router.navigate(['/app']);  // 🔥 REDIRECTION
        })
      ),
    { dispatch: false }
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.refreshToken),
      mergeMap(() =>
        this.api.refresh('').pipe(
          map((res: any) =>
            AuthActions.refreshSuccess({ access: res.access })
          ),
          catchError((error) =>
            of(AuthActions.loginFailure({ error }))
          )
        )
      )
    )
  );
}
