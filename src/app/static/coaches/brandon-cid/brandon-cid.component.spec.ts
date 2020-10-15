import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandonCidComponent } from './brandon-cid.component';

describe('BrandonCidComponent', () => {
	let component: BrandonCidComponent;
	let fixture: ComponentFixture<BrandonCidComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrandonCidComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrandonCidComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
