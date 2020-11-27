import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbersComponent } from './embers.component';

import { DataManagerService } from '@services/data-manager.service';

import { WebServices } from '@services/webservices.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { RouterTestingModule } from '@angular/router/testing';

describe('EmbersComponent', () => {
	let component: EmbersComponent;
	let fixture: ComponentFixture<EmbersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EmbersComponent],
			imports: [HttpClientModule, RouterTestingModule],
			providers: [AppSettings, DataManagerService, WebServices, HttpClient],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmbersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
