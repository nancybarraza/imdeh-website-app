import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CoachComponent } from './coach.component';

describe('CoachComponent', () => {
	let component: CoachComponent;
	let fixture: ComponentFixture<CoachComponent>;

	const fakeActivatedRoute = ({
		snapshot: {
			data: {
				name: 'Master',
			},
		},
	} as unknown) as ActivatedRoute;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoachComponent],
			imports: [RouterTestingModule],
			providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoachComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
