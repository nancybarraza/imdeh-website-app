import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebirthComponent } from './rebirth.component';

import { DataManagerService } from '@services/data-manager.service';

import { WebServices } from '@services/webservices.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { RouterTestingModule } from '@angular/router/testing';

describe('RebirthComponent', () => {
	let component: RebirthComponent;
	let fixture: ComponentFixture<RebirthComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RebirthComponent],
			imports: [HttpClientModule, RouterTestingModule],
			providers: [AppSettings, DataManagerService, WebServices, HttpClient],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RebirthComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
