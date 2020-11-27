import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManagerService } from '@services/data-manager.service';

import { WebServices } from '@services/webservices.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppSettings } from '@services/app-settings';

import { RouterTestingModule } from '@angular/router/testing';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
	let component: ContactFormComponent;
	let fixture: ComponentFixture<ContactFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContactFormComponent],
			imports: [HttpClientModule, RouterTestingModule],
			providers: [AppSettings, DataManagerService, WebServices, HttpClient],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
