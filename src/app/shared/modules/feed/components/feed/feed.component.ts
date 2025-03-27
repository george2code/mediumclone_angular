import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { environment } from '../../../../../../environments/environment';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import { Router, ActivatedRoute, Params } from '@angular/router'
import queryString from 'query-string';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  limit = environment.limit
  currentPage: number
  baseUrl = ''
  queryParamsSubscription: Subscription

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.intializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }


  intializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))

    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      console.log('params', params)
      this.currentPage = Number(params['page'] || '1');
      console.log('currentPage', this.currentPage);
      this.fetchFeed();
    })
  }

  fetchFeed() {
    // https://www.npmjs.com/package/query-string
    // npm i query-string


    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    console.log('parsedUrl', parsedUrl);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(getFeedAction({url: apiUrlWithParams}));


    // npm install @ngrx/router-store --save
  }
}