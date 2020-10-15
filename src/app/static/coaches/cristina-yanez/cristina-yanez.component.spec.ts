import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CristinaYanezComponent } from './cristina-yanez.component';

describe('CristinaYanezComponent', () => {
	let component: CristinaYanezComponent;
	let fixture: ComponentFixture<CristinaYanezComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CristinaYanezComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CristinaYanezComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
