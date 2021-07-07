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
		data: {
			title: 'Instituto Mexicano de Desarrollo Humano',
		metas: [
				{ name: 'description', content: 'El Instituto Mexicano de desarrollo humano cuenta con diferentes entrenamientos enfocados en desarrollo humano, liderazgo y alcance de objetivosConoce nuestros entrenadores y facilitadores de talleres de coaching en desarrollo humano.' },
				{ name: 'keywords', content: 'coaching, desarrollo humano, instituto, superación personal, potencial humano, liderazgo' }  
		]}
	},
	{
		path: 'entrenadores',
		component: CoachesComponent,
		data: { title: 'Conoce nuestros entrenadores | IMDEH', metas: [
				{ name: 'description', content: 'Conoce nuestros entrenadores y facilitadores de talleres de coaching en desarrollo humano.' },
				{ name: 'keywords', content: 'coach, entrenador, entrenadora, coaching, desarrollo humano, instituto, superación personal, potencial humano, liderazgo' }  
		] },
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
		data: {
			title: 'Conoce a :name | IMDEH', metas: [
				{ name: 'description', content: '' },
				{ name: 'keywords', content: '' }  
		] },
	},
	{
		path: 'entrenamientos',
		component: CoursesComponent,
		data: { title: 'Entrenamientos | IMDEH', metas: [
				{ name: 'description', content: 'Conoce nuestros catálogo de cursos de coaching en desarrollo humano para alcanzar tu máximo potencial.' },
				{ name: 'keywords', content: 'coaching, desarrollo humano, instituto, superación personal, potencial humano, liderazgo' }  
		]},

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
		data: { title: 'Entrenamiento :name | IMDEH', metas: [
				{ name: 'description', content: '' },
				{ name: 'keywords', content: '' }  
		]},
	},
	{
		path: 'registro',
		component: RegisterComponent,
		data: { title: 'Registro | IMDEH' },
	},
	{
		path: 'registro/:course',
		component: RegisterComponent,
		data: { title: 'Registro a :course | IMDEH' },
	},
	{
		path: 'contacto',
		component: ContactUsComponent,
		data: { title: 'Ponte en contacto con nosotros | IMDEH',  metas: [
				{ name: 'description', content: 'Contácta a nuestros coordinadores' },
				{ name: 'keywords', content: 'contacto, coaching, desarrollo humano, instituto, superación personal, potencial humano, liderazgo' }  
		] },
	},
	{
		path: 'politica-privacidad',
		component: PolicyComponent,
		data: { title: 'Políticas de Privacidad | IMDEH' },
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class SiteRoutingModule {}
