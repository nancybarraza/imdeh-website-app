import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormModel {
	captcha?: string;
}
declare let $: any;

@Component({
	selector: 'app-request-modal',
	templateUrl: './request-modal.component.html',
	styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
	@Input('course') public course: string;

	private courseName: string;
	public displayForm = false;
	public submitForm;

	get name() {
		return this.submitForm.get('name');
	}
	get lastName() {
		return this.submitForm.get('lastName');
	}
	get email() {
		return this.submitForm.get('email');
	}
	get phone() {
		return this.submitForm.get('phone');
	}
	get captchaToken() {
		return this.submitForm.get('captchaToken');
	}

	constructor() {
		//
	}

	public ngOnInit(): void {
		this.courseName = `Entrenamiento ${this.course}`;
		this.submitForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(4)]),
			lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
			phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
			email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
			captchaToken: new FormControl('', [Validators.required, Validators.minLength(30)]),
			messageText: new FormControl('', [Validators.required, Validators.minLength(10)]),
			subject: new FormControl(this.courseName),
		});
		if ($) {
			$('.message-sent').fadeOut();
		}
	}
}
