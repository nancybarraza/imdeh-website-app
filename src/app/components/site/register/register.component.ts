import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { DataManagerService, StaticManagerService } from '@services/index';

import { IStaticData } from '@interfaces/index';

declare let window: any;

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
	/**
	 * @property {IStaticData[]} coursesList[]} coursesList Stores the coaches list data to inject in the template
	 */
	public coursesList: IStaticData[] = [];

	/**
	 * @property {IStaticData} courseData
	 * Stores the course data filtered by the route parameter to display it in the template
	 */
	public courseData;

	/**
	 * @property {Boolean} isFormSubmitted Receives the validation if the form was submitted or not.
	 */
	public isFormSubmitted = false;

	public formData;

	/**
	 * @property {String} currentPath
	 * Stores the current path retrieved by the url parameter using the router subscription
	 * We will use its value to compare the path where the user is located and
	 * get the data to display.
	 * @private
	 */
	private currentPath: string;

	/**
	 * @property {Subscription} routerSubscription Stores the router subscription in the component.
	 */
	private routerSubscription: Subscription;

	constructor(private staticManager: StaticManagerService, private _route: ActivatedRoute, private dataManager: DataManagerService) {}

	/**
	 * @method ngOnInit
	 * Description
	 * @return {void}
	 */
	public ngOnInit(): void {
		this.loadAllCourses();
		this.routerSubscription = this._route.paramMap.subscribe((params: ParamMap) => {
			this.currentPath = params.get('course');
			if (this.currentPath) {
				this.loadCourseData();
			}
		});
	}

	public onFormSubmitted(event) {
		const { isFormSubmitted = false, formData = {} } = event || {};
		this.isFormSubmitted = isFormSubmitted;
		this.formData = formData;
		window.scrollTo(0, 0);
	}

	public displayPaymentDetails() {
		if (!this.formData) {
			return;
		}
		let paymentDetails;
		switch (this.formData.paymentType) {
			case 'office':
				paymentDetails = `Pago en Oficinas. \n Recuerda que para que tu lugar quede reservado, debes realizar tu pago a la brevedad.`;
				break;
			case 'transfer':
				paymentDetails = `Pago con Depósito o Transferencia Bancaria. \n Recuerda que para que tu lugar quede reservado, debes realizar tu pago a la brevedad. <br> Una vez realizado, envia tu comprobante a coordinacion@imdeh.com.mx`;
				break;
			case 'paypal':
				const paymentStatus = this.formData.paymentStatus.status === 'COMPLETED' ? 'COMPLETADO' : 'PENDIENTE DE APROBACIÓN';
				paymentDetails = `Pago línea con tarjeta o Paypal el estado de pago es ${paymentStatus}, confirma con coordinación, la completitud de tu pago`;
				break;
			default:
				//
				break;
		}
		return paymentDetails;
	}

	/**
	 * @method loadCourseData
	 * Loads the course data from files stored statically.
	 * It will help the template to render the information properly.
	 * @return {void}
	 */
	private async loadCourseData() {
		try {
			const results: any = (await this.dataManager.getCoursebyPath(this.currentPath)) || {};

			if (results.course) {
				this.courseData = results.course;

				console.log(this.courseData);
			}
		} catch (err) {
			throw new Error(`Error trying to get static data from service ${JSON.stringify(err)}`);
		}
	}

	/**
	 * @method loadAllCourses
	 * Loads all the courses data from files stored statically.
	 * It will help the template to render the information properly.
	 * @return {void}
	 */
	private async loadAllCourses() {
		try {
			const results = (await this.staticManager.getAllCourses()) || [];
			if (results && results.length > 0) {
				this.coursesList = results;
			}
		} catch (err) {
			throw new Error(`Error trying to get static data from service ${JSON.stringify(err)}`);
		}
	}

	public ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}
}
