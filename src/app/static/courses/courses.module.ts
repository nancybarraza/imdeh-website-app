import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { DiscoverComponent } from './discover/discover.component';
import { EmbersComponent } from './embers/embers.component';
import { HighDirectionComponent } from './high-direction/high-direction.component';
import { MasterComponent } from './master/master.component';
import { RebirthComponent } from './rebirth/rebirth.component';
import { ResultsProgramComponent } from './results-program/results-program.component';
import { ShadowComponent } from './shadow/shadow.component';
import { TorchComponent } from './torch/torch.component';

import { DataManagerService } from '@services/data-manager.service';
import { WebServices } from '@services/webservices.service';

import { SharedModule } from '@shared/index';

@NgModule({
	declarations: [
		DiscoverComponent,
		RebirthComponent,
		ResultsProgramComponent,
		HighDirectionComponent,
		MasterComponent,
		ShadowComponent,
		EmbersComponent,
		TorchComponent,
	],
	exports: [
		DiscoverComponent,
		RebirthComponent,
		ResultsProgramComponent,
		HighDirectionComponent,
		MasterComponent,
		ShadowComponent,
		EmbersComponent,
		TorchComponent,
	],
	imports: [
		HttpClientModule,
		CommonModule,
		FormsModule,
		SharedModule,
		RouterModule,
		ReactiveFormsModule,
		RecaptchaFormsModule,
		RecaptchaModule,
	],
	providers: [AppSettings, DataManagerService, WebServices, HttpClient],
})
export class CoursesModule {}
