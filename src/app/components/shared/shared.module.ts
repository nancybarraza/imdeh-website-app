import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarouselComponent } from './carousel/carousel.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingComponent } from './loading/loading.component';
import { RequestModalComponent } from './request-modal/request-modal.component';

@NgModule({
	declarations: [CarouselComponent, DialogComponent, LoadingComponent, RequestModalComponent],
	exports: [CarouselComponent, DialogComponent, LoadingComponent, RequestModalComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
