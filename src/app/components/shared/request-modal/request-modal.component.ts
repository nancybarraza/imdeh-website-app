import { AfterContentChecked, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormModel {
	captcha?: string;
}

@Component({
	selector: 'app-request-modal',
	templateUrl: './request-modal.component.html',
	styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements AfterContentChecked {
	@Input('course') public course: string;

	public displayForm = false;
	public submitForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(4)]),
		lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
		phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
		email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
		captcha: new FormControl('', [Validators.required, Validators.minLength(4)]),
	});

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
	get captcha() {
		return this.submitForm.get('captcha');
	}

	constructor() {
		//
	}

	public ngAfterContentChecked(): void {}
}
