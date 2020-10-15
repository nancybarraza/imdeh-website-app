import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DianaChavezComponent } from './diana-chavez.component';

describe('DianaChavezComponent', () => {
	let component: DianaChavezComponent;
	let fixture: ComponentFixture<DianaChavezComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DianaChavezComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DianaChavezComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
