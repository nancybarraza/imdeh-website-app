import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighDirectionComponent } from './high-direction.component';

import { DataManagerService } from '@services/data-manager.service';

import { WebServices } from '@services/webservices.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { RouterTestingModule } from '@angular/router/testing';

describe('HighDirectionComponent', () => {
	let component: HighDirectionComponent;
	let fixture: ComponentFixture<HighDirectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HighDirectionComponent],
			imports: [HttpClientModule, RouterTestingModule],
			providers: [AppSettings, DataManagerService, WebServices, HttpClient],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HighDirectionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
