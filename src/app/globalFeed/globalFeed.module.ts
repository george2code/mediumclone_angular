import {NgModule} from '@angular/core'
import {CommonModule} from  '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component'
import { RouterModule } from '@angular/router'
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';

const routes = [
    {
        path: '',
        component: GlobalFeedComponent
    }
]

@NgModule({
    imports: [CommonModule, BannerModule, FeedTogglerModule, RouterModule.forChild(routes), FeedModule, BannerModule, PopularTagsModule],
    declarations: [
      GlobalFeedComponent
    ]
})
export class GlobalFeedModule {}
