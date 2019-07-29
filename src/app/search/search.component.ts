import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	queryResults

  constructor(
  	private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  onKeyup(event) {
    this.queryResults = this.searchService.search(event.target.value);
  }
}
