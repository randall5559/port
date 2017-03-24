import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'port-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( '.collapsible-header' ).click((event: Event) => {
      event.preventDefault();
      $(event.currentTarget).next().toggleClass('collapsible-open');
    });
  }

}
