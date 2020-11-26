import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { CarouselComponent } from './carousel/carousel.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingComponent } from './loading/loading.component';
import { RequestModalComponent } from './request-modal/request-modal.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
	declarations: [CarouselComponent, DialogComponent, LoadingComponent, RequestModalComponent, RegisterFormComponent],
	exports: [CarouselComponent, DialogComponent, LoadingComponent, RequestModalComponent, RegisterFormComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, RecaptchaFormsModule, RecaptchaModule],
})
export class SharedModule {}
