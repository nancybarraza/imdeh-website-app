import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSettings } from '@services/app-settings';

export interface FormModel {
	captcha?: string;
}

declare let $: any;

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements AfterViewInit {
	public formInvalid: boolean = true;

	public requestForm: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(4)]),
		lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
		phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
		email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
		captcha: new FormControl('', [Validators.required, Validators.minLength(4)]),
	});

	get name() {
		return this.requestForm.get('name');
	}
	get lastName() {
		return this.requestForm.get('lastName');
	}
	get email() {
		return this.requestForm.get('email');
	}
	get phone() {
		return this.requestForm.get('phone');
	}
	get captcha() {
		return this.requestForm.get('captcha');
	}

	public captchaKey: string;

	constructor(private appSettings: AppSettings) {
		this.captchaKey = this.appSettings.getCaptchaKey();
	}

	public ngAfterViewInit(): void {
		if (!this.requestForm) {
			return;
		}
		this.requestForm.statusChanges.subscribe((status) => {
			this.formInvalid = status === 'INVALID';
		});
	}

	public submitForm(event): void {
		const { value: formValue } = this.requestForm || {};
		if (formValue) {
			$('.uk-preloader').fadeIn();
		}
	}
}
