import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { StaticManagerService } from '@services/index';

import { IStaticData } from '@interfaces/index';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	/**
	 * @property {IStaticData[]} coursesList[]} coursesList Stores the coaches list data to inject in the template
	 */
	public coursesList: IStaticData[] = [];

	/**
	 * @property {IStaticData} courseData
	 * Stores the course data filtered by the route parameter to display it in the template
	 */
	public courseData: IStaticData;

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

	constructor(private staticManager: StaticManagerService, private _route: ActivatedRoute) {}


	public ngOnInit(): void {
		this.loadAllCourses();
		this.routerSubscription = this._route.paramMap.subscribe((params: ParamMap) => {
			this.currentPath = params.get('course');
			if (this.currentPath) {
				this.loadCourseData();
			}
		});
	}

	/**
	 * @method loadCourseData
	 * Loads the course data from files stored statically.
	 * It will help the template to render the information properly.
	 * @return {void}
	 */
	private async loadCourseData() {
		try {
			const results = (await this.staticManager.getCoursebyPath(this.currentPath)) || [];
			if (results) {
				this.courseData = results;
				console.log(this.courseData.path === this.currentPath);
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
}
