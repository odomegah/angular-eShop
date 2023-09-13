import { Component, OnInit } from '@angular/core';
import {  Rating,  initTE,} from "tw-elements";


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  ii: number[] = [1,2,3,4,5,6,7,8,9,10]

  ngOnInit(): void {
      // Initialization for ES Users

initTE({ Rating });
  }
}
