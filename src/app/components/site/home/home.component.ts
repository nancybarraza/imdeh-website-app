import { Component, OnInit } from '@angular/core';

import { StaticManagerService } from '@services/index';

import { IStaticData } from '@interfaces/index';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	/**
	 * @property {IStaticData[]} coachesList[]} coachesList Stores the coaches list data to inject in the template
	 */
	public coachesList: IStaticData[] = [];

	/**
	 * @property {IStaticData[]} coursesList[]} coursesList Stores the coaches list data to inject in the template
	 */
	public coursesList: IStaticData[] = [];

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
		this.loadAllStaticData();
	}

	/**
	 * @method loadAllStaticData
	 * Loads all the static data from files stored statically.
	 * It will help the template to render the information properly.
	 * @return {void}
	 */
	private async loadAllStaticData() {
		try {
			const results = (await this.staticManager.getAllData()) || {};
			const { coachesList = [], coursesList = [] } = results || {};
			this.coursesList = coursesList;
			this.coachesList = coachesList;
		} catch (err) {
			throw new Error(`Error trying to get static data from service ${JSON.stringify(err)}`);
		}
	}
}
