import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { CarouselComponent } from './carousel/carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingComponent } from './loading/loading.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RequestModalComponent } from './request-modal/request-modal.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
	declarations: [
		CarouselComponent,
		ContactFormComponent,
		DialogComponent,
		LoadingComponent,
		RequestModalComponent,
		RegisterFormComponent,
	],
	exports: [CarouselComponent, ContactFormComponent, DialogComponent, LoadingComponent, RequestModalComponent, RegisterFormComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, RecaptchaFormsModule, RecaptchaModule, NgxPayPalModule],
})
export class SharedModule {}
