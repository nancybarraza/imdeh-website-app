import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanessaChavezComponent } from './vanessa-chavez.component';

describe('VanessaChavezComponent', () => {
	let component: VanessaChavezComponent;
	let fixture: ComponentFixture<VanessaChavezComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VanessaChavezComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VanessaChavezComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
