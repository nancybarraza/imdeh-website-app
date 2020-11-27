import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverComponent } from './discover.component';

import { DataManagerService } from '@services/data-manager.service';

import { WebServices } from '@services/webservices.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { RouterTestingModule } from '@angular/router/testing';

describe('DiscoverComponent', () => {
	let component: DiscoverComponent;
	let fixture: ComponentFixture<DiscoverComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DiscoverComponent],
			imports: [HttpClientModule, RouterTestingModule],
			providers: [AppSettings, DataManagerService, WebServices, HttpClient],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DiscoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
