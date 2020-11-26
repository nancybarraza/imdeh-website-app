import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSettings } from '@services/app-settings';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
	let component: ContactFormComponent;
	let fixture: ComponentFixture<ContactFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContactFormComponent],
			providers: [AppSettings],
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
