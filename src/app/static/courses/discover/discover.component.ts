import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-discover',
	templateUrl: './discover.component.html',
	styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
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
