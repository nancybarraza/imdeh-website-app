import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonCervantesComponent } from './simon-cervantes.component';

describe('SimonCervantesComponent', () => {
	let component: SimonCervantesComponent;
	let fixture: ComponentFixture<SimonCervantesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SimonCervantesComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SimonCervantesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
