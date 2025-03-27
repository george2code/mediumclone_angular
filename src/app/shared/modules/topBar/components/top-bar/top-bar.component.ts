import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from '../../../../../auth/store/selectors';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from '../../../../types/currentUser.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
      this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
      this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
      this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
