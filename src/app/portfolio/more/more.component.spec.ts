import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as $ from 'jquery';
import { MoreComponent } from './more.component';

describe('MoreComponent', () => {
  let component: MoreComponent;
  let fixture: ComponentFixture<MoreComponent>;
  let CustomEvent = new EventEmitter();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run - OnInit()', () => {
    $('.collapsible-header').on('click', (event: any) => {
      expect($(event.currentTarget).next().hasClass('collapsible-open')).toBe(true);
    });

    // trigger a fake click
    $( '.collapsible-header' ).trigger('click', CustomEvent);
  });
});
