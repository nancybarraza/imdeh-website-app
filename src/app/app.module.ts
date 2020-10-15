import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';

import { CoachesModule, CoursesModule } from './static/';

import { SiteModule } from './components/site/';

import { SharedModule } from '@shared/index';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, CoachesModule, CoursesModule, SiteModule, SharedModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
