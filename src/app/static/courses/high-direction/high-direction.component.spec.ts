import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighDirectionComponent } from './high-direction.component';

describe('HighDirectionComponent', () => {
	let component: HighDirectionComponent;
	let fixture: ComponentFixture<HighDirectionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HighDirectionComponent],
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
