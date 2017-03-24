import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRouteModule } from './portfolio-route.module';
import { PortfolioComponent } from './portfolio.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRouteModule
  ],
  exports: [
    PortfolioComponent,
    PortfolioRouteModule
  ],
  declarations: [
    PortfolioComponent,
    CoverLetterComponent,
    ResumeComponent,
    WorkComponent,
    MoreComponent
  ]
})
export class PortfolioModule { }
