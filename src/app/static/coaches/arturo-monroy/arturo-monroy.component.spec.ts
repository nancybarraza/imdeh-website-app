import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArturoMonroyComponent } from './arturo-monroy.component';

describe('ArturoMonroyComponent', () => {
	let component: ArturoMonroyComponent;
	let fixture: ComponentFixture<ArturoMonroyComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ArturoMonroyComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ArturoMonroyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
