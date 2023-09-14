import { Component, OnInit } from '@angular/core';
import { Select, initTE } from "tw-elements";

@Component({
  selector: 'app-list-panier',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit(): void {
    
    initTE({ Select });
  }
}
