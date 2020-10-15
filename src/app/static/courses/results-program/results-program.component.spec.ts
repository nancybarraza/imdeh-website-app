import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsProgramComponent } from './results-program.component';

describe('ResultsProgramComponent', () => {
	let component: ResultsProgramComponent;
	let fixture: ComponentFixture<ResultsProgramComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ResultsProgramComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ResultsProgramComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
