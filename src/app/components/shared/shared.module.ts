import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarouselComponent } from './carousel/carousel.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
	declarations: [CarouselComponent, DialogComponent, LoadingComponent],
	exports: [CarouselComponent, DialogComponent, LoadingComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
