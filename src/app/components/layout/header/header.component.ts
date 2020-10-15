import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare let UIkit: any;

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	providers: [
		Location,
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy,
		},
	],
})
export class HeaderComponent implements OnInit {
	public location: any;
	public logo: any;
	public navClass: any;

	constructor(private router: Router, location: Location) {}

	public ngOnInit() {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.location = this.router.url;
				if (this.location === '/') {
					this.logo = 'logo.png';
					this.navClass = '';
				} else {
					this.logo = 'logo.png';
					this.navClass = 'white-logo';
				}
			}
		});
	}

	public closeMenu() {
		UIkit.offcanvas('#offcanvas-flip').hide();
	}
}
