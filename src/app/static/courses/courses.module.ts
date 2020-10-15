import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DiscoverComponent } from './discover/discover.component';
import { EmbersComponent } from './embers/embers.component';
import { HighDirectionComponent } from './high-direction/high-direction.component';
import { MasterComponent } from './master/master.component';
import { RebirthComponent } from './rebirth/rebirth.component';
import { ResultsProgramComponent } from './results-program/results-program.component';
import { ShadowComponent } from './shadow/shadow.component';
import { TorchComponent } from './torch/torch.component';

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
	imports: [CommonModule, FormsModule, SharedModule, ReactiveFormsModule],
})
export class CoursesModule {}
