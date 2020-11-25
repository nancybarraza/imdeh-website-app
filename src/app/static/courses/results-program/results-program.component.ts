import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
	public readonly galleryImages: string[];
	constructor() {
		//
	}

	/**
	 * @method ngOnInit
	 * Initializes the component lifecycle.
	 * Loading all the required data to display in the template.
	 * @return {void}
	 */
	public ngOnInit(): void {}

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

	public submitForm(event): void {
		const { value: formValue } = this.requestForm || {};
		if (formValue) {
			$('.uk-preloader').fadeIn();
		}
	}
}
