import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppSettings, doLog } from '@services/app-settings';
import { DataManagerService } from '../../../services/data-manager.service';

import * as _ from 'lodash';

export interface FormModel {
	captcha?: string;
}

declare let $: any;

const LOG_TAG = '[shared/contact-form]';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, AfterViewInit {
	public formInvalid: boolean = true;

	public requestForm: FormGroup;

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
	get captchaToken() {
		return this.requestForm.get('captchaToken');
	}
	get subject() {
		return this.requestForm.get('subject');
	}

	public captchaKey: string;

	constructor(private appSettings: AppSettings, private _dataManager: DataManagerService) {
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


	public ngOnInit() {
		this.requestForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(4)]),
			phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
			email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
			captchaToken: new FormControl('', [Validators.required, Validators.minLength(30)]),
			messageText: new FormControl('', [Validators.required, Validators.minLength(10)]),
			subject: new FormControl('', [Validators.required, Validators.minLength(4)]),
		});
		if ($) {
			$('.message-sent').fadeOut();
		}
	}

	public async submitForm() {
		const { value: formValue } = this.requestForm || {};
		if (formValue && $) {
			$('.uk-preloader').fadeIn();
			const response = await this._dataManager.sendEmail(formValue);
			doLog && console.log(LOG_TAG, 'submitForm', response);
			$('.uk-preloader').fadeOut();
			$('.message-sent').fadeIn();
			_.delay(() => {
			$('.message-sent').fadeOut();

			}, 5000); 
			this.requestForm.reset();
		}
	}
}
