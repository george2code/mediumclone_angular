import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CreateArticleComponent } from "./components/create-article/create-article.component";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/articleForm/articleForm.module";
import { CreateArticleService } from "./services/createArticle.service";

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent    
  }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
    declarations: [CreateArticleComponent],
    providers: [CreateArticleService]
})
export class CreateArticleModule {
    
}