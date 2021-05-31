import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppSettings, doLog } from '@services/app-settings';

import { DataManagerService } from '@services/data-manager.service';

import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

import * as _ from 'lodash';

export interface FormModel {
	captcha?: string;
}
declare let $: any;

const LOG_TAG = '[components/shared/register-form]';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit, OnChanges {
	@Input('course') public course;

	@Output('formSubmitted') public formSubmitted: EventEmitter<{
		formData: FormGroup;
		isFormSubmitted: boolean;
	}> = new EventEmitter();

	public isPaypalSelected: boolean = false;

	public submitForm;

	public captchaKey: string;

	public paymentDescription: string;

	private trainingPrice;

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
	get imoName() {
		return this.submitForm.get('imoName');
	}
	get imoLastName() {
		return this.submitForm.get('imoLastName');
	}
	get imoEmail() {
		return this.submitForm.get('imoEmail');
	}
	get imoPhone() {
		return this.submitForm.get('imoPhone');
	}
	get captchaToken() {
		return this.submitForm.get('captchaToken');
	}
	get paymentType() {
		return this.submitForm.get('paymentType');
	}

	get isTermsAccepted() {
		return this.submitForm.get('isTermsAccepted');
	}

	private get paymentStatus() {
		return this.submitForm.get('paymentStatus');
	}

	public paypalConfig: IPayPalConfig;

	private paymentDescriptionList = {
		office: 'Para pagar en oficinas, visítanos de 12:00pm a 10:00pm de Lunes a Domingo.',
		transfer: `Realiza tu depósito o transferencia bancaria a:<br>
		 <b>Frecuencia 4, S.C. - BBVA Bancomer</b><br>
		 Cuenta: 011457613<br>
		 Cuenta Clabe: 012180001141576135`,
		paypal:
			'Al seleccionar paypal, podrás pagar con tu tarjeta de crédito y aceptas que se agregarán cargos de comisiones por pago en línea de un 5%.',
	};

	constructor(private appSettings: AppSettings, private _dataManager: DataManagerService) {
		this.captchaKey = this.appSettings.getCaptchaKey();
	}

	public ngOnInit(): void {
		this.submitForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(4)]),
			lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
			phone: new FormControl('', [Validators.required, Validators.minLength(4)]),
			email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
			imoName: new FormControl('', [Validators.required, Validators.minLength(4)]),
			imoLastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
			imoPhone: new FormControl('', [Validators.required, Validators.minLength(4)]),
			imoEmail: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
			// captchaToken: new FormControl('', [Validators.required, Validators.minLength(30)]),
			paymentType: new FormControl('office', [Validators.required]),
			isTermsAccepted: new FormControl(false, [Validators.requiredTrue]),
			paymentStatus: new FormControl({}),
		});
		if ($) {
			$('.message-sent').fadeOut();
		}
		this.selectPaymentType(null, { value: 'office' });
		this.setPaypalConfig();
	}

	public ngOnChanges(changes: SimpleChanges) {
		const { course } = changes || {};
		this.course = course.currentValue || {};
	}

	public selectPaymentType(event, element): void {
		element.checked = true;
		const { value: paymentSelected } = element;
		this.paymentType.value = paymentSelected;
		this.paymentDescription = this.paymentDescriptionList[`${paymentSelected}`];
		this.isPaypalSelected = paymentSelected === 'paypal';
		this.trainingPrice = this.isPaypalSelected ? this.course.price * 1.05 : this.course.price;
	}

	public async submitRequest() {
		// submitForm
		if (this.submitForm.valid) {
			$('.uk-preloader').fadeIn();
			this.sendRegisterRequest();
		}
	}

	private setPaypalConfig() {
		this.paypalConfig = {
			currency: 'MXN',
			clientId: this.appSettings.getPaypalClientId(),
			/* disable-ts-lint */
			createOrderOnClient: (data) =>
				/* tslint:disable-next-line */
				<ICreateOrderRequest>{
					intent: 'CAPTURE',
					purchase_units: [
						{
							amount: {
								currency_code: 'MXN',
								value: this.trainingPrice,
								breakdown: {
									item_total: {
										currency_code: 'MXN',
										value: this.trainingPrice,
									},
								},
							},
							items: [
								{
									name: `Registro a ${this.course.name}`,
									quantity: '1',
									category: 'DIGITAL_GOODS',
									unit_amount: {
										currency_code: 'MXN',
										value: this.trainingPrice,
									},
								},
							],
						},
					],
				},
			advanced: {
				commit: 'true',
			},
			style: {
				label: 'paypal',
				layout: 'vertical',
			},
			onApprove: (data, actions) => {
				$('.uk-preloader').fadeIn();

				doLog && console.log(LOG_TAG, 'onApprove - transaction was approved, but not authorized', JSON.stringify(data), actions);
				actions.order.get().then((details) => {
					doLog && console.log(LOG_TAG, 'onApprove - you can get full order details inside onApprove: ', JSON.stringify(details));
					/* tslint:disable:no-string-literal */
					const paymentDetails = {
						create_time: details.create_time,
						id: details.id,
						intent: details.intent,
						status: details.status,
						payer: details.payer,
						purchase_units: details.purchase_units,
					};
					/* tslint:enable */
					const paymentStatus = 'paymentStatus';
					this.submitForm.controls[paymentStatus].setValue(paymentDetails);
				});
			},
			onClientAuthorization: (data) => {
				doLog &&
					console.log(
						LOG_TAG,
						'onClientAuthorization - you should probably inform your server about completed transaction at this point',
						JSON.stringify(data)
					);
				/* tslint:disable:no-string-literal */
				const paymentDetails = {
					create_time: data.create_time,
					id: data.id,
					intent: data.intent,
					status: data.status,
					payer: data.payer,
					purchase_units: data.purchase_units,
				};
				/* tslint:enable */
				const paymentStatus = 'paymentStatus';
				this.submitForm.controls[paymentStatus].setValue(paymentDetails);

				this.sendRegisterRequest();
			},
			onCancel: (data, actions) => {
				doLog && console.log(LOG_TAG, 'OnCancel', data, actions);
			},
			onError: (err) => {
				doLog && console.log(LOG_TAG, 'OnError', err);
			},
			onClick: (data, actions) => {
				doLog && console.log(LOG_TAG, 'onClick', data, actions);
			},
		};
	}

	private async sendRegisterRequest() {
		const { value: formValue } = this.submitForm || {};
		console.log(formValue);
		if (formValue && $) {
			const response = await this._dataManager.sendRegisterEmail(formValue);
			doLog && console.log(LOG_TAG, 'submitForm', response);
			$('.uk-preloader').fadeOut();
			$('.message-sent').fadeIn();
			_.delay(() => {
				$('.message-sent').fadeOut();
			}, 5000);
			this.formSubmitted.emit({
				formData: formValue,
				isFormSubmitted: true,
			});
		}
		this.submitForm.reset();
	}
}
