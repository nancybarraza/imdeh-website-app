import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CoachComponent } from './coach/coach.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				redirectTo: '/',
				pathMatch: 'full',
			},
		],
	},
	{
		path: 'entrenadores',
		component: CoachesComponent,
	},
	{
		path: 'entrenador',
		children: [
			{
				path: '',
				redirectTo: '/entrenadores',
				pathMatch: 'full',
			},
		],
	},
	{
		path: 'entrenador/:name',
		component: CoachComponent,
	},
	{
		path: 'entrenamientos',
		component: CoursesComponent,
	},
	{
		path: 'entrenamiento',
		children: [
			{
				path: '',
				redirectTo: '/entrenamientos',
				pathMatch: 'full',
			},
		],
	},
	{
		path: 'entrenamiento/:name',
		component: CourseComponent,
	},
	{
		path: 'registro',
		component: RegisterComponent,
	},
	{
		path: 'registro/:course',
		component: RegisterComponent,
	},
	{
		path: 'contacto',
		component: ContactUsComponent,
	},
	{
		path: 'politica-privacidad',
		component: PolicyComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class SiteRoutingModule {}
