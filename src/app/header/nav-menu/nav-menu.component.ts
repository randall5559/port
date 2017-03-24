import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';

import { NavMenu } from './nav-menu.enum';

//declare var $ : JQuery;

@Component({
  selector: 'port-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public activeBtn: Array<boolean>;
  public stackMobile: Boolean;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private location: Location,
  ) {
    // check the size of the screen to see with width is tablet or mobile
    window.onresize = (e: Event) => {
      ngZone.run(() => {
          this.stackMobile = (window.innerWidth < 768) ? true : false;
      });
    };

    this.activeBtn = [true, false, false, false];
    this.stackMobile = false;
  }


  /**
   * OnInit()
   *
   *
   * @memberOf NavMenuComponent
   */
  ngOnInit() {
    // set active navigation button base upon path
    let pathName = this.location.path();

    if (pathName.length > 1) {
      this.activeBtn = this.activeBtn.map(() => false);

      let firstLetter = pathName.substring(1, 2).toUpperCase();
      this.activeBtn[ NavMenu[`${firstLetter}${pathName.substring(2, pathName.length)}`] ] = true;
    }

    // use jQuery to toggle the hambuger menu icon from stack icon to close icon
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
    });
  }


  /**
   * Set the component view dynamically from navigation
   *
   * @param {Function} component
   *
   * @memberOf NavMenuComponent
   */
  public setComponent(viewIndex: number) {

    // set the click menu button to active
    this.activeBtn = this.activeBtn.map(() => false);
    this.activeBtn[viewIndex] = !this.activeBtn[viewIndex];

    if (NavMenu.CoverLetter == viewIndex) {
      this.router.navigateByUrl('');
    } else {
      let path = NavMenu[viewIndex].toLowerCase();
      this.router.navigateByUrl(path);
    }
  }
}
