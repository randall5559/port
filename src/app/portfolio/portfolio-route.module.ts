import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'more',
    component: MoreComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRouteModule { }
