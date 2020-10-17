import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-master',
	templateUrl: './master.component.html',
	styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
	/**
	 * @property {String[]} galleryImages Stores the gallery images to display in the carousel in front-end.
	 * Adding the property readonly to prevent UI modifications or possible injectors.
	 * @readonly
	 */
	public readonly galleryImages: string[] = [
		'assets/img/imdeh/master.jpg',
		'assets/img/imdeh/master-2.jpeg',
		'assets/img/imdeh/master-3.jpeg',
	];
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
