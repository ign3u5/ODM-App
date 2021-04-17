import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any[][];
  @Input() headers: string[];
  page = 1;
  pageSize = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
