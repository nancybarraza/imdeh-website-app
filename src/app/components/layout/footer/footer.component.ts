import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	providers: [
		Location,
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy,
		},
	],
})
export class FooterComponent implements OnInit {
	public location: any;

	constructor(private router: Router, location: Location) {}

	public ngOnInit() {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.location = this.router.url;
			}
		});
	}
}
