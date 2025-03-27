import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction
} from '../actions/register.action'
import {AuthService} from '../../services/auth.service'
import {of} from 'rxjs'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { PersistanceService } from '../../../shared/services/persistance.service'
import { Router } from '@angular/router'
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            // window.localStorage.setItem('accessToken', currentUser.token);
            this.persistaceService.set('accessToken', currentUser.token);
            return loginSuccessAction({currentUser})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error?.errors })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
        this.router.navigateByUrl('/')
        })
    ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions, 
    private authService: AuthService,
    private persistaceService: PersistanceService,
    private router: Router
  ) {}
}