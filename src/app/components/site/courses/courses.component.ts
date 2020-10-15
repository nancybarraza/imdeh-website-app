import { Component, OnInit } from '@angular/core';

import { StaticManagerService } from '@services/index';

import { IStaticData } from '@interfaces/index';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
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
		this.loadAllCourses();
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
}
