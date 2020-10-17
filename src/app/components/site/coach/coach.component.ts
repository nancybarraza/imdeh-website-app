import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { StaticManagerService } from '@services/index';

import { IStaticData } from '@interfaces/index';

import { Subscription } from 'rxjs';

import * as _ from 'lodash';

@Component({
	selector: 'app-coach',
	templateUrl: './coach.component.html',
	styleUrls: ['./coach.component.scss'],
})
export class CoachComponent implements OnInit, OnDestroy {
	/**
	 * @property {IStaticData} coachData
	 * Stores the coach data filtered by the route parameter to display it in the template
	 */
	public coachData: IStaticData;

	public coachesList: IStaticData[];

	public prevPage: {
		title: string;
		path: string;
	};

	public nextPage: {
		title: string;
		path: string;
	};

	/**
	 * @property {String} currentPath
	 * Stores the current path retrieved by the url parameter using the router subscription
	 * We will use its value to compare the path where the user is located and
	 * get the data to display.
	 */
	public currentPath: string;

	/**
	 * @property {Subscription} routerSubscription Stores the router subscription in the component.
	 */
	private routerSubscription: Subscription;

	constructor(private staticManager: StaticManagerService, private _route: ActivatedRoute) {}

	/**
	 * @method ngOnInit
	 * Initializes the component lifecycle.
	 * Loading all the required data to display in the template.
	 * @return {void}
	 */
	public ngOnInit(): void {
		this.routerSubscription = this._route.paramMap.subscribe((params: ParamMap) => {
			this.currentPath = params.get('name');
			if (this.currentPath) {
				this.loadCoachData();
				this.loadAllCoaches();
				console.log(this.coachData, this.currentPath);
			}
		});
	}

	/**
	 * @method displayTemplate
	 * Validates the current coach data  received by the parameter and the current path subscribed
	 * against the variable of the template to display.
	 * @param {String} template receives the parameter of the template variable to compare and display
	 * @return {Boolean}
	 */
	public displayTemplate(template: string): boolean {
		return this.coachData && this.coachData.path === this.currentPath && this.currentPath === template;
	}

	private generatePaginator() {
		const currentIndexPage = _.findIndex(this.coachesList, (coach) => {
			return coach.name === this.coachData.name;
		});
		const previousPage = this.coachesList[currentIndexPage - 1];
		const nextPage = this.coachesList[currentIndexPage + 1];
		if (previousPage) {
			this.prevPage = {
				title: previousPage.name,
				path: previousPage.path,
			};
		} else {
			this.prevPage = {
				title: this.coachData.name,
				path: this.coachData.path,
			};
		}
		if (nextPage) {
			this.nextPage = {
				title: nextPage.name,
				path: nextPage.path,
			};
		} else {
			this.nextPage = {
				title: this.coachData.name,
				path: this.coachData.path,
			};
		}
	}

	private async loadAllCoaches() {
		try {
			const results = (await this.staticManager.getAllCoaches()) || [];
			if (results && results.length > 0) {
				this.coachesList = results;
				this.generatePaginator();
			}
		} catch (err) {
			throw new Error(`Error trying to get static data from service ${JSON.stringify(err)}`);
		}
	}

	/**
	 * @method loadCoachData
	 * Loads the coach data from files stored statically.
	 * It will help the template to render the information properly.
	 * @return {void}
	 */
	private async loadCoachData() {
		try {
			const results = (await this.staticManager.getCoachByPath(this.currentPath)) || [];
			if (results) {
				this.coachData = results;
				console.log(this.coachData.path === this.currentPath);
			}
		} catch (err) {
			throw new Error(`Error trying to get static data from service ${JSON.stringify(err)}`);
		}
	}

	/**
	 * @method ngOnDestroy
	 * Destroys the component and remove all the current subscriptions.
	 * @return {void}
	 */
	public ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}
}
