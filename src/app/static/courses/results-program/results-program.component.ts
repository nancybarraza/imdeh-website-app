import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-results-program',
	templateUrl: './results-program.component.html',
	styleUrls: ['./results-program.component.scss'],
})
export class ResultsProgramComponent implements OnInit {
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
}
