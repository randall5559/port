import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PortfolioModule } from '../portfolio/portfolio.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioModule
  ],
  exports: [HeaderComponent, NavMenuComponent],
  declarations: [
    HeaderComponent,
    NavMenuComponent,
  ]
})
export class HeaderModule { }
