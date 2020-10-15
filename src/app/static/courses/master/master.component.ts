import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-master',
	templateUrl: './master.component.html',
	styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
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
