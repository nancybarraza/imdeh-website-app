import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErickChavezComponent } from './erick-chavez.component';

describe('ErickChavezComponent', () => {
	let component: ErickChavezComponent;
	let fixture: ComponentFixture<ErickChavezComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ErickChavezComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ErickChavezComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
