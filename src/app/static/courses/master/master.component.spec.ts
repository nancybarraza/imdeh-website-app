import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterComponent } from './master.component';

import { DataManagerService } from '@services/data-manager.service';

import { WebServices } from '@services/webservices.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { RouterTestingModule } from '@angular/router/testing';

describe('MasterComponent', () => {
	let component: MasterComponent;
	let fixture: ComponentFixture<MasterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterComponent],
			imports: [HttpClientModule, RouterTestingModule],
			providers: [AppSettings, DataManagerService, WebServices, HttpClient],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MasterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
