import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerService } from '@services/data-manager.service';

import { WebServices } from '@services/webservices.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { ResultsProgramComponent } from './results-program.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ResultsProgramComponent', () => {
	let component: ResultsProgramComponent;
	let fixture: ComponentFixture<ResultsProgramComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule, RouterTestingModule],
			declarations: [ResultsProgramComponent],
			providers: [AppSettings, DataManagerService, WebServices, HttpClient],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ResultsProgramComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
