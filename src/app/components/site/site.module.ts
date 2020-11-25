import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { CoachesModule, CoursesModule } from '@static/index';

import { SharedModule } from '@shared/index';

import { SiteRoutingModule } from './site-routing.module';

import { AboutComponent } from './about/about.component';

import { CoachComponent } from './coach/coach.component';
import { CoachesComponent } from './coaches/coaches.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

import { HomeComponent } from './home/home.component';

import { StaticManagerService } from '../../services/';

import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [
		HomeComponent,
		AboutComponent,
		CoursesComponent,
		CourseComponent,
		CoachesComponent,
		CoachComponent,
		ContactUsComponent,
		RegisterComponent,
	],
	imports: [BrowserModule, SiteRoutingModule, CoachesModule, CoursesModule, SharedModule, RouterModule],
	exports: [HomeComponent, AboutComponent, CoursesComponent, CourseComponent, CoachesComponent, CoachComponent, ContactUsComponent],
	providers: [StaticManagerService],
})
export class SiteModule {}
