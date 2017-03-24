import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location,  LocationStrategy } from '@angular/common';
import * as $ from 'jquery';
import { NavMenuComponent } from './nav-menu.component';
import { NavMenu } from './nav-menu.enum';


describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;
  let router: Router;
  let location: Location;
  let CustomEvent = new EventEmitter();
  let fakeLocationSpyMethod = jasmine.createSpy('fake path');

  class MockRouter {
    navigateByUrl() {}
  }

  class MockLocation {
    path() {
      fakeLocationSpyMethod();
      return 'fake string';
    }

    replace() {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuComponent ],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: Location, useClass: MockLocation }
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([Location, Router], (_Location_, _Router_) => {
    router = _Router_;
    location = _Location_;

    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(router, 'navigateByUrl').and.returnValue({ subscribe: () => {} });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setup - OnInit()', () => {
    expect(fakeLocationSpyMethod).toHaveBeenCalled();

    let $hamburger = $(".hamburger");

    $hamburger.trigger('click', CustomEvent);

    expect($hamburger.hasClass("is-active")).toBe(true);
  });

  it('should set view - setComponent()', () => {
    component.setComponent(0);

    expect(router.navigateByUrl).toHaveBeenCalled();
  });
});
