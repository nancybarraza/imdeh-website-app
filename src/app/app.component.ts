import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Meta, Title } from '@angular/platform-browser';

import { filter, map } from 'rxjs/operators';

import { COACHES_LIST, COURSES_LIST } from './static';

import { Subscription } from 'rxjs';

declare let $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	/**
	 * @property {String} location
	 * Stores the current url retrieved by the router subscription
	 * @private
	 */
	private location: string;

	/**
	 * @property {Subscription} routerSubscription Stores the router subscription in the component.
	 */
	private routerSubscription: Subscription;

	/**
	 * @property {String} title Stores the website title
	 */
	public title = 'imdeh-website-app';

	constructor(private router: Router, private titleService: Title, private metaService: Meta, private activatedRoute: ActivatedRoute) {}

	/**
	 * @method ngOnInit
	 * Initializes the component lifecycle.
	 * Loading all the required functionalities from js scripts.
	 * @return {void}
	 */
	public ngOnInit() {
		this.recallJsFuntions();
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => {
					const currentRoute = this.activatedRoute.firstChild.snapshot;
					this.setupMetaTags(currentRoute);
					return this.createTitle(currentRoute);			
				})
			)
			.subscribe((title: string) => {
				this.titleService.setTitle(title);
			});
	}

	/**
	 * @method recallJsFuntions
	 * Recalls all the required scripts to embed the jquery and
	 * javascript functionalities to load in the template.
	 * @return {void}
	 */
	private recallJsFuntions() {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				$('.uk-preloader').fadeIn();
			}
		});
		this.routerSubscription = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel))
			.subscribe((event) => {
				$.getScript('../assets/js/custom.js');
				$('.uk-preloader').fadeOut();
				this.location = this.router.url;
				if (!(event instanceof NavigationEnd)) {
					return;
				}
				window.scrollTo(0, 0);
			});
	}

	private setupMetaTags(route) {
		const { params, data, url } = route;
		const { metas = [] } = data || {};
		const { name: sectionName = '', course: sectionCourse = '' } = params;
		const { path: sectionPath = '' } = url[0] || {};

		const currentTags = this.metaService.getTags('name');
		
		if (currentTags.find(t => t.name === 'keywords' || t.name === 'description')) {
			this.metaService.removeTag('name="keywords"');
			this.metaService.removeTag('name="description"');
		}

		if (!sectionPath) {
			this.metaService.addTags(metas);
			return;
		}

		if ((sectionCourse && sectionCourse !== '') || (sectionName && sectionName !== '')) {
			const section = sectionName || sectionCourse;
			const { metas: metaData = [] } = this.getCourseData(section) || this.getCoachData(section);
			if (metaData.length > 0) {
				this.metaService.addTags(metaData);
			}
			return;
		}
			
		this.metaService.addTags(metas);
		
	}

	/**
	 * @method createTitle
	 * Creates the dynamic title to render in the header based on the route parameters.
	 * @param {object} route Stores the route parameters.
	 * @return {string}
	 */
	private createTitle(route) {
		const { params, data, url } = route;
		const { title = '' } = data;
		const { name: sectionName = '', course: sectionCourse = '' } = params;
		const { path: sectionPath = '' } = url[0] || {};
		let newTitle = this.titleService.getTitle();
		if (sectionPath && sectionPath !== '' &&
			((sectionName && sectionName !== '') || (sectionCourse !== '' && sectionCourse !== ''))) {
			if (sectionPath === 'entrenador') {
				const { name: coachName = ''} = this.getCoachData(sectionName) || {name: ''};
				newTitle = title.replace(':name', coachName);
			}
			if (sectionPath === 'entrenamiento') {
				const { name: courseName = ''} = this.getCourseData(sectionName) || {name: ''};
				newTitle = title.replace(':name', courseName);
			}
			if (sectionPath === 'registro') {
				const { name: courseName = ''} = this.getCourseData(sectionCourse) || {name: ''};
				newTitle = title.replace(':course', courseName);
			}
		} else {
				newTitle = title;
		}
		return newTitle;
	}

	/**
	 * @method getCourseData
	 * Retrieves the course data from the route selected. 
	 * @param {object} item stores the item data
	 * @return {void}
	 */
	private getCourseData(item) {
		return COURSES_LIST.find((course) => {
			return course.path === item;
		});
	}

	/**
	 * @method getCoachData
	 * Retrieves the coach data from the route selected. 
	 * @param {object} item stores the item data
	 * @return {void}
	 */
	private getCoachData(item) {
		return COACHES_LIST.find((coach) => {
			return coach.path === item;
		});
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
