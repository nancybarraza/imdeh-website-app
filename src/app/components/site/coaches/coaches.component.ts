import { Component, OnInit } from '@angular/core';

import { StaticManagerService } from '@services/index';

import { IStaticData } from '@interfaces/index';

@Component({
	selector: 'app-coaches',
	templateUrl: './coaches.component.html',
	styleUrls: ['./coaches.component.scss'],
})
export class CoachesComponent implements OnInit {
	/**
	 * @property {IStaticData[]} coachesList[]} coachesList Stores the coaches list data to inject in the template
	 */
	public coachesList: IStaticData[] = [];

	constructor(private staticManager: StaticManagerService) {
		//
	}

	/**
	 * @method ngOnInit
	 * Initializes the component lifecycle.
	 * Loading all the required data to display in the template.
	 * @return {void}
	 */
	public async ngOnInit() {
		this.loadAllCoaches();
	}

	/**
	 * @method loadAllCoaches
	 * Loads all the courses data from files stored statically.
	 * It will help the template to render the information properly.
	 * @return {void}
	 */
	private async loadAllCoaches() {
		try {
			const results = (await this.staticManager.getAllCoaches()) || [];
			if (results && results.length > 0) {
				this.coachesList = results;
				console.log(this.coachesList);
			}
		} catch (err) {
			throw new Error(`Error trying to get static data from service ${JSON.stringify(err)}`);
		}
	}
}
