import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArturoMonroyComponent } from './arturo-monroy/arturo-monroy.component';
import { BrandonCidComponent } from './brandon-cid/brandon-cid.component';
import { CristinaYanezComponent } from './cristina-yanez/cristina-yanez.component';
import { DianaChavezComponent } from './diana-chavez/diana-chavez.component';
import { ErickChavezComponent } from './erick-chavez/erick-chavez.component';
import { SimonCervantesComponent } from './simon-cervantes/simon-cervantes.component';
import { UlisesChavezComponent } from './ulises-chavez/ulises-chavez.component';
import { VanessaChavezComponent } from './vanessa-chavez/vanessa-chavez.component';

@NgModule({
	declarations: [
		ErickChavezComponent,
		CristinaYanezComponent,
		UlisesChavezComponent,
		VanessaChavezComponent,
		DianaChavezComponent,
		BrandonCidComponent,
		ArturoMonroyComponent,
		SimonCervantesComponent,
	],
	exports: [
		ErickChavezComponent,
		CristinaYanezComponent,
		UlisesChavezComponent,
		VanessaChavezComponent,
		DianaChavezComponent,
		BrandonCidComponent,
		ArturoMonroyComponent,
		SimonCervantesComponent,
	],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CoachesModule {}
