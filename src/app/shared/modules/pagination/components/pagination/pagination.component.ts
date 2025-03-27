import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number
  @Input('limit') limitProps: number
  @Input('currentPage') currentPageProps: number
  @Input('url') urlProps: string

  pageCount: number
  pages: number[]

  constructor(private utilsService: UtilsService) {}
  
  ngOnInit(): void {
      this.pageCount = Math.ceil(this.totalProps / this.limitProps);
      this.pages = this.utilsService.range(1, this.pageCount);
      console.log('pages', this.pages);
  }
}
