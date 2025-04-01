import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArticleFormComponent } from "./components/article-form/article-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BackendErrorMessagesModule } from "../backendErrorMessages/backendErrorMessages.module";


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
    exports: [ArticleFormComponent],
    declarations: [
      ArticleFormComponent
    ]
})
export class ArticleFormModule {
    
}