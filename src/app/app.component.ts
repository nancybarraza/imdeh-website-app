import { Component, OnDestroy, OnInit } from '@angular/core';

import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

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

	constructor(private router: Router) {}

	/**
	 * @method ngOnInit
	 * Initializes the component lifecycle.
	 * Loading all the required functionalities from js scripts.
	 * @return {void}
	 */
	public ngOnInit() {
		this.recallJsFuntions();
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

	/**
	 * @method ngOnDestroy
	 * Destroys the component and remove all the current subscriptions.
	 * @return {void}
	 */
	public ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}
}
