import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlisesChavezComponent } from './ulises-chavez.component';

describe('UlisesChavezComponent', () => {
	let component: UlisesChavezComponent;
	let fixture: ComponentFixture<UlisesChavezComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UlisesChavezComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UlisesChavezComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
