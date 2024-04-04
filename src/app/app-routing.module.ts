import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent} from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { SoftComponent } from './components/soft/soft.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'work', component: WorkComponent },
      { path: 'soft', component: SoftComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'error', component: ErrorComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
