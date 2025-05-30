import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {AuthService} from '../../services/auth.service'
import {of} from 'rxjs'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { PersistanceService } from '../../../shared/services/persistance.service'
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../actions/getCurrentUser.action'

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistaceService.get('accessToken');
        if (!token) {
            return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser});
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions, 
    private authService: AuthService,
    private persistaceService: PersistanceService,
  ) {}
}