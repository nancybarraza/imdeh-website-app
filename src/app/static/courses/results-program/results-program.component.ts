import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { DataManagerService } from '@services/data-manager.service';

import { doLog } from '@services/app-settings';

import * as _ from 'lodash';

const LOG_TAG = '[static/courses/results-program]';

declare let $: any;

@Component({
	selector: 'app-results-program',
	templateUrl: './results-program.component.html',
	styleUrls: ['./results-program.component.scss'],
})
export class ResultsProgramComponent implements AfterViewInit, OnInit {
	@ViewChild('requestModal') public requestModal: any;

	public formInvalid: boolean = true;

	public requestForm: FormGroup;

	/**
	 * @property {String[]} galleryImages Stores the gallery images to display in the carousel in front-end.
	 * Adding the property readonly to prevent UI modifications or possible injectors.
	 * @readonly
	 */
	public readonly galleryImages: string[] = [
		'assets/img/imdeh/pl1.jpeg',
		'assets/img/imdeh/pl2.jpeg',
		'assets/img/imdeh/pl4.jpeg',
		'assets/img/imdeh/pl6.jpeg',
		'assets/img/imdeh/pl7.jpeg',
		'assets/img/imdeh/pl9.jpeg',
	];
	constructor(private _dataManager: DataManagerService) {}

	/**
	 * @method ngOnInit
	 * Initializes the component lifecycle.
	 * Loading all the required data to display in the template.
	 * @return {void}
	 */
	public ngOnInit(): void {
		if ($) {
			$('.message-sent').fadeOut();
		}
	}

	public ngAfterViewInit(): void {
		const { submitForm } = this.requestModal || {};
		this.requestForm = submitForm;
		if (!this.requestForm) {
			return;
		}
		this.requestForm.statusChanges.subscribe((status) => {
			this.formInvalid = status === 'INVALID';
		});
	}

	public async submitForm() {
		const { value: formValue } = this.requestForm || {};
		if (formValue && $) {
			$('.uk-preloader').fadeIn();
			const response = await this._dataManager.sendEmail(formValue);
			doLog && console.log(LOG_TAG, 'submitForm', response);
			$('.uk-preloader').fadeOut();
			$('.message-sent').fadeIn();
			this.requestForm.reset();
		}
	}
}
